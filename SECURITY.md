# Security Policy

## Overview

This portfolio website is a static HTML/CSS/JS site deployed on Cloudflare Pages. Security is enforced through HTTP headers, strict repository access, and careful dependency management.

## Reporting a Vulnerability

If you discover a security vulnerability, please report it responsibly:

- **Email:** contact@mahmoud-rabeh.com
- **Subject:** [SECURITY] Brief description
- **Do NOT** open a public GitHub issue for security vulnerabilities.

## Security Measures

### HTTP Headers (Cloudflare Pages `_headers`)

| Header | Value | Purpose |
|--------|-------|---------|
| Content-Security-Policy | See `_headers` file | Restricts resource loading origins |
| Strict-Transport-Security | max-age=31536000; includeSubDomains; preload | Forces HTTPS |
| X-Content-Type-Options | nosniff | Prevents MIME type sniffing |
| Referrer-Policy | strict-origin-when-cross-origin | Limits referrer information |
| Permissions-Policy | camera=(), microphone=(), ... | Disables unused browser features |
| X-Frame-Options | DENY | Prevents clickjacking |
| Cross-Origin-Opener-Policy | same-origin | Isolates browsing context |

### Repository Security (GitHub)

Recommended settings (enable manually):

- [ ] Two-factor authentication (2FA) on all accounts
- [ ] Branch protection on `main`: require PR review before merge
- [ ] Dependabot security alerts enabled
- [ ] Secret scanning and push protection enabled
- [ ] Least-privilege access for collaborators

### Secrets Management

- **NEVER** commit `.env` files, API keys, or tokens to Git
- Use `.env.example` as a template for required variables
- Store production secrets in Cloudflare Pages dashboard only
- Rotate any exposed credentials immediately

### Third-Party Services

| Service | Purpose | Data Sent |
|---------|---------|-----------|
| Formspree | Contact form submissions | Name, email, message |
| Google Fonts | Typography | Browser request (standard) |
| Tailwind CSS CDN | Styling | Browser request (standard) |
| WhatsApp | Click-to-chat | Click redirect only |
| Calendly | Booking | Click redirect only |

### Form Security

- Contact form uses Formspree with CSRF protection
- Input validation (HTML5 required attributes + JavaScript)
- No server-side code (static site)
- **Recommendation:** Enable Cloudflare Turnstile for spam protection

## What This Site Does NOT Do

- No client-side data storage (localStorage, cookies for tracking)
- No analytics or tracking scripts
- No user authentication
- No payment processing
- No file uploads

## Compliance Notes

- Personal contact information (phone, email) is publicly displayed by design
- No PII is collected beyond the contact form (name, email, optional message)
- Formspree stores submissions; review their privacy policy
