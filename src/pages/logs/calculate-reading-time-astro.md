---
layout: ../../layouts/PostLayout.astro
title: How to calculate reading time with a Remark Plugin on Astro
date: 10 Oct 2022
compareDate: 10/10/2022
description: Awesome function you can use to calculate reading time for your blogs using a remark.
category: playgrounds
tags: Playground
---

Hello, 

Last time I shared a [post(#)](/logs/calculate-reading-time) with a JS function that calculates time which you can manually change.

I've been using markdown to write these logs for the mean time. Using astro I found an easier way to calculate time for your frontmatter. We'll be using [remark plugin(#)](https://github.com/remarkjs/remark) for this.

There's two recommended helper packages for this to work:
* [reading-time(#)](https://www.npmjs.com/package/reading-time) to calculate the time to read the page.
* [mdast-util-to-string(#)](https://www.npmjs.com/package/mdast-util-to-string) to extract all text from your markdown.

```js
npm i reading-time mdast-util-to-string
```

We then apply these packages on a remark plugin file (.mjs):

```js
import getReadingTime from 'reading-time';
import { toString } from 'mdast-util-to-string';

export function remarkReadingTime() {
  return function (tree, { data }) {
    // Gets the Content of the page.
    const contentOnPage = toString(tree);
    // Uses the reading time plugin to calculate the reading time.
    const calculateReadingTime = getReadingTime(contentOnPage);
    // Adding the reading time to a frontmatter data.
    data.astro.frontmatter.readingTime = calculateReadingTime.text;
  };
}
```

Then proceed to apply the remark plugin to your config:

```js
import { defineConfig } from 'astro/config';
import { remarkReadingTime } from './remark-reading-time.mjs';

// https://astro.build/config
export default defineConfig({
  site: 'https://cjluntok.com',
  markdown: {
    syntaxHighlight: 'prism',
    remarkPlugins: [remarkReadingTime],
  }
});
```

Finally you all markdown files will now have a minutes read within your astro markdown files.

```js
---
const { readingTime } = Astro.props.frontmatter;
---

<div class="reading-time text-xs mb-4 text-grey dark:text-white">
    <span>{readingTime}</span>
</div>
```