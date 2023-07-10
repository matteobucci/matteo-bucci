// Step 1: Import React
import * as React from 'react'
import { StaticImage } from 'gatsby-plugin-image'
import Layout from '../components/layout'


// Step 2: Define your component
const IndexPage = () => {
  return (
    <Layout pageTitle="Homepage">
        <p>I'm making this by following the Gatsby Tutorial.</p>
       
          <StaticImage
          alt="Myself, Matteo Bucci when I was around 8"
          src="../images/matteo-2003.jpg"
        />
    </Layout>
  )
}

// You'll learn about this in the next task, just copy it for now
export const Head = () => <title>Home Page</title>

// Step 3: Export your component
export default IndexPage