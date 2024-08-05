import { defineStore } from 'pinia'
import type { Dish } from '~/types/dish';

export const useAppStore = defineStore("appStore", () => {
  const currentSection = ref(0);
  const selectedDish = ref<Dish | null>(null)
  
  return { currentSection, selectedDish };
});
