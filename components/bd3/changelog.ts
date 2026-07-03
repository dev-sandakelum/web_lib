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
          "Birthday post generator launched",
          "Profile photo upload with crop support",
          "Template access control system added",
          "AI-powered message generation introduced",
          "HD PNG export support (1080 × 1350)",
          "Batch, Faculty, and University footer support",
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
          "Improved image crop controls",
          "Updated border styling",
          "Better responsiveness across layouts",
          "General visual consistency improvements",
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
        category: "Improvements",
        icon: "🔧",
        items: [
          "Improved generator workflow",
          "Removed unnecessary copy image button",
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
          "AI-generated messages are now smarter and more unique",
          "Reduced repeated message generation",
          "Improved message generation speed",
          "Added retry progress indicator",
          "Better reliability during refresh attempts",
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
          "Complete UI redesign with modern visuals",
          "New split editor and live preview layout",
          "Improved template selection interface",
          "Loading overlay and theme toggle added",
          "Startup popup with version updates",
          "Font size control added",
        ],
      },
      {
        category: "Name Design",
        icon: "🎨",
        items: [
          "Premium gold name pill design",
          "Auto-width name fitting",
          "Advanced font and padding customization",
          "Enhanced shadows and depth effects",
        ],
      },
      {
        category: "Creator Info",
        icon: "👤",
        items: [
          "Creator info popup added",
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
          "Updated creator information",
          "Enhanced startup popup design",
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
          "New Canva-style mobile experience",
          "Preview always visible while editing",
          "Toolbar-based editing workflow",
          "Pinch-to-zoom and drag support",
          "Reset zoom shortcut added",
          "Collapsible mobile toolbar",
        ],
      },
      {
        category: "Bottom Navigation",
        icon: "🧭",
        items: [
          "New bottom navigation bar",
          "Quick access to Save, Focus, and Theme tools",
          "Improved mobile workflow",
        ],
      },
      {
        category: "Access & Security",
        icon: "🔒",
        items: [
          "Download protected with access key",
          "New unlock animation",
          "Better error feedback for invalid keys",
        ],
      },
      {
        category: "Light Theme",
        icon: "☀️",
        items: [
          "Light theme added for mobile UI",
          "Improved popup and loading screen appearance",
          "Theme switching available everywhere",
        ],
      },
      {
        category: "Splash & Loading",
        icon: "⚡",
        items: [
          "New splash screen on startup",
          "Smoother loading transitions",
          "Faster asset loading experience",
        ],
      },
      {
        category: "Creator Info",
        icon: "👤",
        items: [
          "About and Changelog tabs added",
          "Improved developer profile section",
          "Updated batch affiliation display",
        ],
      },
      {
        category: "Startup Popup",
        icon: "🗞️",
        items: [
          "Redesigned mobile startup popup",
          "Now highlights major updates only",
          "Version badge and release date shown",
        ],
      },
      {
        category: "Changelog",
        icon: "📋",
        items: [
          "Complete version history available",
          "Better organized release notes",
          "Grouped updates by category",
        ],
      },
    ],
  },
];

/**
 * Returns latest major release
 * Used for startup popup
 */
export function getLatestMajorChanges(): ChangelogEntry | undefined {
  return [...CHANGELOG].reverse().find((entry) => entry.major);
}

/**
 * Returns all public changes
 */
export function getAllChanges(): ChangelogEntry[] {
  return CHANGELOG;
}

/**
 * Future-proof helper if you ever add internal-only entries
 */
export function getPublicChanges(): ChangelogEntry[] {
  return CHANGELOG;
}