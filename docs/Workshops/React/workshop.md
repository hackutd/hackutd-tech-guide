---
title: Workshop
sidebar_position: 1
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

## Side effects and useEffect (with useState)

Side effects are anything your component does that reaches outside React’s render cycle or depends on external systems. Common examples:
- Network requests (fetching data)
- Reading/writing browser APIs (localStorage, document, window)
- Timers, intervals, subscriptions, event listeners
- Logging, analytics, imperative DOM updates

Use `useState` to store changing data in a Client Component and `useEffect` to run effects after render. The effect’s dependency array controls when it runs.

Example: a search page that loads popular movies on mount and lets users search.

```tsx
"use client";
import MovieCard from "./components/MovieCard";
import {useState, useEffect} from "react";
import {searchMovies, getPopularMovies} from "./api/movies/route";

type Movie = {
  id: number;
  title: string;
  poster_path?: string;
  release_date?: string;
};

export default function Home() {
  const [searchQuery, setSearchQuery] = useState("");
  const [movies, setMovies] = useState<Movie[]>([]);

  useEffect(() => {
    const loadPopularMovies = async () => {
      try {
        const popularMovies = await getPopularMovies();
        setMovies(popularMovies);
      } catch (error) {
        console.error("Error fetching popular movies:", error);
      }
    };
    loadPopularMovies();
  }, []);

  const handleSearch = async (e: any) => {
    e.preventDefault(); // Prevent page reload on form submit

    if (!searchQuery.trim()) return; // Ignore empty searches

    const fetchSearchResults = async () => {
      try {
        const results = await searchMovies(searchQuery);
        setMovies(results);
      } catch (error) {
        console.error("Error searching movies:", error);
      }
    };

    fetchSearchResults();
  }

  return (
    <div>
      <form onSubmit={handleSearch} className="m-4 flex">
        <input
          type="text"
          placeholder="Search for a movie..."
          className="border rounded-l p-2 flex-1"
          value={searchQuery}
          onChange={(e) => {
            setSearchQuery(e.target.value);
            console.log(e.target.value);
          }}
        />
        <button type="submit" className="bg-blue-500 text-white rounded-r p-2">
          Search
        </button>
      </form>
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4 m-8">
        {movies.map((movie) => (
            <MovieCard movie={movie} key={movie.id} />
          ))}
      </div>
    </div>
  );
}
```

What’s happening:
- "use client": Required because we use `useState`, `useEffect`, and browser APIs in this file.
- `useState` holds the search query and the list of movies.
- `useEffect(..., [])` runs once after the first render (mount) to load popular movies.
- On submit, we prevent the default page reload, call `searchMovies`, and update state with the results.
- Changing state (`setMovies`, `setSearchQuery`) triggers a re-render and the UI updates.

About the dependency array:
- `[]`: run once after mount.
- `[searchQuery]`: run when `searchQuery` changes.
- Omit the array: run after every render (usually not desired).
- Cleanup: return a function from `useEffect` to unsubscribe/clear timers when the component unmounts or before the next run.

Note (Next.js App Router): If `searchMovies`/`getPopularMovies` are API route handlers in `app/api/.../route.ts`, don’t import them directly into a Client Component. Instead, call them over HTTP (e.g., `await fetch('/api/movies?query=...')`) or move shared fetching logic into a separate module (e.g., `lib/tmdb.ts`) that both server and client can use safely.

Tip (typing events): For stricter types, use `React.FormEvent<HTMLFormElement>` for the submit handler and `React.ChangeEvent<HTMLInputElement>` for `onChange`.

## TMDB API: setup and API module (app/api/movies/route.ts)

The Movie Database (TMDB) is a public API for movie data (titles, posters, release dates, etc.). You’ll need an API key and a base URL.

- Base URL: `https://api.themoviedb.org/3`
- Docs: https://developer.themoviedb.org/

### 1) Create environment variables
Create a file named `.env.local` at the project root and add:

```bash
NEXT_PUBLIC_TMDB_BASE_URL=https://api.themoviedb.org/3
NEXT_PUBLIC_TMDB_API_KEY=YOUR_API_KEY_HERE
```

- You can grab the API key from the slides: https://docs.google.com/presentation/d/1FKsA746KOhiAC1M-s-wR1RcHO8cmI6H7g9LMwGqdDMI/edit?usp=sharing
- Files matching `.env*` are loaded by Next.js. `.env.local` is for your machine only and should not be committed.
- The `NEXT_PUBLIC_` prefix exposes the value to the browser. That’s convenient for demos, but see the Security note below.

### 2) Ensure `.env.local` is ignored by Git
Your `.gitignore` should include entries like:

```gitignore
# dependencies
node_modules/

# next build output
.next/

# env files
.env*
```

This keeps secrets and large/generated files out of your repository.

### 3) Create `app/api/movies/route.ts`
Add the following helper functions to fetch data from TMDB:

