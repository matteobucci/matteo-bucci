require('dotenv').config()
const fs = require('fs')
var http = require('https')
const { Client } = require('@notionhq/client')
const { NotionToMarkdown } = require('notion-to-md')


const dirName = __dirname;

const notion = new Client({ auth: process.env.NOTION_KEY })
const DB_ID = process.env.NOTION_DB_ID;
const pagesPath = __dirname + '/../content/notion-pages'
const assetsPath = __dirname + '/../content/notion-pages/assets/'

const n2m = new NotionToMarkdown({ notionClient: notion })

// Get all pages in the database
async function getPages() {
  const pages = await notion.databases.query({
    database_id: DB_ID,
    filter: {
      property: 'Ready',
      checkbox: {
        equals: true,
      },
    },
  })
  return pages.results
}

const getBlocks = async blockId => {
  const response = await notion.blocks.children.list({
    block_id: blockId,
    page_size: 150,
  })
  return response.results
}


const download = (url, destination) => {
  const fileStream = fs.createWriteStream(destination)
  http.get(url, function (response) {
    response.pipe(fileStream)
    console.log('👨‍🍳 File downloaded', destination)
  })
}

const processPage = async (page) => {
    
    const id = page.id;
    const cleanedId = id.replace(/-/g, '');
    const fileName = page.url
                        .replace('https://www.notion.so/', '')
                        .replace(cleanedId, '')
                        .replace(/-$/, '')
                        .toLowerCase();

    const title = page.properties.Name.title.map(t => t.plain_text).join();
    
    const blocks = await getBlocks(page.id)
    let olCounter = 1

    const cleanBlocks = blocks.map((block, i) => {
      if (block.type === 'image') {
        const imgFileName = `${fileName}-${i}.jpg`
        const destination = assetsPath + imgFileName
        download(block.image.file.url, destination)
        block.image.file.url = './assets/' + imgFileName
      } else if (block.type === 'numbered_list_item') {
        olCounter = blocks[i - 1]?.type === 'numbered_list_item' ? olCounter + 1 : 1
        block.numbered_list_item.number = olCounter
      }
      return block
    })

    const mdblocks = await n2m.blocksToMarkdown(cleanBlocks)
    const mdString = n2m.toMarkdownString(mdblocks).parent
    const coverFileName = `${fileName}-cover.jpg`
    page.cover && download(page.cover.file.url, assetsPath + coverFileName)

    const header = 
`---
title: "${title}"
date: "${page.created_time}"
slug: "${fileName}"
template: "post"
${page.cover ? `cover: ./assets/${coverFileName}` : ''}
tags: ${page.properties.Tags.multi_select.map(t => `"${t.name}"`).join(', ')}
---
`
    const fileContent = header + mdString

    fs.writeFile(`${pagesPath}/${fileName}.mdx`, fileContent, () => {
      console.log(`👨‍🍳 File downloaded: ${fileName}`)
    })
}



(async () => {

    try{
        fs.rmdirSync(pagesPath, { recursive: true })
    }catch(e){
        console.log(e)
    }

    fs.mkdirSync(pagesPath)
    fs.mkdirSync(assetsPath)

  const pages = await getPages()

  for (const page of pages) {
    await processPage(page);
  }

})()