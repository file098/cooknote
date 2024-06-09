<script setup lang="ts">
import { ref } from "vue";
import { useAppStore } from "@/stores/appState";
const items = ref([
  { title: "Enchiladas Verdes" },
  { title: "Creamy Tuscan Chicken with Sun-Dried Tomatoes and Spinach" },
  { title: "Pad Thai" },
  { title: "Roasted Vegetable and Quinoa Salad with Lemon-Herb Vinaigrette" },
  { title: "Ratatouille" },
  { title: "Moussaka" },
  { title: "Beef Wellington" },
  { title: "Grilled Salmon with Honey-Dijon Glaze and Roasted Asparagus" },
]);

const store = useAppStore();

function handleItemClick(title: string) {
  store.setTitle(title);
  store.setDetails(true);
}
</script>

<template>
  <ul>
    <li v-for="item in items" :key="item.title">
      <a @click="handleItemClick(item.title)">{{ item.title }}</a>
    </li>
  </ul>
</template>

<style scoped lang="scss">
ul {
  list-style: none;
  padding: 0;
}
</style>
