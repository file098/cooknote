// src/composables/useScroll.js
import { ref } from "vue";
import { createScrollTimeline } from "..";

export function useScroll() {
  const currentSection = ref(0);

  function scrollToSection(
    mainRef: { value: any },
    backButtonRef: { value: any },
    index: number
  ) {
    if (mainRef) {
      currentSection.value = index;
      createScrollTimeline(mainRef, backButtonRef, index).play();
    }
  }

  function scrollBack(mainRef: any, backButtonRef: any) {
    if (currentSection.value > 0) {
      scrollToSection(mainRef, backButtonRef, currentSection.value - 1);
    }
  }

  function scrollRight(mainRef: any, backButtonRef: any) {
    if (currentSection.value < 1) {
      scrollToSection(mainRef, backButtonRef, currentSection.value + 1);
    }
  }

  return {
    currentSection,
    scrollToSection,
    scrollBack,
    scrollRight,
  };
}
