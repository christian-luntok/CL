document.addEventListener("DOMContentLoaded", function() {
  "use strict"
    const scroll = new LocomotiveScroll({
        el: document.querySelector('[data-scroll-container]'),
        smooth: true,
        repeat: true,
        getSpeed: true,
        lerp: .08,
        smoothMobile: false,
        firefoxMultiplier: 50
      });
});