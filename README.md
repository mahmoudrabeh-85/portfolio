# Mahmoud Rabeh Portfolio

Professional portfolio website for Mahmoud Rabeh — Procurement & Supply Chain Consultant, Arabic Teacher, and AI Specialist.

## Tech Stack

- **HTML/CSS/JS** — Static single-page application
- **Tailwind CSS** — CDN-loaded utility-first CSS
- **Cloudflare Pages** — Hosting and CDN
- **Formspree** — Contact form backend

## Quick Start

Open `portfolio.html` in a browser. No build step required.

## Project Structure

```
/
├── portfolio.html          Main page
├── 404.html                Custom error page
├── _headers                Cloudflare Pages security headers
├── _routes.json            Cloudflare Pages routing rules
├── robots.txt              Search engine directives
├── sitemap.xml             SEO sitemap
├── favicon.svg             Site icon
├── jpg.png                 Background image
├── .env.example            Environment variable template
├── SECURITY.md             Security documentation
└── DEPLOYMENT.md           Deployment guide
```

## Deployment

See [DEPLOYMENT.md](DEPLOYMENT.md) for complete deployment instructions.

**Quick version:**

1. Create a private GitHub repo
2. Push this project
3. Connect to Cloudflare Pages (Framework: None, Output: `/`)
4. Deploy

## Environment Variables

Copy `.env.example` to `.env` and fill in your values. Never commit `.env`.

Required in Cloudflare Pages dashboard:
- `FORMSPREE_FORM_ID` — Your Formspree form ID
- `WHATSAPP_NUMBER` — WhatsApp number (international format)
- `CONTACT_EMAIL` — Professional email
- `SITE_URL` — Production domain

## Security

- All security headers configured in `_headers`
- CSP allows only required third-party domains
- No secrets in source code
- See [SECURITY.md](SECURITY.md) for details

## License

All rights reserved. © 2026 Mahmoud Rabeh.
