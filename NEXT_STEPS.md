# NEXT STEPS

## Pending decisions from today (2026-09-13)
- ⬜ **Hardware decision**: user asked which dependable local coding model + required specs. Answer delivered (Qwen3-Coder-30B-A3B @ 24GB VRAM — used RTX 3090 best value ~16-20k EGP, total ~32-42k; or economic 16GB path = Qwen3-Coder-14B w/ RTX 4060 Ti ~24-28k). **Awaiting user's choice** between the two levels (or final build parts list).
- ⬜ **openrouter stays enabled** in opencode.jsonc (`disabled_providers` excludes it — its `:free` models work without key). When user adds keys for other providers, remove that provider from `disabled_providers` (comment in file explains).
- ✅ small_model switched to `opencode/mimo-v2.5-free` (user approved; old `opencodefree/deepseek-v4-flash-free` was 429 rate-limited).
- ✅ **v3 activated as active version** + responsive fixed + user-approved ("ممتاز ظبطت"). Test method saved in docs/RESPONSIVE-TESTING.md.
- ⬜ **Deploy**: user "go" → security scan (rule 13) → push → test live on Vercel/Cloudflare (#8 form test).

## Tomorrow (2026-09-14) — Resume Here ⭐
- الجلسة انتهت 2026-09-13 بموافقة المستخدم ("نكمل غدا"). نقطة البداية غداً:
- ⬜ Test end-to-end from phone: /projects → /models → `/task portfolio اعرض هيكل المشروع` → notification
- ⬜ USER: add API keys to supervisor/.env (OPENROUTER/OPENAI/ANTHROPIC) — optional, mimo works without them
- ⬜ Test voice task from phone

## Today — Supervisor Bot (built, needs user actions)
- ✅ Supervisor bot built + running (D:\ai\supervisor\, PID 16696 → current PID 26468)
- ✅ /task with model: selection + voice tasks + notifications
- ✅ Chat with @mahmoudoc26_bot established (user pressed START, MSG_ID=9 delivered)
- ⬜ USER: add API keys to supervisor/.env (OPENROUTER/OPENAI/ANTHROPIC) — cloud models only; local models confirmed NOT viable for opencode
- ⬜ Test end-to-end: /projects → /models → /task portfolio اعرض هيكل المشروع → notification
- ⬜ Test voice task from phone
- ⬜ Long-term: both bots as Windows services (auto-start on boot)

## Today — Versioning System (awaiting decision)
- ✅ v1 archived (current design) — versions/v1-2026-09-08/
- ✅ v2 added (Google Stitch design) — versions/v2-2026-09-10/
- ✅ v3 added (Stitch + local images + Telegram bot) — versions/v3-2026-09-10/
- ✅ VERSIONS.md registry created with switching methods
- ✅ Telegram bot: @mahmoudagent26_bot (chat_id: 184519943)
- ✅ API endpoint: api/telegram.js (Vercel Serverless Function)
- ⬜ Review v3 locally (open versions/v3-2026-09-10/portfolio.html in browser)
- ⬜ DECISION: make v3 the active version? (if yes: copy its files to root + push)
- ⬜ If v3 goes live: test form submission end-to-end on Vercel
- ⬜ Rename bot via BotFather: /setname → "Rabeh Consultant Bot"

## Today — Media Buyer Learning (in progress)
- ✅ 90-day marketing plan (PLAN-90DAYS.md) — DONE
- ✅ Media buyer roadmap (MEDIA-BUYER-ROADMAP.md) — DONE
- ✅ Word reference doc (Media-Buyer-Reference.docx) — DONE, updates on "حدّث المرجع"
- ⬜ Practice: install Meta Business account + Pixel (step 1 of floor 3)
- ⬜ First real campaign with 100-150 EGP/day (after Pixel setup)

## Tomorrow — Marketing Package (awaiting approval to start)
1. Build 90-day marketing plan (Egypt + Gulf + USA, per-platform strategy).
2. Write LinkedIn posts (Arabic + English, ~10 posts) — configure profile first.
3. Write Facebook/Instagram/TikTok/YouTube content (Egypt).
4. Build affiliate roadmap (specialty + general products + mix, Egyptian networks: Noon/Jumia/Amazon).
5. SEO audit of portfolio.html: meta tags, JSON-LD (Person + Service), keywords, sitemap, robots.
6. Setup checklist file for accounts (LinkedIn, FB page, TikTok, YouTube, Instagram, WhatsApp Business, Upwork).

## Web (optional polish later)
- Test live deployment on Cloudflare Pages + Vercel after language-toggle changes.
- Verify language toggle works on mobile (single button visible).

## Completed This Session (2026-09-08)
- ✅ Created PLAN-90DAYS.md (90-day marketing plan)
- ✅ Created MEDIA-BUYER-ROADMAP.md (5-phase learning roadmap)
- ✅ Created Media-Buyer-Reference.docx (Word reference, updates on request)
- ✅ Removed Knowledge Center section (all "Coming Soon" items)
- ✅ Moved social bar icons to left side (left:14px fixed)
- ✅ Unified language toggle: single button "Change Language" / "تغيير اللغة" in nav
- ✅ Portfolio size reduced: 95KB → ~74KB, 15 sections → 14
- ✅ Removed pricing from services (negotiable only)
- ✅ Started marketing plan discussion (Egypt + Gulf + USA, LinkedIn-first, affiliate learning)

## Session 2026-09-07 (completed)