```ts
// app/api/movies/route.ts
export const getPopularMovies = async () => {
  const response = await fetch(
    `${process.env.NEXT_PUBLIC_TMDB_BASE_URL}/movie/popular?api_key=${process.env.NEXT_PUBLIC_TMDB_API_KEY}`
  );
  const data = await response.json();
  return data.results;
};

export const searchMovies = async (query: string) => {
  const response = await fetch(
    `${process.env.NEXT_PUBLIC_TMDB_BASE_URL}/search/movie?api_key=${process.env.NEXT_PUBLIC_TMDB_API_KEY}&query=${encodeURIComponent(query)}`
  );
  const data = await response.json();
  return data.results;
};
```

What this code does:
- `async` marks a function as asynchronous so you can use `await` inside.
- `await fetch(url)`: sends an HTTP request and pauses until the response arrives.
- `await response.json()`: parses the JSON body into a JavaScript object.
- `data.results`: TMDB returns a shape like `{ page, results, total_pages, ... }`. We return the `results` array of movies.
- We interpolate environment variables (from `.env.local`) into the URL using template strings.

Why place this under `app/api/movies/`?
- In the App Router, anything under `app/api/**/route.ts` corresponds to an API route path (e.g., `/api/movies`).
- Co-locating TMDB-related code here makes it easy to evolve this file into a proper API endpoint later.
- Conventionally, you’d either export route handlers here or keep shared fetch logic in `lib/`. For the workshop, we keep it simple with helper functions.

Security note (important):
- Using `NEXT_PUBLIC_` exposes the API key to the browser. That’s fine for learning, but not secure for production.
- Production approach: keep your API key server-only (no `NEXT_PUBLIC_`), implement a real API route, and have the client call `/api/movies` instead of TMDB directly.

Optional: turn this into a proper API route so the client fetches `/api/movies`.

```ts
// app/api/movies/route.ts (API route handler example)
export async function GET(request: Request) {
  const { searchParams } = new URL(request.url);
  const query = searchParams.get('query');

  const base = process.env.TMDB_BASE_URL!; // server-only var (no NEXT_PUBLIC_)
  const key = process.env.TMDB_API_KEY!;   // server-only var

  const url = query
    ? `${base}/search/movie?api_key=${key}&query=${encodeURIComponent(query)}`
    : `${base}/movie/popular?api_key=${key}`;

  const res = await fetch(url, { cache: 'no-store' });
  const data = await res.json();
  return new Response(JSON.stringify(data.results), {
    headers: { 'Content-Type': 'application/json' },
  });
}
```

Then, in a Client Component, call your own API route:

```ts
const popular = await fetch('/api/movies').then((r) => r.json());
const search = await fetch(`/api/movies?query=${encodeURIComponent(q)}`).then((r) => r.json());
```

This keeps your TMDB key on the server and avoids exposing secrets to users.

## Wrap-up and next steps

By now you’ve:
- Created a Next.js app and learned App Router file-based routing
- Added a global Navbar via `app/layout.tsx` and created a `/favorites` page
- Built a typed `MovieCard` and rendered lists with `Array.map()` and stable `key`s
- Passed data with props and used object access/destructuring patterns safely
- Learned how state changes trigger re-renders, plus Server vs Client components and when to use `"use client"`
- Used `useEffect` for side effects like fetching, and wired search + popular movies
- Set up TMDB with environment variables, kept secrets out of Git with `.gitignore`, and created helper/API route code

Quick checklist
- Home page renders a grid of `MovieCard`s
- `/favorites` route is accessible
- If you added the favorite toggle, the heart button updates and persists via `localStorage`
- Search loads popular movies on mount and returns results on submit

Good next steps
- Server data fetching: make `app/page.tsx` an async Server Component to fetch TMDB data on the server and pass it into client children only when needed
- Details page: add `app/movies/[id]/page.tsx` to show a movie’s details using a dynamic route
- UX states: add `loading.tsx` and `error.tsx` files for routes; show skeletons/placeholders
- Data strategy: use caching/revalidation (ISR) for lists; choose SWR/TanStack Query if you need client-side refetching
- UI polish: refine layout with Tailwind; consider component libraries like shadcn/ui, MUI, or Chakra
- Persistence: keep favorites in localStorage for now; later, persist to a DB (Supabase/Firebase) behind your own API
- Deploy: connect your repo to Vercel, set env vars in the project settings, and avoid exposing secrets (use server-only keys)

Resources
- Workshop resources: see [Resources](./external_resources.md)
- Slides (API key link inside): https://docs.google.com/presentation/d/1FKsA746KOhiAC1M-s-wR1RcHO8cmI6H7g9LMwGqdDMI/edit?usp=sharing

Troubleshooting
- `.env.local` changes require restarting the dev server
- 401/403 from TMDB: check `NEXT_PUBLIC_TMDB_API_KEY` and base URL
- Missing posters: `poster_path` can be null; guard with a fallback image or empty string
- Key warnings: ensure `key` is stable (use `movie.id`), not array index if lists can reorder

