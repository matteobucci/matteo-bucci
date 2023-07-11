// Step 1: Import React
import * as React from 'react'
import { StaticImage } from 'gatsby-plugin-image'
import Layout from '../components/layout'
import Seo from '../components/seo'


// Step 2: Define your component
const IndexPage = () => {
  return (
    <div>
      <p>I'm making this by following the Gatsby Tutorial.</p>

      <StaticImage
        alt="Myself, Matteo Bucci when I was around 8"
        src="../images/matteo-2003.jpg"
      />
    </div>
  );
}

IndexPage.Layout = Layout;

export const Head = () => <Seo title="Home Page" />

// Step 3: Export your component
export default IndexPage
