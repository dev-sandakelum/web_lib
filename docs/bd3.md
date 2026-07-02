# BD3 — Birthday Post Studio · Redesign Plan

---

## Color Palettes

### Light Palette (use as fg/accent in dark mode)
| Swatch | Hex |
|--------|-----|
| Primary | `#6367FF` |
| Secondary | `#8494FF` |
| Soft | `#C9BEFF` |
| Pastel | `#FFDBFD` |

### Dark Palette (use as bg/surface in dark mode, fg/accent in light mode)
| Swatch | Hex |
|--------|-----|
| Deepest | `#0A2647` |
| Deep | `#144272` |
| Mid | `#205295` |
| Bright | `#2C74B3` |

### Opposite-theme rule
- **Dark mode** → dark palette for backgrounds/surfaces, light palette for accents/text
- **Light mode** → near-white backgrounds (`#F0F4FF`), dark palette for text/accents

---

## Current File Structure

```
components/bd3/
  theme.ts              ✅ already created — centralized color tokens
  types.ts              ✅ keep as-is
  templates.ts          ✅ keep as-is
  styles/
    base.css            ✅ already created (root vars)
  generator.tsx         🔄 RECREATE as generator.new.tsx → delete old
  startup-popup.tsx     🔄 RECREATE as startup-popup.new.tsx → delete old
  loading-overlay.tsx   🔄 RECREATE as loading-overlay.new.tsx → delete old
  crop-modal.tsx        🔄 RECREATE as crop-modal.new.tsx → delete old
  post-template.tsx     ✅ keep as-is (renders the 1080×1350 image, not UI)
```

---

## Execution Strategy

> **Rule: never edit existing files. Create `.new.tsx`, verify, then delete the old one and rename.**

### Step 1 — `theme.ts` ✅ Done
Centralized token file. Already in place. All new components import from here.

### Step 2 — `generator.new.tsx`
Biggest file. Full rewrite with new design system.  
All logic/state/handlers stay 100% identical. Only styles change.

**New design decisions:**
- Replace giant `<style>` block with CSS custom properties on `.bd3-root` driven by the `theme.ts` tokens, injected once via a theme-aware `<style>` tag at the top of the component
- Dark mode default, light mode via `.light` class on `.bd3-root`
- Navbar: `#0A2647` bg with `rgba(99,103,255,0.12)` border, `#6367FF` accent download button
- Editor panel: `#0D2E55` background, `16px` padding, `20px` gap between section cards
- Section cards: `#112F56` background, `1px solid rgba(32,82,149,0.55)` border, `16px` radius, `box-shadow: 0 2px 12px rgba(0,0,0,0.25)`
- Inputs/textareas: `rgba(20,66,114,0.5)` bg, `rgba(32,82,149,0.6)` border, `#6367FF` focus ring
- Primary CTA: solid `#6367FF`, `box-shadow: 0 4px 14px rgba(99,103,255,0.4)`, `translateY(-1px)` hover
- Ghost buttons: `rgba(32,82,149,0.3)` border, transparent bg
- Preview pane: `#071d38` bg with dot-grid pattern
- Mobile: tab switcher in navbar, fixed bottom download button on preview tab

### Step 3 — `loading-overlay.new.tsx`
- Backdrop: `rgba(7,29,56,0.9)` with blur
- Card: `#112F56` bg, `#6367FF`-tinted border
- Spinner arcs: `#6367FF` + `#8494FF`
- All animations keep same timing

### Step 4 — `crop-modal.new.tsx`
- Modal card: `#0D2E55` bg
- Canvas dark area: `#071d38`
- Ring border: `#6367FF` → `#8494FF` gradient
- Slider thumb: `#6367FF`
- Apply button: solid `#6367FF`

### Step 5 — `startup-popup.new.tsx`
- Popup bg: `#0D2E55`
- Header border: `rgba(32,82,149,0.4)`
- Category icons + check marks: `#8494FF` / `#6367FF`
- "Got it" button: `#6367FF` solid
- Checkbox active: `#6367FF`

---

## Design Principles Applied

### 1. Color separation rule
Every surface is one step deeper than its parent:
```
Page bg      #0A2647
Editor panel #0D2E55  (+1 level)
Section card #112F56  (+2 levels)
Input bg     rgba(20,66,114,0.5)  (+3 levels, semi-transparent)
```

### 2. Typography
- Font: `Inter` (already used, keep)
- Labels: `11px / 600 / 0.04em ls` — muted (`rgba(196,218,255,0.5)`)
- Body inputs: `13.5px / 400` — bright (`#E8F0FE`)
- Section headers: `10.5px / 700 / 0.09em ls UPPERCASE` — muted
- Nav title: `15px / 700` — bright
- Hint/meta: `10px / 400` — dim (`rgba(196,218,255,0.35)`)

### 3. Spacing rhythm
- Editor inner padding: `20px 16px 28px`
- Gap between section cards: `14px`
- Section header padding: `12px 16px`
- Section body padding: `14px 16px 18px`
- Input padding: `10px 13px`

### 4. Shadows
- Section card: `0 2px 12px rgba(0,0,0,0.25)`
- Primary button: `0 4px 14px rgba(99,103,255,0.35)`
- Modal: `0 24px 60px rgba(0,0,0,0.6)`
- Preview card: `0 32px 80px rgba(0,0,0,0.7)`

### 5. Transitions
- All interactive: `0.2s ease` (inputs, buttons, cards)
- Button hover lift: `translateY(-1px)` + shadow boost
- Theme toggle: keeps existing `rotate(12deg)` on hover

### 6. Accent usage
- `#6367FF` — primary CTA, focus rings, selected state, active tabs
- `#8494FF` — section icons, secondary accents, spinner secondary arc
- `#C9BEFF` — badge text, subtle highlights
- `#FFDBFD` — reserved for pastel decorative use (photo card success state)

### 7. Light mode
- Page bg: `#F0F4FF`
- Editor panel: `#FFFFFF`
- Cards: `#FAFCFF` with `rgba(99,103,255,0.12)` border
- Text: `#0A2647` (dark palette deepest)
- Accents: same `#6367FF` (works on both modes)

---

## What Does NOT Change
- All React state, hooks, handlers — zero logic changes
- `post-template.tsx` — the 1080×1350 output image renderer
- `templates.ts` — template definitions
- `types.ts` — TypeScript interfaces
- `app/api/bd3/msg/route.ts` — API route
- `app/apps/bd3/page.tsx` — page wrapper

---

## Status

| File | Status |
|------|--------|
| `theme.ts` | ✅ Done |
| `styles/base.css` | ✅ Done |
| `generator.tsx` | ⏳ Pending |
| `loading-overlay.tsx` | ⏳ Pending |
| `crop-modal.tsx` | ⏳ Pending |
| `startup-popup.tsx` | ⏳ Pending |
