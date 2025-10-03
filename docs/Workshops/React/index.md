---
title: React
sidebar_position: 3
---

# React Workshop Guide

# What is React?
React is a popular JavaScript library for building user interfaces, especially single-page applications (SPAs). It allows developers to create reusable UI components, making code more modular and maintainable.

- **React (React.js):** Primarily used for building web applications. It uses a declarative approach, meaning you describe what you want the UI to look like, and React takes care of updating the DOM efficiently.
- **JSX:** Stands for JavaScript XML. JSX lets you write HTML-like syntax directly in your JavaScript code, making it easier to visualize and manage UI components. Under the hood, JSX is compiled to regular JavaScript.

**Why use React?**
- Large ecosystem and community support
- Backed by Meta (Facebook)
- Used by companies like Instagram, Netflix, Airbnb, and more

Learn more at [react.dev](https://react.dev)

<details>
<summary><strong>Background Knowledge</strong></summary>

### Next.js
- A React framework by Vercel that adds routing, data fetching, and performance features on top of React.
- Key features: file‑based routing, server rendering (SSR), static generation (SSG), incremental static regeneration (ISR), API routes, and image optimization.
- Great for production sites that need SEO and fast performance out of the box.
- Learn more: https://nextjs.org

### React Native
- Use React to build native iOS and Android apps. Components map to platform‑native UI elements (not HTML).
- Easy to learn if you already know React. UI uses components like `View`, `Text`, and `ScrollView` instead of `<div>` and `<p>`.
- Expo is a popular toolkit for React Native that simplifies development, testing, and deployment.
- Learn more: https://reactnative.dev and https://expo.dev

### HTML
- HyperText Markup Language — the structure of web pages.
- Common tags: `<div>`, `<h1>`–`<h6>`, `<p>`, `<a>`, `<img>`, `<button>`, `<input>`, `<ul>`/`<li>`.
- Semantic elements like `<header>`, `<nav>`, `<main>`, `<section>`, `<article>`, `<footer>` improve accessibility and SEO.

```html
<!doctype html>
<html lang="en">
  <head>
    <meta charset="utf-8" />
    <title>Page</title>
  </head>
  <body>
    <h1>Hello</h1>
    <p>Welcome!</p>
  </body>
</html>
```

### CSS
- Cascading Style Sheets — how you style and lay out web pages.
- Core ideas: selectors, box model (margin/border/padding/content), layout with Flexbox and Grid, responsive design with media queries.

```css
.btn {
  background: #2563eb; /* blue-600 */
  color: white;
  padding: 0.5rem 1rem;
  border-radius: 0.375rem;
}
```

### TailwindCSS
- A utility‑first CSS framework. Style elements by composing small classes (e.g., `p-4`, `bg-blue-500`, `rounded-lg`) right in your JSX.
- Pros: fast iteration, consistent spacing/colors, less time naming CSS classes. You still need CSS fundamentals.
- Works great with React/Next.js. Apply classes via `className`.

```jsx
export default function Card() {
  return (
    <div className="p-4 bg-white rounded-lg shadow">
      <h2 className="text-xl font-semibold">Hello</h2>
      <p className="text-gray-600">Tailwind makes styling quick.</p>
    </div>
  );
}
```

### TypeScript vs JavaScript
- JavaScript is dynamic; TypeScript adds static types to catch mistakes earlier and improve editor tooling.
- Benefits: fewer runtime bugs, better autocompletion, and clearer contracts between components.

```tsx
// TypeScript: typed props
type ButtonProps = { label: string; onClick?: () => void };
export function Button({ label, onClick }: ButtonProps) {
  return <button onClick={onClick}>{label}</button>;
}

// JavaScript: same idea without compile-time types
export function ButtonJS({ label, onClick }) {
  return <button onClick={onClick}>{label}</button>;
}
```

</details>

## Project Overview
Description: A movie catalogue that displays trending movies and lets you search for any movie you want. You can also favorite whichever movie you want. We will be using The Movie Database (TMDB) API and Next.js.

Coding environment: Github Codespaces
Source Code:  https://github.com/hackutd/f25-react-workshop
Pre-requisites:
- Github Account
- Know at least 1 programming language fluently

Nice to have:
- Visual Studio Code
- Node.js installed
- Git installed

# Github Codespaces
If you want to do this workshop online without downloading anything, go here:
CODESPACES LINK WIP

# Create Next App
https://nextjs.org/docs/app/getting-started/installation

```jsx
npx create-next-app@latest
```
Accept all defaults

```jsx
cd frontend
npm install // or just 'npm i'
npm run dev
```
Hold down ctrl and click on the link in your terminal OR open a browser and put localhost:3000 in the url

# Project Structure
Here's a typical Next.js project structure and what each file/folder does:

```
frontend/
├── app/                # Main application routes and pages (Next.js App Router)
│   ├── layout.tsx      # Root layout for all pages
│   ├── page.tsx        # Main landing page
│   ├── globals.css     # Main CSS file
│   └── ...             # Other route files/folders
├── public/             # Static assets (images, favicon, etc.)
├── next.config.ts      # Next.js configuration
├── package.json        # Project dependencies and scripts
├── .gitignore          # Prevents certain files/folder from being tracked by git
└── README.md           # Project overview and setup instructions
```

**Key files/folders:**
- `app/`: Organizes your pages and layouts. Each folder/file inside represents a route.
- `components/`: Contains UI building blocks you can reuse across pages.
- `public/`: Store images and static files accessible at the root URL.
- `styles/`: CSS files or Tailwind configuration for styling your app.
- `.env.local`: Store sensitive info like API keys (never commit this!).
- `.gitignore`: Lists files/folders Git should not track (e.g., `node_modules/`, `.env*`, `.next/`, logs). Keeps secrets, build outputs, and large generated files out of your repo.
- `node_modules/`: Installed packages downloaded by your package manager. Generated by `npm install` (or `yarn/pnpm`). Never commit this folder; it can be recreated anytime.
- `package.json`: Lists dependencies and npm scripts (like `dev`, `build`).
- `package-lock.json`: Auto-generated lockfile from npm that pins exact versions for reproducible installs. Commit this file; don’t edit it manually. (If you use Yarn you’ll have `yarn.lock`; with pnpm, `pnpm-lock.yaml`.)
- `next.config.js`: Customize Next.js behavior if needed.
- `README.md`: Explains how to run and use the project.

This structure helps keep your code organized as your app grows.

> Tip: Commit your lockfile (`package-lock.json`) but keep `node_modules/` in `.gitignore`. If you switch machines (or use Codespaces), run `npm ci` (or `npm install`) to restore dependencies exactly.

## Components

Build UIs by composing small, reusable pieces called components. A component is just a function that returns JSX. You pass data into components via props, and combine components to form entire pages.

Example component (receives a video prop):

```jsx
function Video({ video }) {
  return (
    <div>
      <Thumbnail video={video} />
      <a href={video.url}>
        <h3>{video.title}</h3>
        <p>{video.description}</p>
      </a>
      <LikeButton video={video} />
    </div>
  );
}
```

### Add a Navbar component
Create a `components` folder inside your `app` folder (you can also keep `components/` at the project root; both work). Then create `app/components/Navbar.tsx`:

```tsx
import Link from 'next/link';

export default function Navbar() {
  return (
    <div className="flex justify-between p-4 bg-gray-800 text-white">
      <div className="font-bold">Movie App</div>
      <nav className="space-x-4">
        <Link href="/">Home</Link>
        <Link href="/favorites">Favorites</Link>
      </nav>
    </div>
  );
}
```

Why `Link`? In Next.js, `next/link` enables client-side navigation for faster transitions without full page reloads.

### Show the Navbar on every page
In the App Router, `app/layout.tsx` is the root layout for your app. Import the Navbar and render it above `{children}` so it appears on all routes:

```tsx
// app/layout.tsx
import './globals.css';
import type { Metadata } from 'next';
import Navbar from './components/Navbar';

export const metadata: Metadata = {
  title: 'Movie App',
  description: 'Browse and favorite movies',
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body>
        <Navbar />
        <main className="max-w-5xl mx-auto p-4">{children}</main>
      </body>
    </html>
  );
}
```

### Create a new page (routing in App Router)
Next.js uses file-based routing under the `app/` directory:

- `app/page.tsx` → `/` (home)
- `app/favorites/page.tsx` → `/favorites`
- `app/movies/[id]/page.tsx` → `/movies/:id` (dynamic route)

Create a Favorites page at `app/favorites/page.tsx`:

```tsx
export default function FavoritesPage() {
  return (
    <section>
      <h1>Your Favorites</h1>
    </section>
  );
}
```

That’s it—visit `/favorites` in your browser. The folder name becomes the URL segment, and a `page.tsx` inside that folder defines the UI for that route.

> Note: Components that use state, effects, or browser-only APIs need to be marked as Client Components by adding `"use client"` at the top of the file. Pure UI components and most pages can remain Server Components by default.



# Props
Short for properties, props is what we call the parameters we pass into a component, letting us reuse the component with different values. Lets see how to pass in props into our component.
### Build a MovieCard (types + props)
Components become powerful when you pass data into them via props. With TypeScript, you can also describe the shape of that data using types.

Define a Movie type and a simple MovieCard that just renders what it gets:

```tsx
// app/components/MovieCard.tsx
export type Movie = {
  id: number;
  poster_path?: string; // optional because some movies may not have posters
  title?: string;       // optional title
  release_date?: string;// e.g. "2024-07-10"
};

type MovieCardProps = { movie: Movie };

export default function MovieCard({ movie }: MovieCardProps) {
  const year = movie.release_date?.split('-')[0] ?? '—';

  return (
    <div className="bg-black rounded">
      <div className="relative aspect-[2/3]">
        <img
          src={`https://image.tmdb.org/t/p/w500${movie.poster_path ?? ''}`}
          alt={movie.title ?? 'Movie poster'}
          className="w-full h-full object-cover"
        />
      </div>

      <div className="p-3">
        <h3 className="text-white text-xl font-bold">{movie.title ?? 'Untitled'}</h3>
        <p className="text-white text-lg">{year}</p>
      </div>
    </div>
  );
}
```

- Props: The function parameter `{ movie }` is the prop you pass in. We type it with `MovieCardProps` so TypeScript can help you.
- Optional fields (`?`): Some TMDB fields can be missing. Marking them optional keeps the UI resilient.

Use MovieCard in a page (for example, your home page):

```tsx
// app/page.tsx
import MovieCard, { Movie } from './components/MovieCard';

