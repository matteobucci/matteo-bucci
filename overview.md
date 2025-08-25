# Project Overview: Matteo Bucci's Personal Website

## Description
A personal portfolio and blog website built with Gatsby, showcasing projects, blog posts, and professional background. The site features a modern design with dark/light theme support and integrates with Notion for content management.

## Key Information
- **Author**: Matteo Bucci
- **URL**: https://mbucci.eu
- **Deployment**: Netlify (automated deployment)
- **Status**: [![Netlify Status](https://api.netlify.com/api/v1/badges/8cbf709f-ae99-4abd-ac9c-b607dfaca0d7/deploy-status)](https://app.netlify.com/sites/matteobucci/deploys)

## Technology Stack

### Core Framework
- **Gatsby 5.11.0** - React-based static site generator
- **React 18.2.0** - Frontend library
- **TypeScript 5.1.6** - Type checking and development

### Content Management
- **MDX 2.3.0** - Markdown with JSX components
- **Notion API** - External content management via Notion database
- **Custom build script** - Automated Notion-to-MDX conversion

### Styling & UI
- **CSS Modules** - Component-scoped styling
- **Prism.js** - Syntax highlighting for code blocks
- **React Type Animation** - Animated typing effects
- **Custom dark/light theme system**

### Analytics & SEO
- **Cloudflare Web Analytics** - Privacy-focused analytics
- **Gatsby Sitemap Plugin** - Automated sitemap generation
- **Robots.txt Plugin** - Search engine optimization
- **React Helmet** - Meta tag management

### Package Management
- **Yarn 1.22.15** - Dependency management

## Project Structure

```
├── content/                     # Content directories
│   ├── blog/                   # Blog posts (MDX files)
│   ├── notion-pages/           # Auto-generated from Notion
│   └── projects/               # Project showcases
├── src/
│   ├── components/             # React components
│   │   ├── layout.js          # Main layout with theme switching
│   │   ├── navigation.js      # Site navigation
│   │   ├── sections/          # Page sections (experiences, projects, technologies)
│   │   └── typing-introduction.js # Animated intro component
│   ├── pages/                 # Gatsby pages
│   │   ├── index.js          # Homepage
│   │   ├── about.js          # About page
│   │   ├── blog/             # Blog listing and post templates
│   │   └── projects/         # Projects listing
│   ├── assets/               # Images, icons, and static assets
│   └── styles/               # Global CSS styles
├── scripts/
│   └── notion-to-blog.js     # Notion integration script
├── static/                   # Static files (served directly)
├── gatsby-config.ts          # Gatsby configuration
└── package.json             # Dependencies and scripts
```

## Key Features

### 1. Content Management
- **Dual content sources**: Manual MDX files and automated Notion integration
- **Blog system**: Automatic blog post generation from MDX files with frontmatter
- **Project showcase**: Dedicated section for portfolio projects
- **Dynamic content loading**: GraphQL queries for content aggregation

### 2. User Experience
- **Responsive design**: Mobile-friendly layout
- **Theme switching**: Dark/light mode with localStorage persistence
- **Animated elements**: Typing animation on homepage
- **Interactive sections**: Collapsible content areas
- **Personal statistics**: Dynamic stats component

### 3. Technical Features
- **Static site generation**: Fast loading and SEO-friendly
- **Image optimization**: Gatsby image processing and optimization
- **Code highlighting**: Syntax highlighting for technical blog posts
- **SEO optimization**: Automated sitemap, robots.txt, and meta tags
- **Analytics integration**: Privacy-focused web analytics

### 4. Notion Integration
- **Automated content sync**: Build-time integration with Notion database
- **Image handling**: Automatic download and optimization of Notion images
- **Markdown conversion**: Converts Notion blocks to MDX format
- **Selective publishing**: Only publishes pages marked as "Ready" in Notion

## Development Workflow

### Environment Setup
```bash
yarn install
# Set environment variables:
# NOTION_KEY=your_notion_integration_key
# NOTION_DB_ID=your_notion_database_id
```

### Available Scripts
- `yarn start` - Development server
- `yarn build` - Production build (includes Notion sync)
- `yarn serve` - Serve built site locally
- `yarn typecheck` - TypeScript type checking
- `yarn import-notion-pages` - Manual Notion content sync

### Content Creation
1. **Blog posts**: Create MDX files in `content/blog/` with proper frontmatter
2. **Projects**: Add project showcases in `content/projects/`
3. **Notion integration**: Write in Notion, mark as "Ready" for automatic inclusion

## Deployment
- **Platform**: Netlify
- **Trigger**: Automatic deployment on git push
- **Build command**: `yarn build` (includes Notion sync)
- **Environment variables**: NOTION_KEY and NOTION_DB_ID required

## Architecture Highlights
- **JAMstack architecture**: JavaScript, APIs, and Markup for optimal performance
- **GraphQL data layer**: Unified content querying across all sources
- **Plugin ecosystem**: Leverages Gatsby's rich plugin ecosystem
- **Modern React patterns**: Hooks, functional components, and context
- **Type safety**: TypeScript integration for better developer experience