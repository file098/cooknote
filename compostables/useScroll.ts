import { gsap } from "gsap";
import { ScrollToPlugin } from "gsap/ScrollToPlugin";
import { CSSPlugin } from "gsap/CSSPlugin";
import { useAppStore } from "~/stores/appStore";

// Register the plugins
gsap.registerPlugin(ScrollToPlugin, CSSPlugin);

export function createScrollTimeline(index: number) {
  const main = "#main";
  const backButton = "#back-button";
  const appStore = useAppStore();

  const tl = gsap.timeline();

  // Scroll to the target index
  tl.to(main, {
    duration: 1,
    scrollTo: { x: index * window.innerWidth, autoKill: false },
    ease: "power4.inOut",
    onUpdate: () => {
      // Dynamically update scroll position on window resize
      const newIndex = index * window.innerWidth;
      gsap.to(main, { scrollTo: { x: newIndex, autoKill: false }, overwrite: true });
    }
  });

  // Scroll right: Show back button and fade in elements
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
  } else {
    // Scroll left: Hide back button and reset state
    tl.to(
      backButton,
      {
        duration: 0.3,
        opacity: 0,
        x: -20,
        ease: "power2.in",
        onComplete: () => {
          appStore.selectedDish = null;
        },
      },
      1
    );
  }

  return tl;
}

export function useScroll() {
  const appStore = useAppStore();

  function scrollToSection(index: number) {
    appStore.currentSection = index;
    createScrollTimeline(index).play();
  }

  function scrollBack() {
    if (appStore.currentSection > 0) {
      scrollToSection(appStore.currentSection - 1);
    }
  }

  function scrollRight() {
    if (appStore.currentSection < 2) {
      scrollToSection(appStore.currentSection + 1);
    }
  }

  return {
    scrollToSection,
    scrollBack,
    scrollRight,
  };
}
