# Curemaso · Full CRM Suite (React + TypeScript + Vite)

A pixel-faithful conversion of the original static HTML/CSS/JS Curemaso CRM
prototype into a production-structured React + TypeScript + Vite app.

## Getting started

```bash
npm install
npm run dev       # start dev server
npm run build     # type-check + production build
npm run preview   # preview the production build
```

## Architecture

- `src/types/` — shared TypeScript interfaces per domain
- `src/data/` — static mock data (swap-in point for a real backend's seed/fixtures)
- `src/services/` — `*.service.ts` data-access layer; replace the body of each
  method with a real `fetch`/`axios` call to go live, no component changes needed
- `src/hooks/` — reusable stateful logic (navigation, sidebar, async data, chat, etc.)
- `src/context/` — `ToastContext` (replaces the original `alert()` calls)
- `src/components/common/` — shared UI primitives (StatCard, StatusBadge, Tag,
  ToggleSwitch, Loader, EmptyState, ToastContainer)
- `src/components/layout/` — Sidebar, TopBar, StatsRow, Layout shell
- `src/components/<feature>/` — feature-specific presentational components
- `src/components/pages/` — one component per route/page, lazy-loaded and
  code-split via `React.lazy`
- `src/styles/global.css` — the original stylesheet, preserved as-is (colors,
  spacing, typography, responsive breakpoints all unchanged)

## Notes

- All original interactions are preserved: sidebar navigation & mobile
  hamburger toggle, AI Copilot chat (now with a real loading state while
  "thinking"), inbox channel filters, compliance toggle switches, and the
  Analytics charts (now rendered with Chart.js via `react-chartjs-2` instead
  of a CDN `<script>` tag).
- `alert()` calls from the original were replaced with an in-app Toast
  notification system (`useToast`).
- Font Awesome is now an npm dependency (`@fortawesome/fontawesome-free`)
  instead of a CDN stylesheet.
