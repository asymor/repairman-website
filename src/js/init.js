"use strict";

import { putSvg } from "/src/js/svg.js";
import { switchElements } from "./anim/navSwitch";
import { menuAnimation } from "./anim/menuAnimation";
import { slider } from "./anim/slider";
import { typeWriter } from "./anim/typeWriter";
import { revealSections } from "./anim/reveal";
import { popUpRequest } from "./anim/popup";
import { form } from "./form";
import { applyAnim } from "./anim/applyAnim";
import { scroll } from "./anim/scroll";
import { leafletMap } from "./map";
import { switchTestimonials } from "./anim/switchTestimonials";

// Preloader

window.addEventListener("load", function () {
  document.body.classList.add("stop--scrolling");
  setTimeout(function () {
    document
      .querySelector(".snipper__wrapper")
      .classList.add("snipper__wrapper--hidden");
    document.body.classList.remove("stop--scrolling");
  }, 300);

  // Typewriter

  typeWriter();
});

const init = function () {
  leafletMap();
  // SVG

  putSvg();

  // Navbar for mobile

  switchElements();

  // Application animation

  applyAnim();

  // Menu fade animation
  menuAnimation();

  // Slider

  slider();
  // Reveal sections

  revealSections();

  // Pop-up menu

  popUpRequest();

  // Form

  form();

  // Scroll into view

  scroll();

  // Testimonial switch
  switchTestimonials();
};

init();
