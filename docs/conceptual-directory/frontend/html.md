---
sidebar_position: 1
---

# HTML

HTML (HyperText Markup Language) is the basis of all modern websites. Although many developers don't write plain HTML anymore, it is still the underlying system and important to know. At its core, HTML is [XML](https://www.w3schools.com/xml/xml_whatis.asp) with specific tags used to indicate different components on your website.

## Basics

HTML is laid out using **tags**, which are enclosed in angle brackets like this: `<h1>`. Here is an example of a larger block of HTML:

```html
<html>
    <body>
        <h1>Hello World!</h1>
        <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
            aliquip ex ea commodo consequat. Duis aute irure dolor in
            reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
            pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
            culpa qui officia deserunt mollit anim id est laborum.
        </p>
    </body>
</html>
```

There are _opening tags_ and _closing tags_. The opening tag goes before the piece of text that it describes, and the closing tag goes after. The closing tag looks the same as the opening except it starts with a forward slash, like `</h1>`.

The **text in between the tags** would appear on the page for the user to see, with some light formatting depending on the tag type and browser.

> HTML's main purpose if to organize the **structure** of the page - there are not many formatting options to work with, and they are unpredictable as different browsers may display HTML elements differently. **CSS** should be used for formatting, which we will cover later.

## Page Structure

Here is what the skeleton of an HTML page looks like:

```html
<!DOCTYPE html>
<html>
    <head>
        <meta charset="UTF-8" />
        <meta name="viewport" content="width=device-width,initial-scale=1" />
        <title>Browser Tab Title</title>
    </head>
    <body>
        <!-- Add body content here! -->
    </body>
</html>
```

Let's go through this code line by line.

-   The first thing in an HTML doc is `<!DOCTYPE html>` - this just lets the browser know that what follows is, in fact, HTML code.
-   `<html>` and `</html>` define the start and end of the whole document.
-   The rest is split into two sections:
    -   `<head>` - this is information about the document that will not directly appear on the page
        -   `<meta charset="UTF-8">` defines the character set for the document.
        -   `<meta name="viewport" content="width=device-width,initial-scale=1">` scales the page to the size of the screen so that it looks good on screens of all sizes.
        -   `<title>`Some Title`</title>` is the title of the browser tab for the page.
        -   There are other things, like CSS and links to the libraries you may be using in your code, that may go in this section.
    -   `<body>` - this is the actual contents of the page that the user will see.

## Common Tags

-   `<h1></h1>` through `<h6></h6>` for headings and subheadings
-   `<p></p>` for regular text (”paragraph” text)
-   `<a href=""></a>` for links
    -   the text of the link to appear on the page goes between the tags, the url inside the quotes, like this example: `<a href="https://ix.hackutd.co/">Click to join HackUTD IX!</a>`
-   `<ul></ul>` for unordered lists, `<ol></ol>` for ordered lists
    -   every element of the list should be wrapped in `<li></li>` for “list item”
-   `<!-- some words -->` for a comment (this is just the programmer’s notes, and has no effect on the page whatsoever)

To learn more, check out [https://www.w3schools.com/](https://www.w3schools.com/).

This may seem very simple, and that's because it is! But there are also a lot of HTML concepts that are tied to CSS and JS (like classes and IDs), so we talk about them on the CSS and JS pages.
