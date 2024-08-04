// src/composables/useScroll.js
import { useAppStore } from "../stores/appStore";
import { createScrollTimeline } from "../assets/animations/index";

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
    if (appStore.currentSection < 1) {
      scrollToSection(appStore.currentSection + 1);
    }
  }

  return {
    scrollToSection,
    scrollBack,
    scrollRight,
  };
}
