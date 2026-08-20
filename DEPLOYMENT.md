# Deployment Guide

## Quick Reference

| Setting | Value |
|---------|-------|
| Framework preset | None (Static HTML) |
| Build command | `npm ci && npm run build:css` |
| Build output directory | `/` (root) |
| Node.js version | 24 (or any LTS >= 20) |

---

## Step 1: Create Private GitHub Repository

1. Go to https://github.com/new
2. Repository name: `portfolio` (or your choice)
3. Visibility: **Private**
4. Do NOT initialize with README (you already have one)
5. Click "Create repository"

## Step 2: Push to GitHub

```bash
# From your local project directory
git remote add origin https://github.com/YOUR_USERNAME/portfolio.git
git add .
git commit -m "Production-ready portfolio with security headers"
git branch -M main
git push -u origin main
```

## Step 3: Connect to Cloudflare Pages

1. Log in to https://dash.cloudflare.com
2. Go to **Workers & Pages** → **Create** → **Pages** → **Connect to Git**
3. Select **GitHub** and authorize Cloudflare
4. Select your `portfolio` repository
5. Configure build settings:
   - **Framework preset:** None
   - **Build command:** `npm ci && npm run build:css`
   - **Build output directory:** `/` or `public` (see note below)
   - **Node.js version:** 24 (or any LTS >= 20)
6. Click **Save and Deploy**

## Step 4: Add Environment Variables (Optional)

In Cloudflare Pages dashboard → **Settings** → **Environment variables**:

| Variable | Value | Environment |
|----------|-------|-------------|
| `FORMSPREE_FORM_ID` | `your_formspree_id` (replace with real ID) | Production |
| `WHATSAPP_NUMBER` | `201006125478` | Production |
| `CONTACT_EMAIL` | `contact@mahmoud-rabeh.com` | Production |
| `SITE_URL` | `https://mahmoud-rabeh.com` | Production |

> **Note:** These are for future use when you move form IDs to JavaScript variables.

## Step 5: Validate Preview

1. After deployment, Cloudflare provides a preview URL (`*.pages.dev`)
2. Open the preview URL
3. Test:
   - [ ] Page loads without errors
   - [ ] Arabic content displays correctly (RTL)
   - [ ] English toggle works
   - [ ] Navigation links work
   - [ ] Contact form submits
   - [ ] WhatsApp link opens
   - [ ] Calendly link opens
   - [ ] Mobile layout works (resize browser)
   - [ ] Console shows no errors

## Step 6: Publish to Production

1. In Cloudflare Pages → your project → **Deployments**
2. Find the preview deployment
3. Click **...** → **Promote to production**
4. Or push a new commit to `main` to trigger production deploy

## Step 7: Connect Custom Domain

1. In Cloudflare Pages → **Custom domains**
2. Click **Set up a custom domain**
3. Enter: `mahmoud-rabeh.com`
4. If domain is on Cloudflare DNS: it auto-verifies
5. If domain is elsewhere:
   - Add CNAME record: `@` → `your-project.pages.dev`
   - Wait for DNS propagation (up to 24 hours)
6. SSL/TLS is automatic

## Step 8: Enable Cloudflare Security

In your Cloudflare dashboard for the domain:

1. **SSL/TLS** → Overview → set to **Full (Strict)**
2. **SSL/TLS** → Edge Certificates → enable **Always Use HTTPS**
3. **SSL/TLS** → Edge Certificates → enable **HSTS** (max-age: 31536000)
4. **Security** → **WAF** → enable managed rules
5. **Security** → **Bots** → enable Bot Fight Mode
6. **Speed** → **Optimize** → enable minification (HTML, CSS, JS)

---

## Rollback Instructions

### Via Cloudflare Dashboard

1. Go to **Workers & Pages** → your project → **Deployments**
2. Find the last working deployment
3. Click **...** → **Promote to production**

### Via Git

```bash
# Revert the last commit
git revert HEAD
git push origin main
# This triggers a new production deployment
```

### Via Wrangler CLI (optional)

```bash
npx wrangler pages deployment list --project-name=your-project
npx wrangler pages deployment rollback --project-name=your-project <DEPLOYMENT_ID>
```

---

## File Structure for Production

```
/
├── portfolio.html          (main page — configure as entry point)
├── 404.html                (custom error page)
├── css/style.css           (built Tailwind CSS — generated, don't edit)
├── css/input.css           (Tailwind source styles)
├── js/app.js               (application logic, externalized for CSP)
├── _headers                (Cloudflare Pages headers)
├── _routes.json            (Cloudflare Pages routing)
├── robots.txt              (search engine directives)
├── sitemap.xml             (SEO sitemap)
├── favicon.svg             (site icon)
├── jpg.png                 (background image)
├── tailwind.config.js      (Tailwind theme/config)
├── package.json            (build tooling)
└── SECURITY.md             (security documentation)
```

> **Important:** Cloudflare Pages serves `index.html` by default. Since your file is `portfolio.html`, you should either:
> - Rename it to `index.html`, OR
> - In Cloudflare Pages settings, set the entry point to `portfolio.html`

### Rebuilding Styles

After changing classes in `portfolio.html`, `404.html`, or `js/app.js`, rebuild CSS:

```bash
npm install
npm run build:css
```

Commit `css/style.css` so production always has the latest compiled styles.
