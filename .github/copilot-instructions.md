# Copilot instructions — PetSaviour Website

Summary
- Small Create React App (CRA) frontend using `react-scripts` (see `package.json`).
- Hybrid styling: Tailwind utility classes plus per-component CSS files in `src/components`.

Quick actions
- Install: `npm install` (or `yarn`).
- Run dev server: `npm start` (runs `react-scripts start`).
- Build production bundle: `npm run build`.
- Run tests: `npm test` (CRA test runner / `@testing-library/react`).

Architecture & patterns (what to know)
- App shell: `src/index.js` + `src/App.js` load routes/components; static assets live in `public/`.
- Components: most UI lives under `src/components/`. Example complex components:
  - `src/components/ProfileCard.jsx` — custom tilt/animation engine, uses CSS variables and manual DOM listeners; prefer small, targeted edits and preserve cleanup in `useEffect`.
  - `src/components/Navbar.jsx` — Tailwind + responsive patterns (desktop `md:` classes, mobile menu toggle).
- Experimental / widget UI: `src/ui/3d-card/index.jsx` and `src/ui/3d-card/styles.css` contain self-contained demos — treat them as isolated examples.
- Assets: place images/icons in `src/assets` and import with relative paths (see `Navbar.jsx` imports).

Conventions & gotchas
- File types: `.jsx` used for React components; default exports and `React.memo` appear in performance-sensitive components.
- Styling: mix of Tailwind and component-specific CSS files (e.g. `ProfileCard.css`). When changing layout, update both utility classes and the related CSS file if present.
- Event listeners: some components attach raw DOM listeners and call `requestAnimationFrame` (see `ProfileCard.jsx`) — ensure proper cleanup to avoid leaks.
- Tailwind: config at `tailwind.config.js` — pay attention to custom fonts/colors (e.g. `pop`, `pastelPeach`) when adding classes.

Integration points
- No backend in this repo — purely client-side. If integrating APIs, add environment variables and call from `src/` code; update `public/manifest.json` if PWA metadata must change.

Testing & debugging notes
- Tests use `@testing-library/react`. See `src/setupTests.js` for test setup.
- To debug runtime issues locally use `npm start` and the browser console; for build-time problems run `npm run build` and inspect errors from `react-scripts`.

When making changes
- Keep component CSS adjacent to the component (`Component.css`) and import it at top of the `.jsx` file.
- Preserve destructuring and props patterns; many components accept many optional props (e.g. `ProfileCardComponent`).
- Avoid changing global build config (CRA) unless necessary — follow CRA patterns in `package.json` scripts.

Files to inspect first for new work
- `package.json`, `tailwind.config.js`, `public/index.html`, `src/components/ProfileCard.jsx`, `src/components/Navbar.jsx`, `src/ui/3d-card/index.jsx`.

If anything in this doc is unclear or missing for your task, tell me what you want the agent to do next (edit, add examples, or extend rules).
