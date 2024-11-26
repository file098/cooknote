import type { Recipe } from '@/utils/models/recipe.model';
import { defineStore } from 'pinia';
import { ref } from 'vue';

export const useAppStore = defineStore('appStore', () => {

  const setActiveRecipe = (recipe: Recipe) => selectedRecipe.value = recipe;

  const selectedRecipe = ref<Recipe | null>(null);

  return {
    selectedRecipe,
    setActiveRecipe
  }
})
