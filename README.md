# Creator Profile — Brand Collaboration Page

A premium, modern creator profile page built for the **Creators Mela** assignment brief:

> Design and develop a creator profile page that lets a brand manager — who typically spends under 30 seconds reviewing a creator — make a quick, confident decision on whether to explore further.

This project covers all six required sections: **Creator Introduction, Social Media Overview, Audience Insights, Previous Brand Collaborations, Performance Metrics, and a Contact/Collaboration CTA** — built around a glanceable "Collab Fit Score" so the verdict is visible before a single stat is read.

## Tech Stack

- **React** (Vite)
- **Tailwind CSS v4** (CSS-based `@theme`, no `tailwind.config.js`)
- **shadcn/ui** — Avatar, Badge, Button, Card
- **Framer Motion** — scroll-triggered reveals, the animated Fit Score ring, micro-interactions
- **react-icons** — `react-icons/fi` (Feather) for UI icons, `react-icons/fa` for brand/platform icons

## Design Direction

- **Palette:** warm paper background (`paper`), near-black ink for text (`ink`), a deep teal for grounding/data accents (`teal`), and a coral-to-gold "sunset" gradient reserved for the one signature element and primary CTAs (`sunset`)
- **Type:** Fraunces (serif, display/name only), Manrope (body), JetBrains Mono (all data/numbers)
- **Signature element:** the animated **Collab Fit Score** ring in the hero — a single composite number (engagement + audience match + reliability) so the decision-making moment isn't buried under raw follower counts

## Project Structure

```
src/
├── data/
│   └── creatorData.js         # All mock content — swap for a real API later
├── lib/
│   └── format.js               # Number/percent formatting helpers
├── pages/
│   └── CreatorProfilePage.jsx  # Assembles every section into the final layout
└── components/creator/
    ├── SectionEyebrow.jsx      # Reusable color-coded section label
    ├── FitScoreRing.jsx        # Signature animated score ring (hero)
    ├── CreatorHero.jsx         # Creator introduction
    ├── SocialOverview.jsx      # Social media overview
    ├── AudienceInsights.jsx    # Audience insights (sidebar)
    ├── PerformanceMetrics.jsx  # Performance metrics
    ├── BrandCollaborations.jsx # Previous brand collaborations
    ├── CollaborationCTA.jsx    # Contact / collaboration CTA (sidebar)
    └── StickyQuickBar.jsx      # Persistent quick-decision bar on scroll
```

## Setup

1. **Install dependencies** (if not already present):
   ```bash
   npm install framer-motion react-icons
   ```

2. **Add the required shadcn components**:
   ```bash
   npx shadcn@latest add avatar badge card button
   ```

3. **Fonts & theme colors** — add to the top of your global CSS file (e.g. `src/index.css`), above your existing shadcn theme block:
   ```css
   @import url('https://fonts.googleapis.com/css2?family=Fraunces:opsz,wght@9..144,400;9..144,500;9..144,600&family=Manrope:wght@400;500;600;700&family=JetBrains+Mono:wght@400;500;600&display=swap');

   @theme {
     --font-serif: "Fraunces", serif;
     --font-sans: "Manrope", sans-serif;
     --font-mono: "JetBrains Mono", monospace;

     --color-ink-50: #F6F4F1;
     --color-ink-100: #E9E6E0;
     --color-ink-200: #D8D4CC;
     --color-ink-400: #9C968C;
     --color-ink-500: #716C63;
     --color-ink-600: #54504A;
     --color-ink-700: #3F3C37;
     --color-ink-800: #262420;
     --color-ink-900: #14171F;

     --color-paper-50: #FAF8F4;
     --color-paper-100: #F2EFE8;
     --color-paper-200: #E8E4DA;
     --color-paper-400: #C9C2B4;

     --color-teal-50: #EAF3F2;
     --color-teal-100: #D2E6E4;
     --color-teal-700: #16505A;

     --color-sunset-300: #FFB23E;
     --color-sunset-500: #FF6B4A;
   }
   ```

4. **Render the page** in `App.jsx`:
   ```jsx
   import CreatorProfilePage from "@/pages/CreatorProfilePage";

   export default function App() {
     return <CreatorProfilePage />;
   }
   ```

5. **Run it**:
   ```bash
   npm run dev
   ```

## React Optimizations Applied

- `React.memo` on every section component — a state change in one section (e.g. the Age/Location tab toggle in Audience Insights) never re-renders its siblings
- `useMemo` for derived values (total followers, blended engagement rate) so they aren't recalculated on unrelated re-renders
- `useCallback` for handlers passed to memoized children (contact button clicks, tab switches)
- Local component state kept as local as possible (e.g. the audience tab toggle, the sticky bar's visibility) instead of lifted unnecessarily
- Scroll listener in `StickyQuickBar` is throttled via `requestAnimationFrame` rather than firing on every scroll event

## Customizing

All content lives in `src/data/creatorData.js` — swap the creator's name, bio, photos, platform stats, audience numbers, collaborations, and availability there. Nothing else needs to change.