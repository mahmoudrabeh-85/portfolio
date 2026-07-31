---
name: Electric Noir
colors:
  surface: '#051424'
  surface-dim: '#051424'
  surface-bright: '#2c3a4c'
  surface-container-lowest: '#010f1f'
  surface-container-low: '#0d1c2d'
  surface-container: '#122131'
  surface-container-high: '#1c2b3c'
  surface-container-highest: '#273647'
  on-surface: '#d4e4fa'
  on-surface-variant: '#cfc2d6'
  inverse-surface: '#d4e4fa'
  inverse-on-surface: '#233143'
  outline: '#988d9f'
  outline-variant: '#4d4354'
  surface-tint: '#ddb7ff'
  primary: '#ddb7ff'
  on-primary: '#490080'
  primary-container: '#b76dff'
  on-primary-container: '#400071'
  inverse-primary: '#842bd2'
  secondary: '#4cd7f6'
  on-secondary: '#003640'
  secondary-container: '#03b5d3'
  on-secondary-container: '#00424e'
  tertiary: '#c8c6c8'
  on-tertiary: '#303032'
  tertiary-container: '#929093'
  on-tertiary-container: '#2a292c'
  error: '#ffb4ab'
  on-error: '#690005'
  error-container: '#93000a'
  on-error-container: '#ffdad6'
  primary-fixed: '#f0dbff'
  primary-fixed-dim: '#ddb7ff'
  on-primary-fixed: '#2c0051'
  on-primary-fixed-variant: '#6900b3'
  secondary-fixed: '#acedff'
  secondary-fixed-dim: '#4cd7f6'
  on-secondary-fixed: '#001f26'
  on-secondary-fixed-variant: '#004e5c'
  tertiary-fixed: '#e5e1e4'
  tertiary-fixed-dim: '#c8c6c8'
  on-tertiary-fixed: '#1b1b1d'
  on-tertiary-fixed-variant: '#474649'
  background: '#051424'
  on-background: '#d4e4fa'
  surface-variant: '#273647'
typography:
  display:
    fontFamily: Montserrat
    fontSize: 80px
    fontWeight: '900'
    lineHeight: '1.1'
    letterSpacing: -0.04em
  headline-lg:
    fontFamily: Montserrat
    fontSize: 48px
    fontWeight: '700'
    lineHeight: '1.2'
    letterSpacing: -0.02em
  headline-lg-mobile:
    fontFamily: Montserrat
    fontSize: 32px
    fontWeight: '700'
    lineHeight: '1.2'
  headline-md:
    fontFamily: Montserrat
    fontSize: 32px
    fontWeight: '600'
    lineHeight: '1.3'
  body-lg:
    fontFamily: Inter
    fontSize: 18px
    fontWeight: '400'
    lineHeight: '1.6'
  body-md:
    fontFamily: Inter
    fontSize: 16px
    fontWeight: '400'
    lineHeight: '1.6'
  label-caps:
    fontFamily: JetBrains Mono
    fontSize: 12px
    fontWeight: '500'
    lineHeight: '1.0'
    letterSpacing: 0.1em
rounded:
  sm: 0.25rem
  DEFAULT: 0.5rem
  md: 0.75rem
  lg: 1rem
  xl: 1.5rem
  full: 9999px
spacing:
  container-max: 1440px
  gutter: 24px
  margin-mobile: 20px
  margin-desktop: 64px
  stack-sm: 8px
  stack-md: 24px
  stack-lg: 48px
  stack-xl: 80px
---

## Brand & Style
This design system is engineered for high-impact creative portfolios, blending a sophisticated dark-mode foundation with high-energy digital accents. The brand personality is "Techno-Elegant"—it bridges the gap between professional execution and experimental creativity. 

The aesthetic leans heavily into **Glassmorphism** and **High-Contrast Bold** styles. It utilizes deep layering, background blurs, and luminous glows to create a sense of infinite digital depth. The UI should feel like a premium heads-up display (HUD) overlaid on high-fidelity visual content. Motion is a first-class citizen; transitions should be fluid, utilizing cubic-bezier curves to mimic physical inertia.

## Colors
The palette is rooted in a "Deep Charcoal" (`#121214`) base to ensure perfect black levels on OLED displays and maximum contrast for media. 

- **Primary (Electric Purple):** Used for primary actions, active states, and focal points.
- **Secondary (Cyan):** Used for interactive highlights, data visualization, and supporting accents.
- **Surface:** Uses semi-transparent variations of Slate and Charcoal to facilitate glassmorphism.
- **Glows:** Primary and secondary colors should be used with 20-30% opacity for soft ambient shadows and "aurora" background effects.

## Typography
The typography strategy contrasts the geometric weight of **Montserrat** with the functional clarity of **Inter**. 

- **Headlines:** Use Montserrat with tight tracking. The "Display" style is reserved for hero sections and should often use a gradient text fill (Purple to Cyan).
- **Body:** Inter provides a neutral, highly readable counterpoint to the aggressive headings.
- **Labels:** JetBrains Mono (Monospaced) is introduced for technical details, metadata, and tags to reinforce the "modern/tech" aesthetic.

## Layout & Spacing
The design system employs a **Fluid Grid** with generous outer margins to let the content breathe against full-screen background imagery.

- **Desktop:** 12-column grid with a 1440px max-width. Content should be centered with wide "safe zones" on the flanks.
- **Mobile:** 4-column grid with 20px margins.
- **Spacing Logic:** Use a strictly linear 8px scale. Vertical "Stack" spacing should be aggressive (80px+) between major sections to emphasize the portfolio's editorial feel.
- **Glass Padding:** Elements using background blurs should maintain a minimum internal padding of 24px to ensure the "glass" edges are distinct.

## Elevation & Depth
Depth is created through **Glassmorphism** and **Ambient Glows** rather than traditional grey shadows.

- **Level 1 (Base):** Full-screen image or Deep Charcoal background.
- **Level 2 (Panels):** Background blur (20px-40px) with a 10% white tint and a 1px "inner glow" border (white at 15% opacity).
- **Level 3 (Interactive):** Elements that are hovered or active gain an external glow using the Primary color (`box-shadow: 0 0 30px rgba(168, 85, 247, 0.4)`).
- **Transitions:** All elevation changes must be animated over 300ms using `cubic-bezier(0.4, 0, 0.2, 1)`.

## Shapes
The shape language is "Rounded" to soften the high-contrast technical aesthetic. 

- **Standard Elements:** 0.5rem (8px) corner radius.
- **Cards/Modals:** 1.5rem (24px) corner radius to create a containerized, "floating" feel.
- **Interactive Triggers:** Pill-shapes are used for tags and small buttons to distinguish them from structural containers.

## Components
- **Buttons:** Primary buttons use a solid Electric Purple to Cyan linear gradient. Secondary buttons use the "Glass" style with a Cyan 1px border.
- **Cards:** Project cards feature a large image background with a glassmorphic footer overlay containing the title and "Label-caps" tags.
- **Inputs:** Ultra-minimal. Only a bottom border (1px Slate) that transforms into a full-width Cyan glow on focus.
- **Chips/Tags:** Monospaced text inside a semi-transparent Slate pill with no border.
- **Navigation:** A floating glassmorphic dock at the bottom of the screen or a fixed-top blur bar.
- **Cursors:** Implement a custom "magnetic" circular cursor that reacts to interactive elements by expanding and changing to a blend-mode (like 'difference').