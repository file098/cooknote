<script setup lang="ts">
import { useScroll } from "./assets/animations/composables/useScroll";
import recipes from "../recipes.json";

const { scrollRight } = useScroll();

interface Dish {
  id: number;
  name: string;
  ingredients: Array<string>;
  procedure: Array<string>;
}

function handleClick() {
  scrollRight();
}

const recipeList = recipes as Array<Dish>;
</script>

<template>
  <div class="list-wrapper">
    <ul>
      <li v-for="recipe in recipeList" :key="recipe.name" @click="handleClick">
        {{ recipe.name }}
      </li>
    </ul>
  </div>
</template>

<style scoped lang="scss">
.list-wrapper {
  overflow-y: auto;
  & ul {
    list-style-type: none;
    & li {
      margin-bottom: 1rem;
      cursor: pointer;
      width: fit-content;
      a {
        color: inherit;
        text-decoration: none;
      }
    }
  }
}
</style>
