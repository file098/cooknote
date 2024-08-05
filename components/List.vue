<script setup lang="ts">
import type { Dish } from "~/types/dish";
import { useScroll } from "../compostables/useScroll";
import recipes from "../recipes.json";

const { scrollRight } = useScroll();

function handleClick(dish: Dish) {
  const appStore = useAppStore();
  appStore.selectedDish = dish;
  scrollRight();
}

const recipeList = recipes as Array<Dish>;
</script>

<template>
  <div class="list-wrapper">
    <ul>
      <li v-for="dish in recipeList" :key="dish.id" @click="handleClick(dish)">
        {{ dish.name }}
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
