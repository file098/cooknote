import { gsap } from "gsap";
import { ScrollToPlugin } from "gsap/ScrollToPlugin";

export function useNavigation() {
  gsap.registerPlugin(ScrollToPlugin);

  const currentSection = ref<string>("list");

  const navigateTo = (sectionId: string) => {
    gsap.to(window, { duration: 1, scrollTo: `#${sectionId}` });
  };

  return {
    navigateTo,
    currentSection,
  };
}
