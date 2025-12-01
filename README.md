# Regenduo — Healthcare Landing Page

A responsive static landing page for a healthcare service called "Regenduo". The site includes a hero section, services cards, appointment form, customer feedback section, and a news/blog grid. Styles are authored in SCSS (`styles.scss`) and compiled to `styles.css`.

## Preview
- Open `index.html` in your browser to preview the site locally.
- For a quick static server use live server
- Or open using https://g3tech1.github.io/Project/

## Project structure (important files)

- `index.html` — main page
- `styles.scss` — SCSS source file (edit here)
- `styles.css` — compiled CSS used by the page
- `script.js` — JavaScript for interactivity
- `images/` — project images and icons

## Working with SCSS

This project uses an SCSS source file. If you edit `styles.scss` you must compile it to `styles.css` for the page to pick up your changes.

Recommended: install Dart Sass (via npm) and use the CLI to compile and/or watch for changes.

Install Sass (requires Node.js / npm):

PowerShell
```
npm install -g sass
```

Compile once:

PowerShell
```
sass styles.scss styles.css
```

Compile and watch for changes (auto-rebuild on edits):

PowerShell
```
sass --watch styles.scss:styles.css
```

If you prefer a GUI or an editor plugin, many editors (VS Code extensions) support automatic SCSS compilation.

## Responsive notes
- The `#news` blog grid uses a responsive CSS grid and explicit breakpoints so it shows 3 columns on wide screens, 2 on tablets/smaller desktops, and 1 on phones.
- Icon/arrow sizes are also responsive and scaled using media queries to match mobile proportions.

## Deployment suggestions
    You can fork this repo and deploy using
- GitHub Pages: create a repo, push your files, then enable Pages from the `main` (or `gh-pages`) branch or use a `/docs` folder. Static sites deploy directly.
- Netlify / Vercel: drag-and-drop the build folder or connect the repo for automatic deploys.

## Accessibility & improvements (ideas)
- Add `alt` text for every decorative/functional image (a number already exist but review for meaningful descriptions).
- Convert arrow images to inline SVGs or an icon font for crisper scaling.
- Improve form handling: currently the appointment form has no backend — add a small API or Netlify Forms if you want submissions to be recorded.
- Add HTML meta tags, and structured data if this will be published publicly.

## Contributing
If you want to update styles or content:

1. Edit `styles.scss` and compile to `styles.css` (see SCSS section).
2. Edit `index.html` content as needed.
3. Preview locally, commit, and push to your repository.

If you'd like, I can help:
- Add a build script (npm) to make SCSS compilation and previews easier.
- Replace arrow images with inline SVGs and update the markup.
- Prepare a `package.json` and a small `README` with deploy steps for GitHub Pages.

