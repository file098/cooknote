import { defineStore } from 'pinia'

export const useAppStore = defineStore("appStore", () => {
  const currentSection = ref(0);

  return { currentSection };
});
