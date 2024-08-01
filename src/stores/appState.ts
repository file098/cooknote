import { ref } from "vue";
import { defineStore } from "pinia";

export const useAppStore = defineStore("appState", () => {
  const currentSection = ref(0);

  return { currentSection };
});