// Example data — you will replace this with real API data later
const movies: Movie[] = [
  { id: 1, title: 'Inception', release_date: '2010-07-16', poster_path: '/qmDpIHrmpJINaRKAfWQfftjCdyi.jpg' },
  { id: 2, title: 'Interstellar', release_date: '2014-11-07', poster_path: '/gEU2QniE6E77NI6lCU6MxlNBvIx.jpg' },
];

export default function HomePage() {
  return (
    <section className="grid grid-cols-2 md:grid-cols-4 gap-4">
      {movies.map((m) => (
        <MovieCard key={m.id} movie={m} />
      ))}
    </section>
  );
}
```

#### Understand `map()` in JSX

- `map()` transforms an array into a new array. In React, we often map data into an array of components.
- `{movies.map((m) => (<MovieCard key={m.id} movie={m} />))}` means: for each movie `m`, return a `<MovieCard>`.

##### Why React needs a key

- React uses `key` to give each list item a stable identity across renders. This helps React match old elements to new ones and update only what changed (reconciliation).
- Without a good key, React may reuse the wrong DOM nodes when items are inserted/removed/reordered, causing subtle UI or state bugs.
- Put the `key` on the element you return from `map()` at the list boundary. Don’t put it inside the child component.
- `key` is special: it’s not passed to your component as a prop. If the child needs the ID, pass it separately (e.g., `<Item key={m.id} id={m.id} />`).

##### What does `key` look like on the page?

- It doesn’t. The `key` prop is used internally by React and is NOT rendered to the DOM. You won’t see a `key` attribute in the HTML.
- If you want to see an identifier in the DOM for debugging, add your own data attribute:

```tsx
<li key={m.id} data-id={m.id}>
  <MovieCard movie={m} />
