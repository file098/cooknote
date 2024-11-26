<template>
  <div class="ingredients">
    <h3>Ingredients</h3>
    <label for="servings">Number of servings:</label>
    <select id="servings" v-model="servings">
      <option v-for="n in 10" :key="n" :value="n">{{ n }}</option>
    </select>
    <ul>
      <li v-for="ingredient in ingredients" :key="ingredient.id">
        {{ ingredient.name }} - {{ ingredient.quantity }}
      </li>
    </ul>
  </div>
</template>

<script setup lang="ts">
import { ref } from "vue";

const ingredients = [
  { id: 1, name: "Flour", quantity: "2 cups" },
  { id: 2, name: "Sugar", quantity: "1 cup" },
  { id: 3, name: "Butter", quantity: "1/2 cup" },
  { id: 4, name: "Eggs", quantity: "2" },
  { id: 5, name: "Milk", quantity: "1 cup" },
];

const servings = ref(1);
</script>

<style scoped>
.ingredients {
  font-family: Arial, sans-serif;
}

h2 {
  color: #333;
}

ul {
  list-style-type: none;
  padding: 0;
}

li {
  padding: 5px 0;
}
</style>
