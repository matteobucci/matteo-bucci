import { graphql, useStaticQuery } from 'gatsby'
import React, { useEffect, useState } from 'react'
import { Navigation } from './navigation'
import { Footer } from './footer'
import {
  container
} from './layout.module.css'

import '../styles/style.css'


const Layout = ({ pageTitle, children }) => {

  const [theme, setTheme] = useState('dark')

  const onUpdateTheme = () => {
    const newTheme = theme === 'dark' ? 'light' : 'dark'
    window.localStorage.setItem('theme', newTheme)
    setTheme(newTheme)
  }

  useEffect(() => {
    const savedTheme = window.localStorage.getItem('theme')

    if (savedTheme) {
      setTheme(savedTheme)
    }
  }, [])

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
    <div className={container}>
      {theme === "dark" && (
        <link rel="stylesheet" type="text/css" href="/dark-mode.css" />
      )}
      <Navigation onUpdateTheme={onUpdateTheme} theme={theme} />
      <main>{children}</main>
      <Footer />
    </div>
  );
}

export default Layout