// src/animations.js
import { gsap } from "gsap";
import { ScrollToPlugin } from "gsap/ScrollToPlugin";
import { CSSPlugin } from "gsap/CSSPlugin";

// Register the plugins
gsap.registerPlugin(ScrollToPlugin, CSSPlugin);

export function createScrollTimeline(
  mainRef: gsap.TweenTarget,
  backButtonRef: gsap.TweenTarget,
  index: number
) {
  const tl = gsap.timeline();

  tl.to(mainRef, {
    duration: 1,
    scrollTo: { x: index * window.innerWidth, autoKill: false },
    ease: "power4.inOut",
  });

  if (index > 0) {
    tl.to(
      backButtonRef,
      {
        duration: 0.3,
        opacity: 1,
        x: 0,
        ease: "power2.out",
      },
      1
    );
  } else {
    tl.to(
      backButtonRef,
      {
        duration: 0.3,
        opacity: 0,
        x: -20,
        ease: "power2.in",
      },
      1
    );
  }

  return tl;
}

export function initializeGSAP(
  mainRef: gsap.TweenTarget,
  backButtonRef: gsap.TweenTarget
) {
  gsap.set(mainRef, { scrollTo: { x: 0 } });
  gsap.set(backButtonRef, { opacity: 0, x: -20 });
}
