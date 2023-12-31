import React from 'react'

//import netlify from '../../content/thumbnails/netlify.png'
import gatsby from '../assets/gatsby.png'
import github from '../assets/nav-github.png'

const links = [
  //{ url: 'https://the-roommate.com', label: 'RoomMate' },
  // { url: 'https://ko-fi.com/taniarascia', label: 'Ko-Fi' },
  // { url: 'https://patreon.com/taniarascia', label: 'Patreon' },
 //  { url: 'https://www.mbucci.eu/rss.xml', label: 'RSS' },
]
const madeWithLinks = [
  // { url: 'https://www.gatsbyjs.org/', label: 'Gatsby', icon: gatsby },
  { url: 'https://github.com/matteo-bucci', label: 'GitHub', icon: github },
 // { url: 'https://www.netlify.com', label: 'Netlify', icon: netlify },
]

export const Footer = () => {
  return (
    <footer className="footer">
      <section>
        <nav>
          <span className="desktop-only">Made by me in 🇱🇺</span>
          {links.map((link) => (
            <a
              href={link.url}
              target="_blank"
              rel="noopener noreferrer"
              key={link.url}
            >
              {link.label}
            </a>
          ))}
        </nav>
        <nav>
          {madeWithLinks.map((link) => (
            <a
              href={link.url}
              title={link.label}
              target="_blank"
              rel="noopener noreferrer"
              key={link.url}
            >
              <span>{link.label}</span>
              <img src={link.icon} alt={link.label} />
            </a>
          ))}
        </nav>
      </section>
    </footer>
  )
}
