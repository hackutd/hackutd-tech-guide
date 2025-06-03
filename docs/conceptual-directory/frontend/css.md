---
sidebar_position: 2
---

# CSS

CSS (Cascading Style Sheets) is used for styling a website, which means adding formatting and layout to the bare bone of HTML.

## Basic Syntax

Here is an example of what CSS looks like:

```css
h1 {
    color: red;
}
```

This block of code would turn all of the level 1 headings in the associated HTML document red. Let's go through it line by line.

-   `h1` is the **selector**. This means that the code in the curly braces that follow will only apply to HTML elements of this kind - in this case, all `<h1>`.
-   `color:` is the **property** - the thing we are trying to format. Other examples of properties include `font-size` or `margin`.
-   `red;` is the value of the property - specifically what we are setting the property to be.

## Ways to add CSS to Your HTML Document

There are 3 ways to add CSS to an HTML doc:

1. Linking a separate file in the head section
2. Directly in the head section
3. Inside of the tag you are styling

You only really need to use one, but we are going to talk about all 3, and you can choose which one works better for what you are doing.

### 1. External CSS

Writing the CSS in a separate document is convenient if you are writing a lot of it. It also means you could use the same styling for multiple different HTML pages, so this is the preferred way to use CSS if you are building a multi-page website.
You would need to _link_ the CSS document to the HTML, and this is done with a `<link>` tag in the `<head>` section of the HTML page. If your CSS document is called `styles.css`, you would link it like this:

```html
<head>
    <link rel="stylesheet" href="styles.css" />
</head>
```

### 2. Internal CSS

For styling that is unique to just one page, or if you are only working with one small page, it is possible to include the CSS directly in the head section of the HTML document using `<style>` tags like this:

```html
<head>
    <style>
        h1 {
            color: red;
        }
    </style>
</head>
```

### 3. Inline CSS

CSS styles can also be applied only to one element in HTML, so that no selector is necessary, like this:

```html
<h1 style="color:red;">Hello!</h1>
```

Be careful when using CSS this way because it can be difficult to find and change in a large HTML document, and can get messy very quickly.

## Selectors

We already saw one kind of selector: `h1` selects all elements of a specific **type**. If we want to be more specific that that, we can use **classes** and **IDs**.

### Classes

A class is an _attribute_ in an HTML tag. In HTML, it looks like this:

```html
<h1 class="someBlueText">Heading</h1>
<p class="someBlueText">Example paragraph text</p>
```

To apply some styling to all elements with this class, the selector in CSS is a period and then the name of the class, like this:

```css
.someBlueText {
    color: blue;
}
```

### IDs

IDs are very similar to classes except they are _unique_. A certain ID can only be applied to one HTML element. In CSS, the selector is written as "#" and then the name of the ID. Here's an example:

```html title="index.html"
<h1 id="firstTitle">Hello World!</h1>
```

```css title="styles.css"
#firstTitle {
    color: red;
}
```

## Common Basic Properties

Here are some examples of CSS properties besides the one we've been using so far - color - but there are too many to list out here, so check out [https://www.w3schools.com/](https://www.w3schools.com/) for a more comprehensive overview.

-   **font-size** - most commonly measured in _pt_ (as in, 12pt font), _px_ (pixels), or _em_ (relative to the default). For example, `font-size: 2em;`
-   **font-family** - this is what we normally refer to as the _font_ - Arial, Times New Roman, etc.
-   **font-weight** - how bold the text is. Measured numerically 100-900 or with words like "normal", "bold", or "lighter". Not all fonts have the full range of weight values available. The most common application of this property is `font-weight: bold;`
-   **background-color** - just what it sounds like - the background color of the element. Colors can be specified with a choice from certain built-in ones (like "red"), but really it's better to be more precise and use hex codes([HTML Color Codes](https://htmlcolorcodes.com/) has a cool color picker you can use to find the color you need). Example: `background-color: #9D76F3;`

## Layout Properties

We mentioned CSS is used for layout earlier, and here are the most basic properties associated with that:

-   **margin** - adds spacing on the very outside of the element (this would be outside of the border and any background color you add).
-   **padding** - adds spacing just inside the element's borders (inside the border and the bounds of the background color).

Both are measured in a variety of units, the most popular being _px_ (pixels). You can also change spacing on a particular side of the element by using **margin-top, margin-right, margin-bottom,** or **margin-left** (same with padding).

## Other Layout Tools

For further layout options, check out CSS Grid and CSS Flexbox. Here are some resources we recommend to learn more:

-   Grid: [https://css-tricks.com/snippets/css/a-guide-to-flexbox/](https://css-tricks.com/snippets/css/a-guide-to-flexbox/)
-   Flexbox: [https://css-tricks.com/snippets/css/complete-guide-grid/](https://css-tricks.com/snippets/css/complete-guide-grid/)

## Frameworks

It can be a tedious and time-consuming process to build up a presentable page starting from scratch with CSS. **Frameworks**, which are essentially CSS libraries, make it much easier. Here are some of the more popular Frameworks to get you started:

-   [Material UI](https://mui.com/)
-   [Bootstrap](https://getbootstrap.com/)
-   [Tailwind CSS](http://tailwindcss.com)
-   [Bulma](http://bulma.io)
