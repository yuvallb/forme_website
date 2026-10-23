# הסדנא החכמה

Hebrew, right-to-left marketing site for הסדנא החכמה, a small wisdom workshop for conversation, listening, and handwork. The page is a starting brand site: hero, about, offerings, how a visit works, and a contact form that stays in the browser.

The wordmark uses the spelling הסדנא החכמה. The logo file is `public/workshop-logo.jpg`.

## Run locally

Requires Node.js 20.9 or newer.

```bash
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000).

## Production build

```bash
npm run build
npm start
```

The contact form does not send mail and does not use a database. Submitting it shows a success state on the page only.

Google Analytics 4 measurement ID `G-2P2V41DZSX` loads on every page from the root layout.

The original DigitalOcean sample HTML app is kept in `legacy/sample-html`. The files in `.do/` are unchanged.
