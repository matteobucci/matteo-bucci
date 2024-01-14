import type { GatsbyConfig } from "gatsby"

const config: GatsbyConfig = {
  siteMetadata: {
    title: `Matteo Bucci`,
    siteUrl: `https://mbucci.eu`,
    description: "Matteo Bucci's personal website. I am a software engineer living in Luxembourg."
  },
  graphqlTypegen: true,
  plugins: [
    /** Basic plugins */
    "gatsby-plugin-image",
    "gatsby-plugin-sharp",
    {
      resolve: `gatsby-plugin-mdx`,
      options: {
        extensions: [".mdx", ".md"]
      },
    },
    "gatsby-transformer-sharp",
    /** This should make available files like custom css and more */
    {
      resolve: "gatsby-source-filesystem",
      options: {
        name: "assets",
        path: `${__dirname}/static/`,
      },
    },
    /** Plugins to make the content available to graphql */
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `blog`,
        path: `${__dirname}/content/blog/`,
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `projects`,
        path: `${__dirname}/content/projects/`,
      },
    },
    'gatsby-plugin-react-helmet',
   {
      resolve: "gatsby-plugin-sitemap",
      options: {
      //  excludes: ['**/blog/**'] Eventually I would like to exclude the projects from the sitemap
      }
    },
    {
      resolve: 'gatsby-plugin-robots-txt',
      options: {
        host: 'https://mbucci.eu',
        sitemap: 'https://mbucci.eu/sitemap-index.xml',
        policy: [{ userAgent: '*', allow: '/' }]
      }
    },
  ],
};










export default config
