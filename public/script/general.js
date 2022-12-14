document.addEventListener("DOMContentLoaded", function() {
  "use strict";

    async function clCountVisits() {
        let response = await fetch("https://api.countapi.xyz/hit/cjluntok.com/visits");
        let data = await response.json();
        return data;
    }
    clCountVisits().then(
        data => document.getElementById('visit-counts').innerText = data.value
    )

    var themeToggleDarkIcon = document.getElementById('theme-toggle-dark-icon');
    var themeToggleLightIcon = document.getElementById('theme-toggle-light-icon');

    // Change the icons inside the button based on previous settings
    if (localStorage.theme === 'dark' || (!('theme' in localStorage) && window.matchMedia('(prefers-color-scheme: dark)').matches)) {
        themeToggleLightIcon.classList.remove('hidden');
    } else {
        themeToggleDarkIcon.classList.remove('hidden');
    }

    var themeToggleBtn = document.getElementById('theme-toggle');

    themeToggleBtn.addEventListener('click', function() {
        // toggle icons inside button
        themeToggleDarkIcon.classList.toggle('hidden');
        themeToggleLightIcon.classList.toggle('hidden');

        // if set via local storage previously
        if (localStorage.theme ) {
            if (localStorage.theme  === 'light') {
                document.documentElement.classList.add('dark');
                localStorage.theme = 'dark';
            } else {
                document.documentElement.classList.remove('dark');
                localStorage.theme = 'light';
            }
        } else {
            if (document.documentElement.classList.contains('dark')) {
                document.documentElement.classList.remove('dark');
                localStorage.theme = 'light';
            } else {
                document.documentElement.classList.add('dark');
                localStoragetheme = 'dark';
            }
        }
    });

    var mobileMenuBtn = document.getElementById('mobile-menu-btn');
    var mobileMenu = document.getElementById('mobile-menu-burger');
    var mobileMenuClose = document.getElementById('mobile-menu-close');

    mobileMenuBtn.addEventListener('click', function() {
        // toggle icons inside button
        mobileMenu.classList.toggle('hidden');
        mobileMenuClose.classList.toggle('hidden');
    });

});