export function initAnimations() {
  console.log(window.matchMedia('(prefers-reduced-motion: reduce)').matches);
  console.log(window.matchMedia('(prefers-reduced-motion: no-preference)').matches);
}
