# Project Instructions (our stand-in for a "Skill")

> In Claude.ai / Claude Code, you can save a file like this as a **Skill**,
> and Claude automatically loads it when relevant — you don't have to
> re-paste it every time. GitHub Codespaces' AI tools don't have that
> feature, so here we simulate it: we reference or paste this file into the
> chat manually whenever we want the AI to follow it.
>
> Point this out live: ask the AI to build a feature _without_ mentioning
> this file, and notice it doesn't automatically follow these rules —
> unlike a real Skill.

## Tech stack

- React 18 + React Router
- Tailwind CSS (utility classes only)
- `src/index.css` already contains only the Tailwind directives (`@tailwind base/components/utilities`) — do not add custom CSS; do not create new CSS files
- Functional components only

## Style rules

- App shell: root wrapper `min-h-screen flex flex-col`; `main` uses `flex-1`
- Page sections: `max-w-5xl mx-auto px-6 py-12` (Home hero uses `py-20 text-center`)
- Navbar: `bg-white border-b`, with a top accent strip `h-1 bg-gradient-to-r from-orange-400 via-pink-500 to-purple-600`; inner row `max-w-5xl mx-auto px-6 py-4 flex items-center justify-between`; brand link `font-bold text-lg`; nav links `flex gap-6 text-sm font-medium text-gray-600` with `hover:text-gray-900`
- Footer: `border-t py-6 text-center text-sm text-gray-500`
- Cards: `rounded-xl border bg-white p-5 shadow-sm hover:shadow-md transition`
- Card title: `font-semibold text-lg`; team line `text-sm text-gray-500 mt-1`; description `text-sm text-gray-700 mt-3`
- Tags / pills: `text-xs px-2 py-1 rounded-full bg-gray-100 text-gray-600` inside `flex flex-wrap gap-2 mt-4`
- Projects grid: `grid sm:grid-cols-2 lg:grid-cols-3 gap-5`
- Page titles: Home `text-4xl font-bold`; other pages `text-2xl font-bold mb-6`
- Body / supporting text: `text-gray-600` (Home supporting text also `mt-4 max-w-xl mx-auto`)
- Gradient accent anywhere else: `from-orange-400 via-pink-500 to-purple-600`

## File layout

- Components live in `src/components/`
- Full pages live in `src/pages/`

## Process rules

- Every new page must be added to the routes in `App.jsx` AND linked in `Navbar.jsx`
- Add a short comment above each new component explaining what it does
- Reuse existing components (like `ProjectCard`) instead of duplicating markup
- Style new UI with Tailwind utility classes that match the rules above
- When asked to apply these style rules to the whole site, update existing pages and components to match — still using utility classes only, no custom CSS
