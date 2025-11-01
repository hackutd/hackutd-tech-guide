---
sidebar_position: 5
---

# JavaScript (JS)

JavaScript is the language that is used on the web. All sites today have some sort of JavaScript running on your browser behind the fancy HTML and CSS. Although you technically don't need to use JavaScript to write a good-looking frontend, JavaScript can extend your site, allowing you to dynamically change things on your webpage, call APIS and backends, and even write your websites in a completely different way.

JavaScript, you will find, is a much more dynamic language and allows you to do a lot of things that other programming languages don't like. However, this freedom comes with a downside: JavaScript tends to produce a ton more runtime errors due to its lack of compilation and type checking. You might hear many online hate on JavaScript (and with good reason), but it is the basis for the modern web. And once you learn the basics, you can explore more typed-variations such as TypeScript and CoffeeScript.

## Where to Write JavaScript?

JavaScript can be placed in primarily 2 places:

1. Within the HTML code:

```html title="index.html"
<html>
    <body>
        <h1>Hello</h1>
    </body>
    <script>
        console.log('Hello World!');
    </script>
</html>
```

2. Or in a separate JS file

```html title="index.html"
<html>
    <body>
        <h1>Hello</h1>
    </body>
    <script src="script.js"></script>
</html>
```

```js title="script.js"
console.log('Hello World!');
```

All code will be ran immediately once the page loads the code. However, we can wait until the HTML page has fully rendered before running the code using the `window.onload` function:

```js
window.onload = function () {
    // Code to run once page loads
    document.getElementById('title').textContent = 'Hello!';
};
```

## Variables

JavaScript is not strictly typed, so it only has 3 main variable definitions:

-   `var`: Declares a variable (uses hoisting, which allows use before decleration)
-   `let`: Also declares a variable but enforces that declerations should be before use
-   `const`: Same as constant variables in other languages, cannot be changed after it is defined

## External Links

-   [The Modern JavaScript Tutorial](https://javascript.info/)
-   [W3 Schools JavaScript Tutorial](https://www.w3schools.com/js/)
