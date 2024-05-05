

# Matteo's Personal Website

Welcome to the repository for my personal website built with Gatsby. This site features my portfolio, blog, and a bit about my background. It's designed to showcase my projects and share my thoughts through blog posts.


You can check it out [here](https://mbucci.eu)

### Current build status

 [![Netlify Status](https://api.netlify.com/api/v1/badges/8cbf709f-ae99-4abd-ac9c-b607dfaca0d7/deploy-status)](https://app.netlify.com/sites/matteobucci/deploys)

 ## Features

- Built with Gastby. This can be simply deployed with Netfly by linking the repository and configuring the rigt env variables.
- Blog/Project showcase. By adding new mdx files with proper tags, new content is automatically added to the website
- Connection to Notion. At build-time, new pages are downloaded and added to the build process. This allows an easier blog-writing experience.

## Getting started

I am assuming that you already have a nice version of Node installed.

This project uses yarn as package manager.

```npm install -G yarn```

**Set the enviroment variables**
```
NOTION_KEY=
NOTION_DB_ID=
```
These variables will allow to use of a pages database on Notion and convert them in .mdx files


**Install dependencies**

```yarn```

**Run the website locally**

```yarn start```

**Build the website**

```yarn build```
