// Step 1: Import React
import * as React from 'react'
import Layout from '../components/layout'
import Seo from '../components/seo'

// Step 2: Define your component
const Statistics = () => {
  return (
    <div>
      <p>Hi there! I'm the proud dada of this site, which I built with Gatsby.</p>
    </div>
  )
}

Statistics.Layout = Layout;

export const Head = () => <Seo title="Projects" />

// Step 3: Export your component
export default Statistics


// A memoized function is a function that caches its output.
// The next time you call the function with the same arguments, it will return the cached output instead of recalculating it.

// A good library to display video in react is react-player
// https://www.npmjs.com/package/react-player

// A good library to display carousels in react is react-slick
// https://www.npmjs.com/package/react-slick

// Dropout is a technique where randomly selected neurons are ignored during training. They are “dropped-out” randomly. This means that their contribution to the activation of downstream neurons is temporally removed on the forward pass and any weight updates are not applied to the neuron on the backward pass.

