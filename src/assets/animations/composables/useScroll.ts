// src/composables/useScroll.js
import { useAppStore } from "@/stores/appState";
import { createScrollTimeline } from "../index";

export function useScroll() {
  const appState = useAppStore();
  function scrollToSection(index: number) {
    appState.currentSection = index;
    createScrollTimeline(index).play();
  }

  function scrollBack() {
    if (appState.currentSection > 0) {
      scrollToSection(appState.currentSection - 1);
    }
  }

  function scrollRight() {
    if (appState.currentSection < 1) {
      scrollToSection(appState.currentSection + 1);
    }
  }

  return {
    scrollToSection,
    scrollBack,
    scrollRight,
  };
}
