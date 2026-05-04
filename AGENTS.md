# Portfolio Web Agent Guide

This repository is a static Next.js portfolio site. Keep edits small, local, and consistent with the existing component-driven structure.

## Project Map

- [app/page.tsx](app/page.tsx): main one-page layout that composes the portfolio sections.
- [app/layout.tsx](app/layout.tsx): root HTML shell, metadata, and top-level spacing/background.
- [app/globals.css](app/globals.css): global theme tokens, Tailwind setup, animation keyframes, and base styles.
- [components/](components): page sections and reusable UI pieces.
- [components/ui/](components/ui): low-level primitives and shared controls.
- [lib/utils.ts](lib/utils.ts): shared `cn()` helper for class merging.
- [next.config.ts](next.config.ts): static export and GitHub Pages base path configuration.
- [README.md](README.md): local run instructions.
- [.github/workflows/nextjs.yml](.github/workflows/nextjs.yml): GitHub Pages deployment workflow.

## What To Preserve

- The site is configured for static export with a base path of `/portfolio-web` in [next.config.ts](next.config.ts). Keep that in mind when adding links, assets, or route assumptions.
- The app uses App Router and is currently structured as a single landing page assembled from section components.
- The visual language relies on Tailwind utilities, the custom theme tokens in [app/globals.css](app/globals.css), and the font setup in [app/layout.tsx](app/layout.tsx).
- Shared UI should go in [components/ui/](components/ui) instead of duplicating patterns inside page sections.

## Local Workflow

- Start the app with `bun run dev`.
- Validate changes with `bun run lint`.
- Build the static site with `bun run build`.
- Use `bun run lint:fix` only when you want the formatter/linter to rewrite files automatically.

## Editing Conventions

- Prefer editing the smallest relevant component rather than refactoring across the whole page.
- Keep section content and hierarchy inside [app/page.tsx](app/page.tsx), and move reusable behavior into `components/`.
- Reuse [lib/utils.ts](lib/utils.ts) for class merging instead of adding another helper.
- If you add remote images, check the `images.remotePatterns` list in [next.config.ts](next.config.ts).
- For page-wide styling changes, update [app/globals.css](app/globals.css) and [app/layout.tsx](app/layout.tsx) together so the shell and tokens stay aligned.

## When You Need More Context

- Check [README.md](README.md) for the basic developer entry points.
- Check [.github/workflows/nextjs.yml](.github/workflows/nextjs.yml) before changing deployment behavior.
- If a task needs a new reusable pattern, create it in `components/ui/` first and then wire it into the section components.
