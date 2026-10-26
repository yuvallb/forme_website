# בשבילי הצחוק

Hebrew, right-to-left site for בשבילי הצחוק: a stand-up workshop with emotional accompaniment for people in cancer rehabilitation, looking for pilot partners. The copy follows the pilot brief. The contact form stays in the browser.

The existing logo file is `public/workshop-logo.jpg`. It is not redrawn.

## Build the static site

Requires Node.js 20.9 or newer.

```bash
npm install
npm run build
```

`next build` writes HTML, CSS, and JavaScript into `out/`. The production site is those files. It does not run a Node server, and there are no API routes or server actions.

## Open the files without a server

Open `out/index.html` in a browser:

```bash
xdg-open out/index.html
```

On macOS use `open out/index.html`. On Windows, double-click `out/index.html`.

The contact form does not send mail and does not use a database. Submitting it shows a success state on the page only.

Google Analytics 4 measurement ID `G-2P2V41DZSX` loads on every page from the root layout.

The original DigitalOcean sample HTML app is kept in `legacy/sample-html`. The files in `.do/` are unchanged.
