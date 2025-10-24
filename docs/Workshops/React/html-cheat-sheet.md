---
title: HTML Cheat Sheet
sidebar_label: HTML Cheat Sheet
sidebar_position: 40
description: Quick reference for common HTML tags, attributes, semantics, and React/JSX nuances.
---

# HTML Cheat Sheet

This page lists common HTML tags with short explanations, plus a quick example of a simple React component.

## Common tags (what they mean)

- `<!doctype html>` — Declares the document type (HTML5).
- `<html>` — Root element of an HTML page.
- `<head>` — Metadata about the document (title, meta tags, links, scripts).
- `<title>` — Page title shown in the browser tab.
- `<meta>` — Metadata like charset and viewport.
- `<link>` — Link external resources (CSS, icons).
- `<script>` — Include or run JavaScript.
- `<body>` — The visible page content.
- `<header>` — Intro area or site/page header.
- `<nav>` — Navigation links.
- `<main>` — Main, unique content of the page.
- `<section>` — Thematic grouping of content.
- `<article>` — Independent, self‑contained content (e.g., blog post).
- `<aside>` — Side content (e.g., sidebar, related links).
- `<footer>` — Footer content.
- `<h1>` ... `<h6>` — Headings from most to least important.
- `<p>` — Paragraph text.
- `<a>` — Link to another page or location.
- `<img>` — Display an image (use alt for accessibility).
- `<ul>` — Unordered list (bulleted).
- `<ol>` — Ordered list (numbered).
- `<li>` — List item inside ul/ol.
- `<div>` — Generic block container.
- `<span>` — Generic inline container.
- `<button>` — Clickable button.
- `<input>` — Input control (text, checkbox, etc.).
- `<label>` — Label for form control.
- `<select>` — Dropdown list.
- `<textarea>` — Multiline text input.
- `<form>` — Groups and submits form controls.
- `<table>` — Tabular data container.
- `<thead>`, `<tbody>`, `<tfoot>` — Table header/body/footer groups.
- `<tr>` — Table row.
- `<th>` — Table header cell.
- `<td>` — Table data cell.
- `<video>`, `<audio>` — Embed media with playback controls.
- `<br>` — Line break.
- `<hr>` — Thematic break (horizontal rule).
- `<strong>` — Strong importance (typically bold).
- `<em>` — Emphasis (typically italic).
- `<code>` — Inline code snippet.
- `<pre>` — Preformatted text (e.g., code blocks).

Tip: Prefer semantic tags (`<header>`, `<main>`, `<section>`, `<article>`, `<footer>`, `<nav>`) over generic `<div>` when possible.

## A simple React component

Example of a minimal React component using JSX. In React, use className instead of class and camelCase event handlers.

```jsx
// Hello.jsx
export default function Hello({ name = 'World' }) {
  return (
    <div>
      <h1>Hello, {name}!</h1>
      <button onClick={() => alert(`Hi, ${name}!`)}>Say hi</button>
    </div>
  );
}
```

Usage:

```jsx
import Hello from './Hello';

export default function Page() {
  return <Hello name="React" />;
}
```

