gsap.registerPlugin(ScrollTrigger);

// 1. Split Text Animation for Hero
const heroHeading = new SplitType(".font-headline", {
  types: "chars,words",
});
gsap.from(heroHeading.chars, {
  opacity: 0,
  y: 50,
  rotateX: -90,
  stagger: 0.02,
  duration: 1.5,
  ease: "expo.out",
});

// 2. Stacking Cards Effect (The Arsenal Section)
// We apply this to the grid items in your Arsenal
const cards = gsap.utils.toArray(
  ".md\\:col-span-2, .bg-surface-container, .bg-surface-container-low",
);
cards.forEach((card, i) => {
  gsap.from(card, {
    scrollTrigger: {
      trigger: card,
      start: "top bottom-=100",
      toggleActions: "play none none reverse",
    },
    opacity: 0,
    y: 100,
    duration: 1,
    ease: "power4.out",
  });
});

// 3. Horizontal Scroll / Stacking for "The Collective"
// This creates that "sticky" feeling as you scroll through the team
gsap.to(".md\\:col-span-7, .md\\:col-span-5", {
  scrollTrigger: {
    trigger: ".grid-cols-12",
    start: "top center",
    end: "bottom center",
    scrub: 1,
  },
  scale: 0.95,
  opacity: 0.8,
  stagger: 0.5,
});
