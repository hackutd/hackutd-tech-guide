---
title: Common Tailwind Attributes and Examples
slug: tailwind
sidebar_position: 4
---

When declaring attributes you first specify the attribute itself, and apply additional parameters that are separated by hyphens e.g. `bg` - `gray` - `100` 

1. **Padding/Margin:**  p, m
    1. We can specify the axis of padding using keywords **x and y**. This can be specified even further into single direction using **l, r, t, b** which stand for left, right, top, and bottom respectively. 
        1. px-4 → Padding only on the X axis, 4 units to the left and right
        2. mt-10 → Margin at the top of the element 10 units up.
2. **Width/Height:** w, h
    1. For width and height, we can use fractions, keywords, and absolute values.
        1. w-full
        2. h-screen
        3. w-1/2
        4. h-16
3. **Flexbox:** flex, items, justify
    1. Flexbox is quite complicated so we recommend you take a visit to this [link](https://developer.mozilla.org/en-US/docs/Web/CSS/CSS_flexible_box_layout/Basic_concepts_of_flexbox) to understand it better.
4. **Font:** text, font
    1. Knowing whether a style is associated with the keyword **text** or **font** will only come with practice. Here are some of the common distinctions
        1. size: text-xl, text-md, text-sm
        2. bold: font-bold
        3. color: text-blue-200, text-red-500
        4. style: italic
        5. alignment: text-left, text-center, text-justify
5. **Background:** bg
    1. One of the simpler attributes to modify
        1. Color: bg-blue-200, bg-red-200
        2. Gradient: bg-gradient-to-r, bg-gradient-to-t
        3. Transparency: bg-transparent
6. **Border:** border, rounded
7. **Hover/Focus:** hover:bg-opacity-80, focus:outline-none