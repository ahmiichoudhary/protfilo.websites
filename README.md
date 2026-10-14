# NovaFolio — Personal Portfolio

A responsive, modern portfolio website built with plain HTML, CSS, and JavaScript. It is designed to deploy easily on **GitHub Pages** without a build step or backend.

## Files

- `index.html` — page structure and portfolio content
- `style.css` — visual design, responsive layouts, animations, and light-theme variables
- `script.js` — mobile navigation, theme switch, reveal-on-scroll, and automatic footer year
- `README.md` — setup and publishing guide

## Before you publish

1. Open `index.html`.
2. Replace **Your Name** with your name.
3. Replace `hello@example.com` in the contact link and hint with your real email address.
4. Replace the sample project concepts with your own projects, screenshots, descriptions, and URLs.
5. Update the About section and skills to match your actual experience.
6. Save all files.

> The contact button opens the visitor's email application using a `mailto:` link. It does not submit messages to a database. A working contact form that sends messages requires a backend or a form service.

## Run locally

Open `index.html` in your browser. For local development, you can also use the VS Code **Live Server** extension.

## Publish with GitHub Pages

1. Sign in to [GitHub](https://github.com/).
2. Create a new repository. For a personal homepage, name it `YOUR-USERNAME.github.io`. Alternatively, use any repository name for a project site.
3. Upload `index.html`, `style.css`, `script.js`, and `README.md` to the repository's root folder.
4. Open the repository's **Settings → Pages**.
5. Under **Build and deployment**, choose **Deploy from a branch**.
6. Choose the `main` branch and `/ (root)` folder, then click **Save**.
7. Wait for GitHub Pages to publish the site. The live URL will appear in the Pages settings.

For a user/organization site, the address is usually `https://YOUR-USERNAME.github.io/`. For a project site, it is usually `https://YOUR-USERNAME.github.io/REPOSITORY-NAME/`.

## Customization

- **Colors:** edit the CSS variables at the top of `style.css` inside `:root`.
- **Text and sections:** edit `index.html`.
- **Interactions:** edit `script.js`.
- **Fonts:** the page loads DM Sans and Space Grotesk from Google Fonts; system fallbacks are included.

## Notes

- No framework, package manager, or build command is required.
- The website is responsive for desktop, tablet, and mobile.
- Test all links and proofread your content before sharing your live portfolio.
