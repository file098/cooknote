<script setup lang="ts">
import { useScroll } from "~/compostables/useScroll";
import { useAppStore } from "~/stores/appStore";
const { scrollBack } = useScroll();
const appStore = useAppStore();
</script>

<template>
  <header>
    <button id="back-button" @click="scrollBack">
      <img src="/assets/icons/back.svg" />
    </button>
    <h1 class="title">{{ appStore.selectedDish?.name }}</h1>
  </header>
</template>

<style scoped lang="scss">
@import "../assets/theme";

header {
  display: flex;
  align-items: center;
  padding: 20px;
  position: relative;
  @include theme("", $primary-text-color);

  h1 {
    flex-grow: 1;
    text-align: center;
    margin: 0;
  }

  & #back-button {
    position: absolute;
    left: 20px;
    padding: 10px 20px;
    cursor: pointer;
    opacity: 0;
    background: none;
    border: none;
    @include theme("color", $primary-text-color);
  }
}
</style>
