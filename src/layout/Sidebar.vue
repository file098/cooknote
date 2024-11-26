<script setup>
import Ingredients from "@/components/Ingredients.vue";
import Info from "@/components/Info.vue";
import Macros from "@/components/Macros.vue";
import { useAppStore } from "@/stores/appStore";

const appStore = useAppStore();
</script>

<template>
  <aside>
    <button @click="appStore.selectedRecipe = null">Home</button>
    <div id="list">
      <Info />
      <Ingredients />
      <Macros />
    </div>
  </aside>
</template>

<style scoped lang="scss">
aside {
  height: 100%;
  border-right: 1px solid darkgray;

  & #list {
    display: flex;
    flex-flow: column;
    padding: 20px;
  }
}
</style>
