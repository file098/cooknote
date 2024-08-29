import { defineStore } from 'pinia'
import type { Dish } from '~/types/dish';

export const useAppStore = defineStore("appStore", () => {
  const currentSection = ref(1);

  const increaseSection = () => {
    if (currentSection.value < 2) {
      currentSection.value++;
    }
  };

  const decreaseSection = () => {
    if (currentSection.value > 0) {
      currentSection.value--;
    }
  };

  const selectedDish = ref<Dish | null>(null)
  
  return { currentSection, selectedDish, increaseSection, decreaseSection };
});