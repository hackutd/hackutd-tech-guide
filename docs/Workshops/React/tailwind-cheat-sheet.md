---
title: TailwindCSS Cheat Sheet
sidebar_label: TailwindCSS Cheat Sheet
sidebar_position: 41
description: Practical Tailwind class reference, patterns, and React/Next.js tips.
---

# TailwindCSS Cheat Sheet

Utility classes you’ll use most when styling React/Next.js components. Tailwind applies styles directly via `className`.

Note: Ensure Tailwind is configured (content globs include your files, and `@tailwind base; @tailwind components; @tailwind utilities;` are in your global CSS). In Next.js, this usually lives in `app/globals.css`.

## Layout

Flexbox

- Container: `flex`, `inline-flex`
- Direction: `flex-row`, `flex-col`
- Wrap: `flex-wrap`, `flex-nowrap`
- Align items: `items-start|center|end|baseline|stretch`
- Justify content: `justify-start|center|end|between|around|evenly`
- Gap: `gap-0` … `gap-16` (and `gap-x-4`, `gap-y-2`)

Grid

- `grid`, `inline-grid`
- Columns: `grid-cols-1` … `grid-cols-12`, `sm:grid-cols-2` (responsive)
- Rows: `grid-rows-1` …
- Gap: `gap-2`, `gap-4`, `gap-x-6`

Positioning

- `relative`, `absolute`, `fixed`, `sticky`
- Offsets: `top-0`, `right-4`, `inset-0`
- Z-index: `z-0`, `z-10`, `z-50`

## Spacing & sizing

- Padding: `p-0` … `p-96`, `px-4`, `py-2`, `pt-6`
- Margin: `m-0` … `m-96`, `mx-auto`, `-mt-2` (negative)
- Width/height: `w-4`, `w-1/2`, `w-full`, `max-w-sm|md|lg|xl|2xl`, `h-10`, `h-screen`
- Aspect ratio: `aspect-square`, `aspect-video`, `aspect-[2/3]`

## Typography

- Font size: `text-xs` … `text-9xl`
- Font weight: `font-light|normal|medium|semibold|bold|extrabold`
- Line height: `leading-none|tight|snug|normal|relaxed|loose`
- Text color: `text-gray-600`, `text-white`, `text-blue-600`
- Alignment: `text-left|center|right|justify`
- Truncation: `truncate`, `line-clamp-2` (plugin) 

## Colors & backgrounds

- Background: `bg-white`, `bg-gray-100`, `bg-blue-600`, `bg-gradient-to-r from-purple-500 to-pink-500`
- Opacity: `bg-opacity-50`, or colors like `bg-black/60`
- Borders: `border`, `border-0`, `border-2`, `border-gray-300`, `rounded`, `rounded-lg`, `rounded-full`
- Shadows: `shadow`, `shadow-md`, `shadow-lg`
- Divide lines: `divide-y`, `divide-gray-200`

## Effects & state

- Hover/focus/active: `hover:bg-blue-700`, `focus:outline-none`, `active:scale-95`
- Transition: `transition`, `duration-200`, `ease-in-out`
- Transforms: `scale-95`, `rotate-6`, `translate-x-2`
- Cursor: `cursor-pointer`, `cursor-not-allowed`

## Responsive & dark mode

- Breakpoints: `sm:`, `md:`, `lg:`, `xl:`, `2xl:`
  - Example: `sm:text-base md:text-lg lg:text-xl`
- Dark: `dark:bg-gray-900 dark:text-white`

## Forms

- Inputs: `block w-full rounded-md border border-gray-300 px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-blue-500`
- Labels: `text-sm font-medium text-gray-700`
- Buttons: `inline-flex items-center rounded-md bg-blue-600 px-4 py-2 text-white hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500`

## Common components

Card

```tsx
export function Card({ title, children }: { title: string; children: React.ReactNode }) {
  return (
    <div className="rounded-lg border border-gray-200 bg-white p-4 shadow">
      <h3 className="mb-2 text-lg font-semibold">{title}</h3>
      <div className="text-gray-600">{children}</div>
    </div>
  );
}
```

Navbar

```tsx
export function Navbar() {
  return (
    <header className="flex items-center justify-between bg-gray-800 px-4 py-3 text-white">
      <div className="font-bold">Movie App</div>
      <nav className="flex items-center gap-4">
        <a className="text-gray-200 hover:text-white" href="/">Home</a>
        <a className="text-gray-200 hover:text-white" href="/favorites">Favorites</a>
      </nav>
    </header>
  );
}
```

Grid gallery

```tsx
export function Gallery({ children }: { children: React.ReactNode }) {
  return (
    <div className="grid grid-cols-2 gap-4 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5">
      {children}
    </div>
  );
}
```

Button variants

```tsx
const base = "inline-flex items-center justify-center rounded-md px-4 py-2 text-sm font-medium transition focus:outline-none focus:ring-2 focus:ring-offset-2";

export const button = {
  primary: `${base} bg-blue-600 text-white hover:bg-blue-700 focus:ring-blue-500`,
  secondary: `${base} bg-gray-100 text-gray-900 hover:bg-gray-200 focus:ring-gray-400`,
  ghost: `${base} text-gray-700 hover:bg-gray-100 focus:ring-gray-300`,
};
```

## Useful patterns

- Center a container: `max-w-5xl mx-auto px-4`
- Center content: `flex items-center justify-center`
- Clickable card: `transition hover:shadow-lg hover:-translate-y-0.5`
- Visually hidden (for a11y): `sr-only`
- Overlay: `relative` on parent, child `absolute inset-0 bg-black/50`

## Tailwind config tips (`tailwind.config.*`)

- Content globs (important for purge):

```js
module.exports = {
  content: [
    './app/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        brand: {
          50: '#eff6ff',
          500: '#2563eb',
          600: '#1d4ed8',
        },
      },
    },
  },
  plugins: [],
};
```

## Debugging tips

- If classes don’t apply, check that the class string isn’t conditional to an empty string; ensure the class names exist in your source for Tailwind to detect.
- Verify content globs include all folders, especially if your components live outside `app/`.
- Use `outline outline-1` or `border border-red-500` to visualize layout boxes quickly.

## Links

- Docs: https://tailwindcss.com/docs
- Playground: https://play.tailwindcss.com/
