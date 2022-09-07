---
layout: ../../layouts/PostLayout.astro
title: How to hide elements visually using Tailwind!
date: 07 Sept 2022
compareDate: 07/09/2022
description: How to hide elements visually using Tailwind CSS!
category: playgrounds
tags: Playground, Tailwind
---

I just did this to make my "Skip to Content" button work, this is one of those times where you want to make a section of your website visually hidden, but not absolutely hidden for a screen reader that someone with disability would use to browse your site!

For these type of things, Tailwind's got the class for you! Tailwind's <code>.sr-only</code> class makes the element hidden to your eyes but readily available for screen readers and accessibility tools.

For example, here's how you can add a label for an element, a button or a link containing an icon!

```html
<!-- Adding a label for an H1 logo -->
<h1>
    <svg><!-- SVG LOGO GOES HERE--></svg>
    <span class="sr-only">The Name of the website</span>
</h1>

<!-- Adding a label for button with an icon -->
<button>
    <svg><!-- ICON GOES HERE --></svg>
    <span class="sr-only">Add new Item</span>
</button>

<!-- Adding a label for a link with an icon -->
<a>
    <svg><!-- ICON GOES HERE --></svg>
    <span class="sr-only">Link Title</span>
</a>
``` 

