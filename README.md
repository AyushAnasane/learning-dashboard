# Next-Gen Learning Dashboard

A futuristic student dashboard with bento grid layout, real-time course data from Supabase, Framer Motion animations, and full responsiveness.

## Live Demo

[View live dashboard](https://learning-dashboard-smoky.vercel.app/dashboard)

## Tech Stack

- Next.js 15 (App Router)
- Supabase (PostgreSQL)
- Tailwind CSS v3
- Framer Motion
- Lucide React
- TypeScript

## Architecture

- **Server Components**: Data fetching via Server Actions (`fetchCourses`). Async Supabase client with `cookies()`.
- **Client Components**: Sidebar, bottom navigation, animated tiles, progress bars, and responsive provider.
- **Animations**: Staggered entrance, spring hover effects, layoutId sidebar highlight, animated progress bars.
- **Responsive**: Desktop (sidebar expanded), tablet (collapsed to icons), mobile (bottom navigation).

## Challenges

- Downgraded Tailwind from v4 to v3 due to `@apply` incompatibility.
- Fixed DNS resolution for Supabase by switching to Google DNS.
- Updated Supabase SSR client to use async `cookies()` with `getAll`/`setAll`.
- Standardised imports to `@/` alias to avoid module resolution errors.

## Local Setup

1. Clone the repo
2. `npm install`
3. Copy `.env.example` to `.env.local` and add your Supabase URL and anon key
4. `npm run dev`

## Environment Variables

```env
NEXT_PUBLIC_SUPABASE_URL=your_supabase_project_url
NEXT_PUBLIC_SUPABASE_ANON_KEY=your_supabase_anon_key
