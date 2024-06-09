<script setup lang="ts">
import { ref } from "vue";
import { useAppStore } from "./stores/appState";
import ListComponent from "./components/ListComponent.vue";

const store = useAppStore();
const selectedItem = ref<string | null>(null);

function handleItemClick(title: string) {
  selectedItem.value = title;
}
</script>

<template>
  <main>
    <transition name="fade" mode="out-in">
      <span id="main-title" :key="store.title">{{ store.title }}</span>
    </transition>
    <section>
      <ListComponent @item-click="handleItemClick" />
    </section>
  </main>
</template>

<style scoped lang="scss">
#main-title {
  font-size: xx-large;
  cursor: pointer;
  margin-left: 2rem;
  justify-self: start;
}
</style>
