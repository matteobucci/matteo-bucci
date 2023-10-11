import * as React from 'react'
import { graphql, useStaticQuery } from 'gatsby'

const Seo = ({ title }) => {
  const data = useStaticQuery(graphql`
    query {
      site {
        siteMetadata {
          title
        }
      }
    }
  `)

  return (
    // By default we use the site title, but we let the parent component override it if needed
    <title>{title} | {data.site.siteMetadata.title}</title>
    
  )
}

export default Seo