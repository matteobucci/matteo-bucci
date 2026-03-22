# CLAUDE.md

This file provides guidance for AI assistants working with this repository.

## Project Overview

Personal portfolio and blog website for Matteo Bucci (https://mbucci.eu), built with **Gatsby 5** and **React 18**. The site features a blog, project showcase, sports statistics, and Notion-powered content management. Deployed on **Netlify** with automatic builds on push.

## Tech Stack

- **Framework**: Gatsby 5.11 (static site generator)
- **UI**: React 18 with TypeScript 5.1
- **Content**: MDX files + Notion API integration
- **Styling**: CSS Modules + global CSS with CSS variables for theming
- **Package Manager**: Yarn 1.22.15 (enforced via `packageManager` field)
- **Deployment**: Netlify (automatic) / Docker (Nginx-based alternative)

## Commands

```bash
yarn develop          # Start dev server (localhost:8000)
yarn build            # Import Notion pages + Gatsby build
yarn serve            # Serve production build locally
yarn clean            # Clear Gatsby cache
yarn typecheck        # Run TypeScript type checking (tsc --noEmit)
yarn import-notion-pages  # Fetch content from Notion API
```

## Project Structure

```
├── content/
│   ├── blog/              # Blog posts (subdirectories with index.mdx + assets)
│   ├── projects/          # Project showcase MDX files
│   └── notion-pages/      # Auto-generated from Notion (gitignored)
├── src/
│   ├── components/        # React components (layout, navigation, footer, seo, etc.)
│   │   └── sections/      # Page section components (experiences, technologies, projects)
│   ├── pages/             # Gatsby file-based routing
│   ├── styles/            # Global CSS (style.css, dark-mode.css)
│   ├── assets/            # Images, icons, SVGs
│   └── helpers.js         # Utility functions
├── scripts/
│   └── notion-to-blog.js  # Notion-to-MDX conversion script
├── static/                # Static assets served as-is
├── gatsby-config.ts       # Gatsby plugin and site configuration
├── gatsby-browser.jsx     # Client-side page wrapper
└── gatsby-ssr.js          # Server-side rendering page wrapper
```

## Architecture & Patterns

### Routing
Gatsby file-based routing in `src/pages/`. Blog post pages use dynamic routing via `blog/{mdx.frontmatter__slug}.js`.

### Content Pipeline
1. **MDX files** in `content/blog/` and `content/projects/` are the primary content source
2. **Notion integration** (`scripts/notion-to-blog.js`) fetches pages marked "Ready" from a Notion database, downloads images, and generates MDX files into `content/notion-pages/`
3. Gatsby processes all content via GraphQL at build time

### Theming
- Dark/light mode toggle stored in `localStorage`
- CSS variables defined in `src/styles/style.css`
- Dark theme loaded conditionally via `dark-mode.css`
- Comments (Utterances) sync with current theme

### Components
- `Layout` wraps all pages (theme switching, global structure)
- `Navigation` includes theme toggle
- `Seo` component manages meta tags via React Helmet
- `CodeBlock` provides syntax highlighting with Prism

### Data Fetching
- GraphQL static queries in page components
- No runtime API calls (static site)

## Code Conventions

- **Components**: PascalCase names, functional components with hooks
- **Files**: kebab-case for CSS modules (e.g., `layout.module.css`), lowercase for components
- **Functions**: camelCase
- **Styling**: CSS Modules for component styles, global CSS for base/theme styles
- **Mixed JS/TS**: Most files are `.js`/`.jsx`, some are `.ts`/`.tsx` (TypeScript strict mode enabled)

## Environment Variables

Required for Notion integration (build step):
- `NOTION_KEY` — Notion API integration token
- `NOTION_DB_ID` — Notion database ID

These are set in Netlify for production builds. For local development, create a `.env` file (gitignored).

## Validation

There is no test suite or linter configured. The primary validation tool is:

```bash
yarn typecheck    # TypeScript strict mode checking
```

After making changes, run `yarn typecheck` to verify type safety. For a full validation, run `yarn build` to ensure the site builds successfully.

## Key Files

| File | Purpose |
|------|---------|
| `gatsby-config.ts` | Site metadata, plugin configuration, content sources |
| `gatsby-browser.jsx` | Client-side page element wrapper |
| `gatsby-ssr.js` | Server-side page element wrapper |
| `scripts/notion-to-blog.js` | Notion API content sync script |
| `src/components/layout.js` | Main layout with theme management |
| `src/components/seo.js` | SEO/meta tag component |
| `src/styles/style.css` | Global styles and CSS variables |

## External Services

- **Netlify** — Hosting and CI/CD
- **Cloudflare Web Analytics** — Privacy-focused analytics
- **Notion** — External CMS for some blog posts
- **Utterances** — GitHub Issues-backed comments (repo: `matteobucci/matteo-bucci-comments`)

## Gitignored Artifacts

- `node_modules/`, `.cache/`, `public/` — Build artifacts
- `src/gatsby-types.d.ts` — Auto-generated GraphQL types
- `content/notion-pages/` — Auto-generated Notion content
- `.env` — Environment variables
