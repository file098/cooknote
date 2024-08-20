<script setup lang="ts">
import type { Dish } from "~/types/dish";

const appStore = useAppStore();
const selectedDish = computed<Dish | null>(() => appStore.selectedDish);
</script>

<template>
  <div class="ingredient fade-in">
    <div
      v-for="ingredient in selectedDish?.ingredients"
      class="ingredient__row"
    >
      <span class="ingredient__name">{{ ingredient.name }}</span>
      <span class="ingredient__quantity"
        ><strong>{{ ingredient.quantity }}</strong></span
      >
    </div>
  </div>
</template>

<style lang="scss" scoped>
.ingredient {
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 1rem;
  margin: 2rem 0;

  &__row {
    display: grid;
    grid-template-columns: 1fr auto; /* Name takes available space, quantity is auto-sized */
    align-items: center;
    border-bottom: 1px solid grey;
  }

  &__name {
    justify-self: start; /* Aligns name to the start of the grid cell */
  }

  &__quantity {
    justify-self: end; /* Aligns quantity to the end of the grid cell */
  }
}
</style>
