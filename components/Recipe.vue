<script setup lang="ts">
import type { Dish } from "~/types/dish";

const appStore = useAppStore();
const selectedDish = computed<Dish | null>(() => appStore.selectedDish);
</script>

<template>
  <div class="items__wrapper fade-in">
    <span class="item" v-for="ingredient in selectedDish?.ingredients" :key="selectedDish?.id">
      {{ ingredient }}
    </span>
  </div>
</template>

<style lang="scss" scoped>
.items__wrapper {
  display: none;
  &.fade-in {
    display: flex;
    flex-direction: column;
  }
}
</style>
