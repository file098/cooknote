<script setup lang="ts">
import type { Dish } from "~/types/dish";

const appStore = useAppStore();
const selectedDish = computed<Dish | null>(() => appStore.selectedDish);
</script>

<template>
  <div class="fade-in">
    <ul>
      <li v-for="step in selectedDish?.procedure" :key="selectedDish?.id">
        {{ step }}
      </li>
    </ul>
  </div>
</template>

<style>
.procedure {
  display: none;
  &.fade-in {
    display: block;
  }
}
</style>
