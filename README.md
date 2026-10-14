# Ahmad Ali — Creative Developer Portfolio

A responsive, single-page portfolio website built with **HTML, CSS, and vanilla JavaScript**. It is designed to be hosted directly on GitHub Pages—no build tools, framework, server, or paid hosting required.

## Website name
**Ahmad Ali — Creative Developer**

## Files

- `index.html` — page structure, metadata, sections, and content.
- `style.css` — responsive layouts, typography, color themes, animations, and project mockups.
- `script.js` — mobile navigation, dark mode, project filters, reveal animations, dynamic year, and copy-email interaction.
- `README.md` — this guide.

## Run locally

1. Download or extract the project folder.
2. Open `index.html` in a modern browser.
3. For local server testing, use VS Code's Live Server extension if available.

No dependencies or build step are required. Google Fonts are loaded online; system fallback fonts are used if they cannot load.

## Publish on GitHub Pages

1. Sign in to GitHub and create a **new public repository** (for example, `ahmad-ali-portfolio`).
2. Upload `index.html`, `style.css`, `script.js`, and `README.md` to the repository's **root** (not inside an extra nested folder).
3. Open the repository's **Settings → Pages**.
4. Under **Build and deployment**, select **Deploy from a branch**.
5. Choose branch **main** and folder **/(root)**, then click **Save**.
6. Wait a few minutes. GitHub will show your live website URL in the Pages settings.

Your public URL will usually look like `https://YOUR-USERNAME.github.io/REPOSITORY-NAME/`.

## Personalize before publishing

Search the project files for these demo values and replace them:

- `Ahmad Ali` — your preferred display name.
- `hello@example.com` — your real contact email. In `index.html`, update both the `mailto:` URL and the copy-email button's `data-email` value.
- `https://github.com/` and `https://www.linkedin.com/` — your actual profile URLs.
- The three project cards — replace concept projects, descriptions, and mockups with your real projects before presenting this as your professional work.
- The page description and title in `index.html` — customize for your name and specialty.

## Notes

- This is a **static frontend portfolio**. A backend/database is not needed for a GitHub Pages portfolio.
- The contact CTA opens the visitor's email app; it does not send messages to a server.
- No form submissions, analytics, or personal data are collected by this template.
- Use HTTPS and test the website on mobile before sharing it.
