Personal portfolio website for Jedidiah Alindogan, built with React and Rsbuild.
Live site: https://jedi-alindogan.github.io.

Use Node.js 20.19+ (20.x) or 22.12+ and npm. From the repository folder:

```bash
npm ci
npm start
```

The development server runs at http://localhost:3000 (or the next available port
if 3000 is occupied). To check the production website locally:

```bash
npm run build
npm run preview
```

Rsbuild writes the production files to `build/`. Configuration is in
`rsbuild.config.mjs`, with `src/index.js` as the entry point and
`public/index.html` as the HTML template. Imported images, GIFs, and PDFs are
bundled automatically; the configuration includes a PDF asset rule.

Keep these files in Git:

- `package.json`: dependencies, npm commands, and Node.js requirements.
- `package-lock.json`: exact dependency versions for reproducible `npm ci` installs.
- `rsbuild.config.mjs`, `.gitignore`, `README.md`, and `LICENSE`.
- `src/` and `public/`, including the site's CV, project media, and publication PDFs.

`node_modules/` and `build/` are generated locally and already excluded by
`.gitignore`. You do not need to delete them before committing or publishing.
Create React App's `react-scripts` dependency and its `test`, `eject`, and ESLint
configuration have already been removed. There are currently no automated tests
or standalone lint setup; `npm run build` does not run ESLint.

To save and push source changes, review the files before staging:

```bash
git status
git diff
git add .
git commit -m "Update portfolio"
git push
```

If the current branch has no upstream yet, use
`git push -u origin YOUR_BRANCH_NAME` instead, replacing `YOUR_BRANCH_NAME` with
the output of `git branch --show-current`.

To publish the current local website:

```bash
npm run deploy
```

The `predeploy` command automatically runs `npm run build`, then `gh-pages`
publishes the contents of `build/` to the `gh-pages` branch. Git authentication
and push access to the repository are required. Pushing your source branch and
publishing the website are separate steps; this repository has no workflow that
automatically builds the site when you push source changes.

In GitHub's repository Settings → Pages, choose **Deploy from a branch**, then
**gh-pages** and **/ (root)** as the publishing source. If the branch does not
exist yet, run the first deployment before selecting it. See
[GitHub's publishing-source instructions](https://docs.github.com/en/pages/getting-started-with-github-pages/configuring-a-publishing-source-for-your-github-pages-site).

The build is configured for hosting at the domain root using
`output.assetPrefix: '/'`. The `homepage` value in `package.json` records the site
URL; Rsbuild's asset paths are controlled by `rsbuild.config.mjs`.
BrowserRouter routes work with the development and preview servers' SPA fallback.
GitHub Pages has no SPA fallback configured here, so direct visits or reloads on
project routes such as `/linc` can return a 404. Opening project tiles on the home
page does not require those routes.

To update site content:

- Edit `src/components/about/About.jsx` for the biography and summary cards.
- Edit `src/components/experience/Experience.jsx` for Education and Career.
- Edit `src/components/projects/Projects.jsx` for project tiles and
  `src/components/projects/src/project/` for project details. Project media lives
  in `src/components/projects/src/media/`; standalone routes live in `src/App.jsx`.
- Edit `src/data/publications.js` for publication titles, years, authors, and links.
  For a local paper, import its PDF and use the imported URL as `href`.
- Edit the `data` array in `src/components/outreach/Outreach.jsx` for volunteering.
- Replace `src/assets/cv.pdf` to update the downloadable CV.

CV changes do not automatically update the other sections; edit their content
separately to keep it consistent.
