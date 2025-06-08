import { gsap } from 'gsap';
import { CustomEase } from 'gsap/CustomEase';
import { CustomBounce } from 'gsap/CustomBounce';
import { CustomWiggle } from 'gsap/CustomWiggle';

import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { ScrollSmoother } from 'gsap/ScrollSmoother';
import { ScrollToPlugin } from 'gsap/ScrollToPlugin';

import { GSDevTools } from 'gsap/GSDevTools';

export function initAnimations() {
  gsap.registerPlugin(
    GSDevTools,
    ScrollTrigger,
    ScrollSmoother,
    ScrollToPlugin,
    CustomEase,
    CustomBounce,
    CustomWiggle,
  );

  console.log(window.matchMedia('(prefers-reduced-motion: reduce)').matches);
  console.log(window.matchMedia('(prefers-reduced-motion: no-preference)').matches);

  /*if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) return;*/

  /*let mm = gsap.matchMedia();
  mm.add("(prefers-reduced-motion: no-preference)", () => {
    // Full animation here
  });
  mm.add("(prefers-reduced-motion: reduce)", () => {
    // Reduced or no animation here
  });*/

  /*gsap.to('.noice', {
    scrollTrigger: {
      trigger: '.body',
      start: 'top',
      end: '20%',
      scrub: 0.5,
      markers: true,
    },
    y: 300,
    x: 100,
    opacity: 1,
    ease: 'power1.out',
  });*/
}
