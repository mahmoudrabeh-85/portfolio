# PROGRESS

## Session 2026-09-10 (Versioning system — DONE)
- ✅ Created versions system: `versions/v1-2026-09-08/` (current design, full copy HTML+CSS+JS+assets) + `versions/v2-2026-09-10/` (new Google Stitch design, self-contained).
- ✅ Created VERSIONS.md — version registry with dates + 3 switching methods (manual copy, local preview, temp subpath deploy).
- ✅ v2 verified: 14 sections preserved, 208 data-en/data-ar pairs, langToggle present, balanced tags, self-contained JS (bilingual + FAQ + QR modal), Tailwind via CDN.
- ✅ v2 uses Obsidian dark + Gold premium theme, fonts Sora/Inter/Tajawal (better Arabic), QR modal instead of project modal.
- ✅ Stitch prompt saved at stitch_modern_animated_portfolio_redesign/STITCH-PROMPT.md.

## Session 2026-09-08 (Media buying learning — DONE)
- ✅ Created docs/marketing/PLAN-90DAYS.md (90-day marketing plan, Egypt + Gulf + USA).
- ✅ Created docs/marketing/MEDIA-BUYER-ROADMAP.md (5-phase learning roadmap).
- ✅ Created docs/marketing/Media-Buyer-Reference.docx — Word reference doc (49 paragraphs, 9 tables) that gets updated continuously; user says "حدّث المرجع" to update.
- ✅ User choosing strategy: learn media buying for self first → then sell as service. Budget: start small (100-150 EGP/day), scale 30-40% based on results.
- ✅ Mentoring Mode verified active (PROTOCOL.md Level 5 + build agent prompt + LEARNING.md auto-explain rule).

## Session 2026-09-08 (Web changes — DONE, committed & pushed to GitHub)
- ✅ Removed Knowledge Center section (all "Coming Soon") + all nav/footer/menu links to it.
- ✅ Moved social bar icons to left side (fixed left:14px instead of inset-inline-start).
- ✅ Unified language toggle: single button, text matches current language ("Change Language" / "تغيير اللغة"), removed langToggleMobile.
- ✅ Portfolio size reduced: 95KB → ~74KB, 15 sections → 14.
- ✅ Responsive CSS for whole page: hero text, grids, fonts, padding, cards, social bar, QR badge (tablet ≤768px / mobile ≤480px).
- ✅ Rebuilt css/style.css + committed + pushed to https://github.com/mahmoudrabeh-85/portfolio (commit 3f87440).

## Session 2026-09-08 (Marketing — DISCUSSED, not yet started)
- Decisions taken (awaiting execution tomorrow):
  - Targets: Egypt + Gulf + USA.
  - Channels: LinkedIn (all) + Facebook/TikTok/YouTube/Instagram/WhatsApp (Egypt) + Upwork (USA).
  - Affiliate marketing: wants all tracks (specialty + general products + mix).
  - LinkedIn URL: https://www.linkedin.com/in/mahmoud-rabeh-7102071a3
  - REAL number to use: monthly sales > 20M EGP (trading/distribution model).
  - Numbers NOT confirmed ($50M+, 500+ suppliers) → do NOT use.
  - Services prices: NOT shown in site/marketing — "negotiable, decided after discovery call".

## Session 2026-09-07 (Global setup — DONE)
- Added all 19 free OpenRouter models + openai/gpt-oss-120b/20b to global opencode.jsonc.
- Added session handover instructions + auto-create missing files to build agent prompt.
- Created PROGRESS.md, NEXT_STEPS.md, DECISIONS.md in D:\ai\portfolio.
- Created PROTOCOL.md + global LEARNING.md (cumulative memory).