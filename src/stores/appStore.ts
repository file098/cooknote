import type { Recipe } from '@/utils/models/recipe.model';
import { defineStore } from 'pinia';
import { ref } from 'vue';

export const useAppStore = defineStore('appStore', () => {
  const selectedRecipe = ref<Recipe | null>(null);

  return {
    selectedRecipe,
  }
})
