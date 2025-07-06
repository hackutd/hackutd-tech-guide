---
title: Advanced Styling Workshop Guide

---

## Header.jsx

### Step 1:
**Gradient:** 
- set the direction of the gradient `bg-gradient-to-r` 
- set the colors of the gradient `from-blue-500`  `to-purple-600`

**Color:** set the text color to white 

**Shadow:** set the size of the objects shadow to medium

![line1](/img/advancedstyling/header-line1.png)

### Step 2:
In the first div, add `flex justify-between items-center`

This will center everything in the div with even spacing between them.

![line2](/img/advancedstyling/header-line2.png)

### Step 3:
In the `<ul>` tag, add `flex space-x-4`, this adds padding between the containers

![line3](/img/advancedstyling/header-line3.png)

### Step 4:
On both `<li>` tags add hover: `text-yellow-300` and `transition duration-300`

**Hover:** used to change the styling when the cursor is over the container

**Transition Duration:** sets time it takes to change color/style

![line3](/img/advancedstyling/header-line4.png)


## RecipeCard.jsx

### Step 5:

**Line 8**
- add `overflow-hidden`, this hides any part of the image that goes beyond the container
- add `transform transition duration-300`
- add `hover: scale-105` `hover: shadow-xl`, this changes the scale and shadow of the image with the cursor is hovering over the object

![line1](/img/advancedstyling/recipeCard-line1.png)

### Step 6:
**Line 9**
- add `object-cover`
- This set the sizing of an image to cover its container. Maintaining aspect ratio, but it might be cropped.

![line9](/img/advancedstyling/recipeCard-line4.png)

### Step 7:
**Line 11**
- add `font-bold text-gray-800`, this changes font to bold and gray
- add `mb-2`, this adds a margin to the bottom of the container

![line2](/img/advancedstyling/recipeCard-line2.png)


### Step 8: 
Add `<FaChevronUp/>` and `<\FaChevronDown />`, these are the tags to use the icons imported at the top of the program

![line3](/img/advancedstyling/recipeCard-line3.png)


### Additional Resources
Tailwind Docs: https://v3.tailwindcss.com/docs/installation

Fonts: https://fonts.google.com/

Colors: https://colorhunt.co/

Icons: https://react-icons.github.io/react-icons/

