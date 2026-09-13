# How to Test Responsive (Mobile/Tablet) — طريقة اختبار الأبعاد

> Short guide — tested & saved 2026-09-13 (user confirmed "ظبطت").

## Fastest: Chrome DevTools (no phone needed)

1. Open the page file in Chrome.
2. Press **F12** → DevTools opens.
3. Press **Ctrl + Shift + M** → Device Toolbar appears.
4. Pick a device preset or type custom pixels:
   - **iPhone 14 Pro** → `390 × 844` (mobile)
   - **iPad Mini** → `768 × 1024` (tablet)
5. Check (RTL Arabic first, then switch language):
   - Left social icons (WhatsApp/Telegram/LinkedIn) — visible & tappable
   - "تغيير اللغة / Change Language" button — visible & tap works
   - Cards & sections — text not cut off, no horizontal scroll
   - Images scale, header sticks to top
   - No overlapping elements

## Firefox alternative
- **F12** → Responsive Design Mode icon (top bar) → same checks.

## On a real phone
- Send the HTML file to yourself (WhatsApp/Telegram) and open it, or
- Serve locally (Apache/Nginx) and open `http://<LAN-IP>/portfolio/portfolio.html` on the phone.

## Device presets that matter most (2026 common)
- iPhone 14/15/16 Pro: 390×844
- Pixel 7/8: 412×915
- iPad Mini: 768×1024
- iPad Pro 11": 834×1194