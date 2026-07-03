/**
 * BD3 — Birthday Post Studio changelog
 * Generated from git history.
 *
 * version:  semver string  (e.g. "1.0", "1.5", "2.3")
 * label:    optional short display name shown as a badge
 * major:    true  → shown in the startup "What's new" popup (latest only)
 *           false → only shown in the dev-info Changelog tab
 * date:     release / sprint date string
 * sections: grouped list of changes
 */

export interface ChangeSection {
  category: string;
  icon: string;
  items: string[];
}

export interface ChangelogEntry {
  version: string;
  label?: string;
  major: boolean;
  date: string;
  sections: ChangeSection[];
}

export const CHANGELOG: ChangelogEntry[] = [
  // ─── v1.0 ─────────────────────────────────────────────────────────
  {
    version: "1.0",
    label: "Initial Release",
    major: true,
    date: "2025-01",
    sections: [
      {
        category: "Core",
        icon: "🚀",
        items: [
          "Birthday post generator launched (component: BirthdayPostGenerator)",
          "Profile photo upload with crop modal",
          "Access key functionality and access-control on template",
          "Message generation via AI integration (first API route)",
          "HD 1080 × 1350 px PNG export",
          "Batch / Faculty / University footer text",
          "Initial placeholder text & input tweaks",
        ],
      },
    ],
  },

  // ─── v1.1 ─────────────────────────────────────────────────────────
  {
    version: "1.1",
    major: false,
    date: "2025-01",
    sections: [
      {
        category: "Fixes",
        icon: "🐛",
        items: [
          "Adjusted image crop modal input range minimum value",
          "Updated border styling in BirthdayPostGenerator",
          "Improved responsiveness and visual consistency in layout",
          "Added unique keys to message list items",
          "Adjusted image crop modal styling",
        ],
      },
    ],
  },

  // ─── v1.2 ─────────────────────────────────────────────────────────
  {
    version: "1.2",
    major: false,
    date: "2025-01",
    sections: [
      {
        category: "Routing & Structure",
        icon: "🔧",
        items: [
          "Refactored BirthdayPostGenerator and updated routing for post generation",
          "Removed copy image button from generator",
        ],
      },
    ],
  },

  // ─── v1.5 ─────────────────────────────────────────────────────────
  {
    version: "1.5",
    label: "AI Refresh",
    major: true,
    date: "2025-02",
    sections: [
      {
        category: "AI Message",
        icon: "🤖",
        items: [
          "Fixed bd3 msg API: correct model, SSE streaming, server-side char trimming, banned 'student union'",
          "Enforce 250–300 char range on AI refresh, fix bad model in callGroq",
          "Protected refresh from blanking message — uses callGroq same as bd2",
          "Fix stale msg: per-attempt variation tag, cache:no-store, cleared Next.js cache",
          "Fix repeated msg: random seed + variation token added to prompt",
          "Visual retry progress: spinner ring, progress bar, attempt counter",
          "Faster ticker on try counter display",
          "Increased MAX_ATTEMPTS to 20, synced to frontend as maxAttempts from server",
          "Dedicated Groq client using llama-3.3-70b-versatile",
        ],
      },
    ],
  },

  // ─── v2.0 ─────────────────────────────────────────────────────────
  {
    version: "2.0",
    label: "UI Redesign",
    major: true,
    date: "2025-03",
    sections: [
      {
        category: "Visual Overhaul",
        icon: "✨",
        items: [
          "Full UI redesign with new color system (#6367FF accent, deep blue palette)",
          "Split-pane editor + preview layout",
          "Section cards with per-tool accent colours",
          "Improved template grid with checkmark indicator",
          "Loading overlay, theme toggle, nav resolution badge, crop fixes",
          "Startup popup showing version changelog",
          "Font size slider in Person Details section",
          "Separator height bug fixed in post template",
        ],
      },
      {
        category: "Name Pill",
        icon: "🎨",
        items: [
          "Gold textured name pill with auto-width — fits any name",
          "Roboto Mono font for the name — bold monospace style",
          "Advanced settings popup for font size & padding",
          "Dark shadow wings on the name pill for depth",
          "New passkey system, improved prompts",
        ],
      },
      {
        category: "Creator Info",
        icon: "👤",
        items: [
          "Creator info popup on logo click",
          "Forces TS server cache refresh after component recreation",
        ],
      },
    ],
  },

  // ─── v2.1 ─────────────────────────────────────────────────────────
  {
    version: "2.1",
    major: false,
    date: "2025-04",
    sections: [
      {
        category: "Polish",
        icon: "🔧",
        items: [
          "Updated creator role display",
          "Enhanced startup popup with new features list and styling",
        ],
      },
    ],
  },

  // ─── v3.0 ─────────────────────────────────────────────────────────
  {
    version: "3.0",
    label: "Mobile-first",
    major: true,
    date: "2025-06",
    sections: [
      {
        category: "Mobile UX",
        icon: "📱",
        items: [
          "Canva-style mobile redesign: preview always visible, editing via toolbar",
          "Horizontal icon bar fixed below navbar (6 tools)",
          "Bottom-sheet panels — each tool opens its own focused sheet",
          "Template tab stays open until closed by X button",
          "Pinch-to-zoom & single-finger pan on preview canvas",
          "Reset zoom button appears when canvas is zoomed/panned",
          "Toolbar collapse/restore with chevron toggle",
          "Restore button shown in navbar when bar is hidden",
          "All sheets close on backdrop tap",
          "Mobile save button moved to left side",
        ],
      },
      {
        category: "Bottom Nav Bar",
        icon: "🧭",
        items: [
          "Fixed bottom nav bar: Save · Focus (reset zoom) · Theme toggle",
          "FloatingHomeButton hidden on /apps/bd3 route",
          "Mobile download FAB replaced by bottom nav",
        ],
      },
      {
        category: "Access & Security",
        icon: "🔒",
        items: [
          "Download locked without valid access key (both mobile and desktop)",
          "Access key entered via modal popup — removed from editor panel",
          "Lock → unlock spring animation on both download buttons",
          "Shake animation + inline error on wrong key",
          "Desktop navbar button: locked = opens popup, unlocked = downloads",
        ],
      },
      {
        category: "Light Theme",
        icon: "☀️",
        items: [
          "Light theme applied to mobile toolbar, bottom sheets, popups",
          "Light theme for loading overlay and download animation",
          "Light theme for startup popup and creator info popup",
          "Theme toggle in both navbar and mobile bottom nav",
        ],
      },
      {
        category: "Splash & Loading",
        icon: "⚡",
        items: [
          "Pre-ready splash screen on first paint with logo + spinner + progress bar",
          "Smooth fade-out after 900ms, DOM unmount after 1500ms",
          "Logo & assets cache prompt on first visit (browser Cache API)",
        ],
      },
      {
        category: "Creator Info Popup",
        icon: "👤",
        items: [
          "About + Changelog tabs inside dev info popup",
          "Entire navbar brand area (logo + name) opens the popup",
          "Developer photo (dev.png) replaces initials avatar",
          "Replaced 'ICT HUB' with '9th Batch' affiliation",
        ],
      },
      {
        category: "Startup Popup",
        icon: "🗞️",
        items: [
          "Redesigned as bottom-sheet on mobile with drag handle",
          "Shows only latest major release changes",
          "Sourced from shared changelog.ts — single source of truth",
          "Version badge and release date in header",
        ],
      },
      {
        category: "Changelog System",
        icon: "📋",
        items: [
          "Separate changelog.ts file with full version history",
          "Startup popup uses getLatestMajorChanges()",
          "Dev info Changelog tab uses getAllChanges() — full history v1.0→latest",
          "Each entry: version, label, major flag, date, grouped sections",
        ],
      },
    ],
  },
];

/**
 * Returns the most recent entry marked as major.
 * Used by the startup popup — shows only the latest major release.
 */
export function getLatestMajorChanges(): ChangelogEntry | undefined {
  return [...CHANGELOG].reverse().find((e) => e.major);
}

/**
 * Returns ALL entries in chronological order.
 * Used by the dev-info Changelog tab.
 */
export function getAllChanges(): ChangelogEntry[] {
  return CHANGELOG;
}