</li>
```

HTML will include `data-id="123"`, but still no `key` attribute.

##### What is `key` equivalent to?

- Conceptually, it’s like a database primary key for each list item—a stable unique identifier used to track items over time.
- Practically, use something guaranteed stable (e.g., `movie.id`). Avoid values that can change between renders (like array index when the list can reorder).

## State: what it is and how it triggers re-renders

State is data that changes over time within a component (e.g., form inputs, toggles, counters). When you update state, React re-renders that component (and its children) to reflect the new UI.

A tiny example:

```tsx
// app/components/Counter.tsx
"use client";
import { useState } from 'react';

export default function Counter() {
  const [count, setCount] = useState(0); // state variable + setter

  return (
    <button
      onClick={() => setCount((c) => c + 1)}
      className="px-3 py-2 rounded bg-blue-600 text-white"
    >
      Clicks: {count}
    </button>
  );
}
```

Add `<Counter />` anywhere in a Client Component (or inside a Server Component tree, since Server Components can render Client Components as children).

What happens when you click the button?

```
[User clicks]
     │
     ▼
setCount(newValue)
     │  (schedules update)
     ▼
Render component with new state
     │  (compute new JSX tree)
     ▼
Reconcile (diff old vs new virtual tree)
     │  (find minimal DOM updates)
     ▼
