---
title: Advanced Styling Workshop Guide

---

## Header.jsx

### Step 1: Header

Starting in the Header.jsx file on line 5, after `return (`. We are going to add styling to the header container.

This adds dimension and emphasis to the container!

**Gradient:**
- set the direction of the gradient `bg-gradient-to-r` 
- set the colors of the gradient `from-blue-500`  `to-purple-600`

**Color:** set the text color to white 

**Shadow:** set the size of the objects shadow to medium

![line1](/img/advancedstyling/header-line1.png)



### Step 2: Center
Here we are going to be adjusting the position of the div contents - the `<h1>` and `<nav>` tags. <br/>
In the first div, add `flex justify-between items-center`

This will center everything in the div contianer with even spacing between them. Justify-[] determines how items are placed along the x-axis. Items-[] determines how items are placed along the y-axis.

![line2](/img/advancedstyling/header-line2.png)

### Step 3: Spacing
In the `<ul>` tag, add `flex space-x-4`, this adds padding between the containers

If needed, you can also use space-y-[] to add padding along the y-axis

![line3](/img/advancedstyling/header-line3.png)

### Step 4: Hover

On both `<li>` tags add hover: `text-yellow-300` and `transition duration-300`

**Hover:** used to change the styling when the cursor is over the container <br/>
&emsp; Hovers are useful to emphasize buttons and links.

**Transition Duration:** sets time it takes to change color/style <br/>
&emsp; The duration is important to ensure that transitions are smooth.

![line3](/img/advancedstyling/header-line4.png)


## RecipeCard.jsx

### Step 5: Overflow/Hover

Go to **Line 8**, this is the first line after `return (`
- add `overflow-hidden`
    - this hides any part of the image that goes beyond the container
- add `transform transition duration-300`
    - this sets the duration of transition
- add `hover: scale-105` `hover: shadow-xl`
    - this changes the scale and shadow of the image with the cursor is hovering over the object

![line1](/img/advancedstyling/recipeCard-line1.png)

### Step 6: Object-cover
Go to **Line 9**, the image tag.
- add `object-cover`
    - This set the sizing of an image to cover its container. Maintaining aspect ratio, but it might be cropped. <br/>
    - There are other ways to manage the sizing of an image that all have their own effects on aspect ratio and image size.

![line9](/img/advancedstyling/recipeCard-line4.png)

### Step 7: Text
Go to **Line 11**, this is the h2 tag.
- add `font-bold text-gray-800`, this changes font to bold and gray
- add `mb-2`, this adds a margin to the bottom of the container

![line2](/img/advancedstyling/recipeCard-line2.png)


### Step 8: Icons
Icons give us a different way to make buttons or add designs to a website. <br/>

Above the button's closing tag,
- Add `<FaChevronUp/>` and `<FaChevronDown />`
    - These are the tags to use the icons imported at the top of the program
    - There are many different icons you can import using react-icons

![line3](/img/advancedstyling/recipeCard-line3.png)


### Additional Resources
Tailwind Docs: https://v3.tailwindcss.com/docs/installation

Fonts: https://fonts.google.com/

Colors: https://colorhunt.co/

Icons: https://react-icons.github.io/react-icons/

