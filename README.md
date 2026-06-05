# BitReady Index Static Website

This repository contains a clean, professional static landing page for **BitReady Index by Holt Holdings**.

BitReady Index is positioned as a patented drill bit storage, lubrication, and cleaning system for licensing, prototyping, manufacturing, and product development conversations.

Patent line: Invented by Austin Holt. Protected by U.S. Patent No. US 12,642,349 B1.

## Files

- `index.html` - one-page landing page content, SEO metadata, Open Graph tags, and contact form
- `styles.css` - responsive industrial product styling and original CSS concept visual
- `script.js` - mobile navigation, current year, and placeholder Formspree handling
- `.nojekyll` - keeps GitHub Pages from running Jekyll processing
- `assets/README.md` - placeholder notes for future owned product visuals

## Edit Contact Details

Update the visible contact placeholder in `index.html`:

```html
Contact: [add preferred email here]
```

Replace it with the preferred Holt Holdings contact email or business inquiry address.

## Edit Formspree

The form currently uses a placeholder Formspree action:

```html
https://formspree.io/f/YOUR_FORM_ID
```

Create a Formspree form, copy the real form endpoint, and replace `YOUR_FORM_ID` in `index.html`.

Until that value is replaced, `script.js` prevents submission and shows a helpful launch message.

## GitHub Pages Deployment

This site is ready for GitHub Pages at:

https://austindholt.github.io/bitready/

Deploy from GitHub:

1. Open the `austindholt/bitready` repository on GitHub.
2. Go to Settings.
3. Open Pages.
4. Under Build and deployment, choose Deploy from a branch.
5. Select `main`.
6. Select `/root`.
7. Save.

The site uses relative paths only, so it works from the `/bitready/` project URL.

## Asset And Copy Notes

All website copy, layout, styling, and concept visuals are original for this site.

Do not add InventHelp branding, InventHelp copy, InventHelp website screenshots, InventHelp mockups, or third-party assets. Future product visuals should be owned by Holt Holdings, commissioned for this project, or otherwise cleared for use.

The current product visual is a CSS-built placeholder. Replace the Open Graph placeholder path with an owned image when a real product render or approved brand graphic is available.