Commit changes to DOM
     │
     ▼
Browser paints updated UI
```

Key points:
- Calling a state setter (like `setCount`) queues a re-render with the updated state value.
- React diffs the new output against the previous render and only updates what changed.
- State is isolated to the component instance. Each rendered `<Counter />` has its own `count`.
- In Next.js App Router, any component that uses state must be a Client Component (start the file with `"use client"`).

## Server vs Client in React (Next.js App Router)

In Next.js (App Router), components are Server Components by default. You opt into Client Components by adding `"use client"` at the top of a file.

- Server Components (default):
  - Run on the server. No client-side JavaScript is sent for them by default.
  - Great for data fetching, heavy computation, and SEO-friendly HTML.
  - Can render Client Components as children.
  - Cannot use browser-only APIs or React Client hooks (`useState`, `useEffect`, event handlers).

- Client Components (`"use client"`):
  - Run in the browser after hydration.
  - Required for interactivity: state, effects, event handlers, `localStorage`, `document`, etc.
  - Bundle size matters—only mark components as client when necessary.
  - Can receive data from Server Components via props.

How a page is produced:
- Server renders the initial HTML for Server Components (and shells for Client Components).
- The browser downloads client bundles and hydrates Client Components, attaching event handlers so buttons, inputs, etc. start working.

When to choose which:
- Use Server Components for: fetching TMDB data, rendering lists/cards, static content, SEO.
- Use Client Components for: Favorite buttons, forms with `useState`, modals, anything needing `useEffect` or browser APIs.

Tip: You can mix them. For example, a Server Component page fetches movies and maps them to `<MovieCard>` components. If `MovieCard` needs interactivity (like a Favorite toggle), make only `MovieCard` a Client Component.

