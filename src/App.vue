<script setup lang="ts">
import Sidebar from "@/layout/Sidebar.vue";
import Header from "@/layout/Header.vue";
import Procedure from "@/layout/Procedure.vue";
import Photos from "@/components/Photos.vue";
import Recipes from "@/components/Recipes.vue";
import { useAppStore } from "@/stores/appStore";

const appStore = useAppStore();
</script>

<template>
  <main>
    <Recipes v-if="!appStore.selectedRecipe" />
    <div class="main-content" v-else>
      <Sidebar />
      <section>
        <Photos />
        <Procedure />
        <span id="side-info">{{ appStore.selectedRecipe.name }}</span>
      </section>
    </div>
  </main>
</template>

<style scoped lang="scss">

main {
  display: flex;
  flex-direction: column;
  height: 100vh;
}

.main-content {
  height: 100%;
  display: grid;
  grid-template-columns: 3fr 8fr;

}

#side-info {
  position: fixed;
  bottom: 5px;
  right: 5px;
  writing-mode: vertical-lr;
  transform: rotate(180deg);
}
</style>
