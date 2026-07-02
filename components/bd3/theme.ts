/**
 * BD3 – Centralized Color Theme Configuration
 *
 * Light palette  : #6367FF · #8494FF · #C9BEFF · #FFDBFD
 * Dark  palette  : #0A2647 · #144272 · #205295 · #2C74B3
 *
 * Strategy: opposite themes for fg/bg separation.
 *   Dark mode  → dark-palette bg  + light-palette fg/accent
 *   Light mode → light bg (#F5F7FB) + dark-palette accent/text
 */

export const THEME = {
  dark: {
    // ─── Backgrounds ───
    bg:            "#0A2647",   // page background
    surface:       "#0D2E55",   // editor panel
    card:          "#112F56",   // section cards
    cardHover:     "#13366A",
    cardBorder:    "rgba(32,82,149,0.6)",
    cardBorderHover:"rgba(44,116,179,0.7)",

    // ─── Navbar / Action bar ───
    nav:           "rgba(10,38,71,0.96)",
    navBorder:     "rgba(32,82,149,0.5)",
    actionBar:     "rgba(10,38,71,0.95)",
    actionBarBorder:"rgba(32,82,149,0.45)",

    // ─── Surfaces (inputs, textareas, ai-box) ───
    inputBg:       "rgba(20,66,114,0.5)",
    inputBorder:   "rgba(32,82,149,0.6)",
    inputFocusBg:  "rgba(99,103,255,0.08)",
    inputFocusBorder:"rgba(99,103,255,0.7)",
    inputFocusShadow:"rgba(99,103,255,0.15)",

    // ─── Text ───
    textPrimary:   "#E8F0FE",
    textSecondary: "rgba(196,218,255,0.7)",
    textMuted:     "rgba(196,218,255,0.4)",
    textDisabled:  "rgba(196,218,255,0.22)",
    placeholder:   "rgba(196,218,255,0.22)",

    // ─── Accents (from light palette) ───
    accent:        "#6367FF",   // primary CTA
    accentHover:   "#5558E8",
    accentSoft:    "rgba(99,103,255,0.15)",
    accentBorder:  "rgba(99,103,255,0.5)",
    accentGlow:    "rgba(99,103,255,0.3)",

    accentAlt:     "#8494FF",   // secondary accent
    accentLight:   "#C9BEFF",   // highlight / badge
    accentPastel:  "#FFDBFD",   // delicate highlight

    // ─── Status ───
    success:       "#34d399",
    successBg:     "rgba(52,211,153,0.08)",
    successBorder: "rgba(52,211,153,0.3)",
    warning:       "#fbbf24",
    error:         "#f87171",

    // ─── Preview pane ───
    previewBg:     "#071d38",
    previewGrid:   "rgba(99,103,255,0.06)",
    previewGlow:   "rgba(99,103,255,0.08)",

    // ─── Scrollbar ───
    scrollThumb:   "rgba(99,103,255,0.35)",
    scrollThumbHover:"rgba(99,103,255,0.55)",

    // ─── Shadows ───
    shadow:        "0 4px 20px rgba(0,0,0,0.35)",
    shadowCard:    "0 2px 12px rgba(0,0,0,0.3)",
    shadowModal:   "0 24px 60px rgba(0,0,0,0.6)",
    shadowBtn:     "0 4px 14px rgba(99,103,255,0.35)",
    shadowBtnHover:"0 6px 22px rgba(99,103,255,0.5)",
  },

  light: {
    // ─── Backgrounds ───
    bg:            "#F0F4FF",   // light blue-tinted page bg
    surface:       "#FFFFFF",   // editor panel
    card:          "#FAFCFF",   // section cards
    cardHover:     "#F4F7FF",
    cardBorder:    "rgba(99,103,255,0.15)",
    cardBorderHover:"rgba(99,103,255,0.28)",

    // ─── Navbar / Action bar ───
    nav:           "rgba(255,255,255,0.96)",
    navBorder:     "rgba(99,103,255,0.15)",
    actionBar:     "rgba(240,244,255,0.97)",
    actionBarBorder:"rgba(99,103,255,0.12)",

    // ─── Surfaces ───
    inputBg:       "rgba(99,103,255,0.04)",
    inputBorder:   "rgba(99,103,255,0.2)",
    inputFocusBg:  "rgba(99,103,255,0.06)",
    inputFocusBorder:"rgba(99,103,255,0.55)",
    inputFocusShadow:"rgba(99,103,255,0.12)",

    // ─── Text (using dark palette for high contrast) ───
    textPrimary:   "#0A2647",
    textSecondary: "rgba(10,38,71,0.65)",
    textMuted:     "rgba(10,38,71,0.45)",
    textDisabled:  "rgba(10,38,71,0.28)",
    placeholder:   "rgba(10,38,71,0.28)",

    // ─── Accents (from light palette) ───
    accent:        "#6367FF",
    accentHover:   "#5558E8",
    accentSoft:    "rgba(99,103,255,0.1)",
    accentBorder:  "rgba(99,103,255,0.35)",
    accentGlow:    "rgba(99,103,255,0.2)",

    accentAlt:     "#8494FF",
    accentLight:   "#C9BEFF",
    accentPastel:  "#FFDBFD",

    // ─── Status ───
    success:       "#059669",
    successBg:     "rgba(5,150,105,0.08)",
    successBorder: "rgba(5,150,105,0.25)",
    warning:       "#d97706",
    error:         "#dc2626",

    // ─── Preview pane ───
    previewBg:     "#E8EEFF",
    previewGrid:   "rgba(99,103,255,0.07)",
    previewGlow:   "rgba(99,103,255,0.06)",

    // ─── Scrollbar ───
    scrollThumb:   "rgba(99,103,255,0.3)",
    scrollThumbHover:"rgba(99,103,255,0.5)",

    // ─── Shadows ───
    shadow:        "0 4px 20px rgba(99,103,255,0.1)",
    shadowCard:    "0 2px 12px rgba(99,103,255,0.08)",
    shadowModal:   "0 24px 60px rgba(10,38,71,0.2)",
    shadowBtn:     "0 4px 14px rgba(99,103,255,0.3)",
    shadowBtnHover:"0 6px 22px rgba(99,103,255,0.45)",
  },
} as const;

export type ThemeMode = "dark" | "light";
export type ThemeTokens = typeof THEME.dark;
