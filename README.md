This is a repo for my personal website, built with React and Rsbuild.

Use Node.js 20.19+ (20.x) or 22.12+ and install dependencies with `npm ci`.

- `npm start` runs the development server at [http://localhost:3000](http://localhost:3000).
- `npm run build` creates the production website in `build/`.
- `npm run preview` serves the production build locally for verification.
- `npm run deploy` builds the website and publishes `build/` to GitHub Pages using `gh-pages`.

The site is hosted at the domain root, https://jedi-alindogan.github.io.
Rsbuild uses `public/index.html` as the HTML template and bundles imported images,
GIFs, and PDFs. Browser routes use the development and preview server's SPA fallback;
GitHub Pages still requires its own fallback for direct visits to project routes.

There are currently no automated tests or standalone lint setup. The unused CRA
testing dependencies and CRA-only `test`, `eject`, and ESLint configuration were
removed during migration. Rsbuild does not run ESLint as part of the build.

Add or update publication entries in `src/data/publications.js`. Each entry has a
title, year, link, and optional author and venue metadata. For a local paper, import
its PDF and use the imported URL as the entry's `href`.
