---
layout: ../../layouts/PostLayout.astro
title: How to calculate reading time with JavaScript
date: 05 Sept 2022
compareDate: 05/09/2022
description: Awesome function you can use to calculate reading time for your blogs
category: playgrounds
tags: Playground
---

I always see these "<strong>x</strong> min read" reading time on articles I see within the net. 

Here's a quick function on how you can do these too!

<br>

```js   
function calculateReadingTime() {
    // Gets the article class container containing the content.
    const content = document.getElementById("logs-container").innerText;

    // Average adult words per minute.
    const avgWpm = 238; 

    // Count the words for the content
    const words = content.trim().split(/\s+/).length;

    // Calculate total time takes to read the content based on the average words per minute of an adult.
    const totalTime = Math.ceil(words / avgWpm);
    
    document.getElementById("time-container").innerText = totalTime + " min read";
}

calculateReadingTime();
```
<br>

This function gets the all the characters within your content container, which you'll need to count how many words there are in the content. 

After that you'll have to divide the content based on the average words per minute of an adult [(based it on this study)](https://www.sciencedirect.com/science/article/abs/pii/S0749596X19300786#:~:text=Abstract,and%20260%20wpm%20for%20fiction.). And that should be it! 


