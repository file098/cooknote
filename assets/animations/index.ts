// src/animations.js
import { gsap } from "gsap";
import { ScrollToPlugin } from "gsap/ScrollToPlugin";
import { TextPlugin } from "gsap/TextPlugin";
import { CSSPlugin } from "gsap/CSSPlugin";
import { useAppStore } from "~/stores/appStore";

// Register the plugins
gsap.registerPlugin(ScrollToPlugin, CSSPlugin);

export function createScrollTimeline(index: number) {
  const main = "#main";
  const backButton = "#back-button";

  const tl = gsap.timeline();

  tl.to(main, {
    duration: 1,
    scrollTo: { x: index * window.innerWidth, autoKill: false },
    ease: "power4.inOut",
  });

  // scroll right
  if (index > 0) {
    tl.to(
      backButton,
      {
        duration: 0.3,
        opacity: 1,
        x: 0,
        ease: "power2.out",
      },
      1
    );
    tl.fromTo(
      ".fade-in",
      { opacity: 0, x: 100 },
      { opacity: 1, x: 0, duration: 0.5, stagger: 0.2 },
      "-=0.5"
    );
    //scroll left
  } else {
    tl.to(
      backButton,
      {
        duration: 0.3,
        opacity: 0,
        x: -20,
        ease: "power2.in",
        onComplete: () => {
          const appStore = useAppStore();
          appStore.selectedDish = null;
        },
      },
      1
    );
  }

  return tl;
}

export function initializeGSAP() {
  const main = "#main";
  const backButton = "#back-button";
  gsap.set(main, { scrollTo: { x: 0 } });
  gsap.set(backButton, { opacity: 0, x: -20 });
}
