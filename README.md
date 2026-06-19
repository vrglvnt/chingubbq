# Ristorante Chingu BBQ

Website for Ristorante Chingu BBQ, a Korean wok & BBQ restaurant in the heart of Mestre, Venice.

A single-page, hand-drawn / illustrated style site with anime-inspired motion, built with plain HTML, CSS, and vanilla JavaScript (no build step).

## Features

- Hand-drawn aesthetic matching the restaurant logo (Gaegu font, sticker-style cards, warm palette)
- Scroll-reveal and floating/anime-style animations
- Trilingual: English, Italian, Korean (header toggle, choice remembered)
- Full menu in a popup, rendered from a data file, with doodle category icons
- Real photos, Google Map, opening hours, reviews, and social links

## Structure

```
index.html        Page markup
css/style.css     Styling, animations, responsive layout
js/i18n.js        Translations (EN / IT / KO) + language switch
js/menu-data.js   Full menu data + popup renderer
js/main.js        Scroll reveal, sticky header, menu modal, mobile nav
images/logo.png   Restaurant logo
```

## Running

Open `index.html` in a browser. Photos, fonts, and the map load from the web,
so an internet connection is needed for those.

## Editing the menu

All dishes, prices and descriptions live in `js/menu-data.js`. Edit that file
to update the menu; no rebuild required.
