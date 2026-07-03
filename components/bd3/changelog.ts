/**
 * BD3 — Birthday Post Studio changelog
 *
 * version:  semver string  (e.g. "1.0", "1.5", "2.3")
 * label:    optional short display name shown as a badge
 * major:    true  → shown in the startup "What's new" popup
 *           false → only shown in the dev-info Changelog tab
 * date:     release date string
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
          "Birthday post generator with profile photo upload",
          "Circular crop modal with drag & zoom",
          "4 background templates (t1–t4)",
          "HD 1080 × 1350 px PNG export",
          "Batch / Faculty / University footer text",
        ],
      },
    ],
  },
  {
    version: "1.1",
    major: false,
    date: "2025-01",
    sections: [
      {
        category: "Fixes",
        icon: "🐛",
        items: [
          "Fixed image export not including profile photo on first render",
          "Improved crop modal touch handling on mobile",
        ],
      },
    ],
  },
  {
    version: "1.5",
    major: true,
    date: "2025-02",
    sections: [
      {
        category: "AI Message",
        icon: "🤖",
        items: [
          "AI-generated birthday message (Groq llama-3.3-70b-versatile)",
          "Real-time attempt counter via SSE stream",
          "Server-side character trimming — always returns 250–300 chars",
          "Banned words list to keep AI output clean and on-brand",
        ],
      },
      {
        category: "Design",
        icon: "🎨",
        items: [
          "Gold textured name pill with auto-width",
          "Roboto Mono font for the name — clean bold monospace style",
          "Dark shadow wings on the name pill for depth",
          "Font size slider for the name",
        ],
      },
    ],
  },
  {
    version: "2.0",
    label: "v2 — Redesign",
    major: true,
    date: "2025-03",
    sections: [
      {
        category: "UI Overhaul",
        icon: "✨",
        items: [
          "Full editor + preview split-pane layout",
          "Dark / light theme toggle in navbar",
          "Section cards with accent colours per tool",
          "Improved template grid with checkmark indicator",
        ],
      },
      {
        category: "AI Improvements",
        icon: "🤖",
        items: [
          "AI social-media caption generator (separate from image message)",
          "One-click copy for generated caption",
          "Refresh button with live progress bar",
        ],
      },
    ],
  },
  {
    version: "2.3",
    major: false,
    date: "2025-04",
    sections: [
      {
        category: "Fixes & Polish",
        icon: "🔧",
        items: [
          "Splash loading screen on first paint",
          "Logo & assets cached to browser on first load (user prompt)",
          "Fixed template background not applying on Safari",
        ],
      },
    ],
  },
  {
    version: "3.0",
    label: "v3 — Mobile-first",
    major: true,
    date: "2025-06",
    sections: [
      {
        category: "Mobile UX",
        icon: "📱",
        items: [
          "Canva-style horizontal icon toolbar below navbar",
          "Bottom-sheet panels — each tool opens its own focused sheet",
          "Pinch-to-zoom & pan on the preview canvas",
          "Fixed bottom nav bar: Save · Focus · Theme",
          "FloatingHomeButton hidden on bd3 route",
        ],
      },
      {
        category: "Access & Security",
        icon: "🔒",
        items: [
          "Access key modal popup — download locked without a valid key",
          "Lock → unlock animation on both desktop and mobile download buttons",
          "Shake animation on wrong key entry",
        ],
      },
      {
        category: "Design & UX",
        icon: "🎨",
        items: [
          "Light theme applied to mobile toolbar, bottom sheets, popups, loading overlay",
          "Startup popup redesigned as bottom-sheet on mobile",
          "Dev info popup with About + Changelog tabs",
          "Brand area (logo + name) opens dev info on click",
          "Collapse/restore icon toolbar with chevron toggle",
        ],
      },
    ],
  },
];

/**
 * Returns entries marked as major — used by the startup popup.
 * Shows only the LAST major release to keep the "What's new" brief.
 */
export function getLatestMajorChanges(): ChangelogEntry | undefined {
  return [...CHANGELOG].reverse().find((e) => e.major);
}

/**
 * Returns ALL entries in chronological order — used by the dev-info Changelog tab.
 */
export function getAllChanges(): ChangelogEntry[] {
  return CHANGELOG;
}
