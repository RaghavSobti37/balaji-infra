---
name: Institutional Excellence
colors:
  surface: '#fbf8fc'
  surface-dim: '#dbd9dd'
  surface-bright: '#fbf8fc'
  surface-container-lowest: '#ffffff'
  surface-container-low: '#f5f3f7'
  surface-container: '#efedf1'
  surface-container-high: '#e9e7eb'
  surface-container-highest: '#e4e2e5'
  on-surface: '#1b1b1e'
  on-surface-variant: '#44464e'
  inverse-surface: '#303033'
  inverse-on-surface: '#f2f0f4'
  outline: '#75777f'
  outline-variant: '#c5c6cf'
  surface-tint: '#4c5e86'
  primary: '#00081e'
  on-primary: '#ffffff'
  primary-container: '#0a1f44'
  on-primary-container: '#7687b2'
  inverse-primary: '#b4c6f4'
  secondary: '#545f72'
  on-secondary: '#ffffff'
  secondary-container: '#d5e0f7'
  on-secondary-container: '#586377'
  tertiary: '#150500'
  on-tertiary: '#ffffff'
  tertiary-container: '#391700'
  on-tertiary-container: '#b37c59'
  error: '#ba1a1a'
  on-error: '#ffffff'
  error-container: '#ffdad6'
  on-error-container: '#93000a'
  primary-fixed: '#d9e2ff'
  primary-fixed-dim: '#b4c6f4'
  on-primary-fixed: '#041a3f'
  on-primary-fixed-variant: '#34466d'
  secondary-fixed: '#d8e3fa'
  secondary-fixed-dim: '#bcc7dd'
  on-secondary-fixed: '#111c2c'
  on-secondary-fixed-variant: '#3c475a'
  tertiary-fixed: '#ffdbc7'
  tertiary-fixed-dim: '#f8b992'
  on-tertiary-fixed: '#311300'
  on-tertiary-fixed-variant: '#673c1e'
  background: '#fbf8fc'
  on-background: '#1b1b1e'
  surface-variant: '#e4e2e5'
typography:
  display-lg:
    fontFamily: Montserrat
    fontSize: 64px
    fontWeight: '700'
    lineHeight: '1.1'
    letterSpacing: -0.02em
  headline-lg:
    fontFamily: Montserrat
    fontSize: 40px
    fontWeight: '700'
    lineHeight: '1.2'
    letterSpacing: -0.01em
  headline-lg-mobile:
    fontFamily: Montserrat
    fontSize: 32px
    fontWeight: '700'
    lineHeight: '1.2'
  headline-md:
    fontFamily: Montserrat
    fontSize: 24px
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
    lineHeight: '1.5'
  label-md:
    fontFamily: Inter
    fontSize: 14px
    fontWeight: '600'
    lineHeight: '1.2'
    letterSpacing: 0.05em
rounded:
  sm: 0.125rem
  DEFAULT: 0.25rem
  md: 0.375rem
  lg: 0.5rem
  xl: 0.75rem
  full: 9999px
spacing:
  unit: 8px
  container-max-width: 1280px
  gutter: 24px
  margin-desktop: 64px
  margin-mobile: 20px
---

## Brand & Style

The design system is engineered to project a persona of unwavering reliability, scale, and technical precision. It targets international government bodies and ministries, necessitating a visual language that communicates "large-scale infrastructure" and "national capability."

The style is **Corporate / Modern** with a lean toward **Minimalism**. It emphasizes structural integrity through a disciplined grid, heavy whitespace to denote premium positioning, and high-contrast typography. The emotional response should be one of security, competence, and institutional gravity. Visual flourishes are replaced by geometric rigor and a "built to last" aesthetic, mirroring the physical civil engineering projects the firm delivers.

## Colors

The palette is anchored in a deep Navy Blue, symbolizing authority and depth. Steel Grey provides a utilitarian balance, representing the industrial nature of infrastructure. Warm Amber is used strictly for high-value calls to action or critical highlights, ensuring it does not dilute the serious tone of the interface.

