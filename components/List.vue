<script setup lang="ts">
import { useNavigation } from "~/compostables/useNavigation";
import type { Dish } from "~/types/dish";

const recipeList = ref<Dish[]>([]);
const error = ref<string | null>(null);

try {
  const { data, error: fetchError } = await useFetch("/api/dishes");
  if (fetchError.value) {
    error.value = fetchError.value.message || "Failed to fetch dishes";
  } else {
    if (data.value && "data" in data.value) {
      recipeList.value = (data.value as any).data as Dish[];
    }
  }
} catch (e: any) {
  error.value = e.message || "An unexpected error occurred";
}

async function handleClick(dish: Dish) {
  const appStore = useAppStore();
  appStore.selectedDish = dish;
  const { navigateTo } = useNavigation();
  navigateTo("items");
}
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
