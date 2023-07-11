import React from 'react'
import { Link } from 'gatsby'
import { ExternalLinkIcon } from '../assets/ExternalLinkIcon'
import moon from '../assets/moon.png'

const mainNavItems = [
  { url: '/', label: 'Home', mobileOnly: true }, // I show this only on mobile instead of the main title
  { url: '/about', label: 'About' },
  { url: '/blog',label: 'Blog' },
  { url: '/projects', label: 'Projects' },
  { url: '/stats', label: 'Statistics' },
]

const socialNavItems = [
  { url: 'https://github.com/matteobucci', label: 'GitHub' },
]

export const Navigation = ({ theme, onUpdateTheme }) => {
  return (
    <section className="navigation">
      <div className="container">
        <div className="nav-wrapper">
          <Link to="/" className="item brand">
            {/* <img src={floppyLogo} className="logo" alt="Matteo Bucci" /> */}
            <span>Matteo Bucci</span>
          </Link>
          <nav>
            {mainNavItems.map((item) => (
              <div className="nav-item-outer" key={item.url}>
                <Link
                  to={item.url}
                  key={item.label}
                  activeClassName="active"
                  className={`item ${item.mobileOnly ? "mobile-only" : ""}`}
                >
                  <span>{item.label}</span>
                </Link>
              </div>
            ))}

            {socialNavItems.map((item) => (
              <div className="nav-item-outer" key={item.url}>
                <img src={item.icon} alt={item.label} className="nav-image" />
                <a
                  href={item.url}
                  key={item.label}
                  className={`desktop-only item`}
                  target="_blank"
                  rel="noreferrer"
                >
                  <span>{item.label}</span>
                  <ExternalLinkIcon />
                </a>
              </div>
            ))}
          </nav>
        </div>
        <div className="theme-toggle">
          <button onClick={onUpdateTheme}>
            <img src={moon} alt="Theme" />
          </button>
        </div>
      </div>
    </section>
  );
}
