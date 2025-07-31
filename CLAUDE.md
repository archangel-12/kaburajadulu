# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Overview

KaburAjaDulu is an Astro-based platform helping Indonesians explore study and work opportunities abroad. The project uses Astro with React components, Tailwind CSS for styling, and TypeScript for type safety.

## Development Commands

```bash
# Install dependencies
bun install

# Start development server
bun dev

# Build for production
bun run build

# Preview production build
bun run preview
```

## Architecture Overview

### Tech Stack
- **Framework**: Astro 5.9.4 with React integration
- **Styling**: Tailwind CSS v4 with Tailwind Animate
- **UI Components**: Custom React components with Radix UI primitives (ShadCN)
- **Type Safety**: TypeScript with strict mode
- **Build Tool**: Vite (integrated with Astro)
- **Package Manager**: Bun

### Project Structure
```
src/
├── components/         # React components
│   ├── home/          # Landing page sections (HeroSection, AboutSection, etc.)
│   ├── layout/        # Layout components (Navbar, Footer)
│   └── ui/            # Reusable UI components (Button, Card, Badge)
├── constants/         # Application constants (urls.ts)
├── layouts/           # Astro layout templates (Layout.astro)
├── lib/              # Utility functions (utils.ts with cn() for className merging)
├── pages/            # File-based routing (currently only index.astro)
└── styles/           # Global CSS styles
```

### Key Patterns

1. **Component Styling**: Uses `cn()` utility from `src/lib/utils.ts` for className merging with clsx and tailwind-merge
2. **Path Aliasing**: `@/*` maps to `src/*` (configured in tsconfig.json and astro.config.mjs)
3. **Layout System**: Base layout in `src/layouts/Layout.astro` with SEO metadata, Open Graph tags, and JSON-LD schema
4. **Font System**: Uses Plus Jakarta Sans as primary font and Caveat as accent font

### Important Files
- `astro.config.mjs`: Astro configuration with React integration and path aliases
- `src/layouts/Layout.astro`: Base layout with comprehensive SEO setup
- `src/lib/utils.ts`: Contains cn() utility for className merging
- `src/constants/urls.ts`: Centralized URL constants

## Current Status

The project is in early development with:
- ✅ Landing page implementation
- ⏳ Blog system (planned)
- ⏳ Scholarship/job opportunities listing (planned)
- Single page application currently (only index.astro exists)

## Development Guidelines

1. **Component Creation**: Follow existing patterns in `src/components/ui/` for new UI components
2. **Styling**: Use Tailwind CSS classes with the cn() utility for conditional styling
3. **Type Safety**: TypeScript strict mode is enabled - ensure all code is properly typed
4. **SEO**: Update Layout.astro props when creating new pages (title, description, canonical)