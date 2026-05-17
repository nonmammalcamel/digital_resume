# Ink Resume Starter

A Next.js starter for a **digital resume / portfolio** with a visual direction that blends:
- MS-DOS structure
- e-ink paper warmth
- massive legibility
- compact document-like layout
- restrained motion

## Palette
The starter ships with this theme baked in:

- `--bg: #f3efe5` - faded e-ink paper
- `--bg-panel: #f7f4ec` - slightly lifted surface tone
- `--fg: #171611` - primary ink
- `--fg-muted: #4d473d` - supporting text
- `--line: #7a7265` - main divider line
- `--line-soft: #b7b09f` - lighter separators
- `--accent: #566b56` - muted phosphor green accent
- `--accent-strong: #314331` - focused state / stronger emphasis

## Themeable structure
The starter now separates content from presentation:

```text
src/
  app/
    globals.css
    layout.tsx
    page.tsx
  components/
    hero-header.tsx
    site-frame.tsx
  content/
    site-content.ts
```

- `src/content/site-content.ts` holds the current resume content.
- `src/app/globals.css` holds the active theme tokens and styling.
- `src/components/` holds reusable UI pieces.

That means we can later keep the same content and swap to an entirely different visual theme without rebuilding the site structure from scratch.

## Current build state
The homepage is now focused on the first section only:
- hero / header
- Travis Kirby
- Paralegal / Legal Tech
- light MS-DOS / PowerShell references without sacrificing readability

## Getting started
Open this folder in VS Code, then run:

```bash
npm install
npm run dev
```

Then visit `http://localhost:3000`.

## Suggested workflow
1. Open the folder in VS Code
2. Initialize or connect your Git repo
3. Commit the starter
4. Push to GitHub
5. Import the repo into Vercel

## Next section
From here, build the next content block in `src/content/site-content.ts` and `src/app/page.tsx`, or continue section by section.
