import * as React from 'react'
import Helmet from 'react-helmet'
import { graphql, useStaticQuery } from 'gatsby'

const Seo = ({
  title,
  description = '',
  lang = 'en',
  meta = [],
  image: metaImage
}) => {
  const { site } = useStaticQuery(
    graphql`
      query {
        site {
          siteMetadata {
            title
            description
            siteUrl
      
          }
        }
      }
    `
  )

  const metaDescription = description || site.siteMetadata.description
  const image = metaImage && metaImage.src ? `${site.siteMetadata.siteUrl}${metaImage.src}` : null

  return (
    <Helmet
      htmlAttributes={{ lang }}
      title={title}
      titleTemplate={`%s | ${site.siteMetadata.title}`}
      meta={[
        {
          name: `description`,
          content: metaDescription,
        },
        {
          property: `og:title`,
          content: title,
        },
        {
          property: `og:description`,
          content: metaDescription,
        },
        {
          property: `og:type`,
          content: `website`,
        },
        // {
        //   name: `twitter:card`,
        //   content: `summary`,
        // },
        // {
        //   name: `twitter:creator`, 
        //   content: site.siteMetadata?.author || ``,
        // },
        // {
        //   name: `twitter:title`,
        //   content: title,
        // },
        // {
        //   name: `twitter:description`,
        //   content: metaDescription,
        // },
      ]
        .concat(
          metaImage
            ? [
              {
                property: 'og:image',
                content: image,
              },
              {
                property: 'og:image:width',
                content: metaImage.width,
              },
              {
                property: 'og:image:height',
                content: metaImage.height,
              },
              // {
              //   name: 'twitter:card',
              //   content: 'summary_large_image',
              // },
            ]
            : [
              // {
              //   name: 'twitter:card',
              //   content: 'summary',
              // },
            ]
        )
        .concat(meta)}
    />
  )
}

export default Seo