- **Primary (#0A1F44):** Used for headers, primary buttons, and structural grounding.
- **Secondary (#4A5568):** Used for body text, iconography, and secondary UI elements.
- **Accent (#D69E2E):** Used sparingly for highlighting key metrics or active states.
- **Neutral/Background (#F7FAFC):** An off-white base that provides a modern, clean canvas, reducing eye strain while maintaining a high-contrast environment for readability.

## Typography

This design system employs a dual-font strategy to balance impact with legibility. **Montserrat** is used for headlines to provide a bold, geometric, and authoritative presence reminiscent of architectural blueprints and corporate steel. **Inter** is utilized for all functional text and body copy, ensuring maximum clarity in data-dense reports and technical proposals.

All labels and small metadata should use uppercase with slight tracking (letter spacing) to enhance the institutional feel. Large display headers should maintain tight tracking to feel cohesive and "solid" like a concrete structure.

## Layout & Spacing

The layout philosophy follows a **Fixed Grid** model for desktop to maintain a sense of controlled, curated information delivery. A 12-column system is used with wide gutters to ensure the interface never feels "cramped" or "cluttered."

- **Desktop:** 12-column grid, 1280px max width, 64px outer margins.
- **Tablet:** 8-column grid, 32px outer margins.
- **Mobile:** 4-column grid, 20px outer margins, fluid width.

Spacing follows an 8px linear scale. Alignment is strictly left-heavy for text to reinforce a systematic, logical flow of information. Large sections of content should be separated by significant vertical padding (80px - 120px) to allow the "large conglomerate" energy to breathe.

## Elevation & Depth

This design system rejects excessive shadows in favor of **Tonal Layers** and **Low-contrast outlines**. Depth is communicated through subtle shifts in background color (e.g., using a slightly darker grey to define a container) rather than floating elements.

- **Planes:** All cards and containers sit flush on the background or are slightly recessed.
- **Borders:** Use 1px solid borders in a lightened Steel Grey (#E2E8F0) to define sections.
- **Interactive States:** Instead of a shadow, an active button or card may receive a subtle 2px solid border in the Accent color or a slight shift in background saturation. 
- **Shadows:** If used for high-level modals, they must be "Ambient Shadows"—extremely diffused, 10% opacity, with no vertical offset to feel grounded.

## Shapes

The shape language is primarily **Soft (0.25rem)** to maintain a professional and "hard" aesthetic suitable for an engineering firm. While sharp corners (0px) can feel overly aggressive, a 4px radius provides just enough refinement to feel modern without losing the "industrial" edge. 

- **Primary Buttons:** 4px radius.
- **Cards/Containers:** 4px or 8px (rounded-lg) for larger layout sections.
- **Inputs:** 4px radius.
- **Icons:** Use square or strictly geometric icons with minimal line weights (1.5px or 2px).

## Components

### Buttons
- **Primary:** Solid Deep Navy Blue with White text. Bold weight, uppercase.
- **Secondary:** Transparent with a 2px Deep Navy Blue border.
- **Action:** Solid Warm Amber for critical calls to action (e.g., "Request Tender").

### Input Fields
- Structured with a 1px Steel Grey border. 
- Focus state: 2px Deep Navy Blue border. No glow effects.
- Labels: Always positioned above the field, using the `label-md` style.

### Cards
- No shadows. Use a 1px border.
- Header sections within cards should have a subtle background tint of Off-white (#F7FAFC) to separate from the body.

### Lists & Data Tables
- Vital for an infrastructure firm. Use horizontal rules only (no vertical lines) to create a clean, architectural feel. 
- Headers must be in `label-md` uppercase style for a "tabular data" look.

### Navigation
- A top-mounted, persistent bar with a high-contrast Primary background or a clean White background with Primary text. 
- Links should use `label-md` and have a bold underline on hover/active states.