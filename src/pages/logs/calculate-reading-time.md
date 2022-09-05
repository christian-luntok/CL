---
layout: ../../layouts/PostLayout.astro
title: How to calculate reading time with JavaScript
date: 05 Sept 2022
compareDate: 05/09/2022
description: Awesome function you can use to calculate reading time for your blogs
category: playgrounds
tags: Playground, JS
---

I always see these "<strong>x</strong> min read" reading time on articles I see within the net. 

It took me a while to figure out how to do this but here's a quick function on how you can do these too!

```   function calculateReadingTime() {
        // Gets the article class container containing the content.
        const content = document.getElementById("logs-container").innerText;

        // Average adult words per minute.
        const avgWpm = 225; 

        // Count the words for the content
        const words = content.trim().split(/\s+/).length;

        // Calculate total time takes to read the content based on the average words per minute of an adult.
        const totalTime = Math.ceil(words / avgWpm);
        
        document.getElementById("time-container").innerText = totalTime + " min read";
    }
    calculateReadingTime();
