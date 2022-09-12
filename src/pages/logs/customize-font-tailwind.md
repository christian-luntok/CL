---
layout: ../../layouts/PostLayout.astro
title: How to customize your fonts in Tailwind
date: 12 Sept 2022
compareDate: 12/09/2022
description: Customize your fonts in Tailwind with these few tips. 
category: playgrounds
tags: Playground, TailwindCSS
---

Tailwind comes with 3 default font classes, these are <code>.font-serif</code>, <code>.font-sans</code> and <code>.font-mono</code>. Though sometimes you'll need to add your own custom font families, or customize the existing font classes.

Within the tailwind's config file (<code>tailwind.config.js</code>) you'll be able to do this by using the <strong>extend</strong> functionality.

```js
// Tailwind Config file

module.exports = {
	theme: {
		extend: {
                fontFamily: {
                    'sans': ['Roboto', 'sans-serif'],
                    'serif': ['freight-display-pro'],
                    'mono': ['Roboto', 'sans-serif']
            },
        },
    }
}

```

The <code>sans, serif and mono</code> lines overwrites Tailwind's default <code>.font-(sans,serif,mono)</code> class with your own selected font but then falls back to the second parameter's font if your custom font doesn't load.

If you want to create your custom font class, add a new line and Tailwind will create a new class that has that font stack.

```js
module.exports = {
	theme: {
		extend: {
                fontFamily: {
                    'sans': ['Roboto', 'sans-serif'],
                    'serif': ['freight-display-pro'],
                    'mono': ['Roboto', 'sans-serif'],
                    'custom': ['custom', 'sans-serif']
            },
        },
    }
}
```

The <code>custom</code> line will create a new class called <code>.font-custom</code> that loads the font you've added.

When you rebuild your Tailwind file, the changes will then reflect.