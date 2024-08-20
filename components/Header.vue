<script setup lang="ts">
import { useScroll } from "~/compostables/useScroll";
import { useAppStore } from "~/stores/appStore";
const { scrollBack } = useScroll();
const appStore = useAppStore();

function handleBack() {
  scrollBack();
}
</script>

<template>
  <header>
    <button id="back-button" @click="handleBack">
      <img src="/assets/icons/back.svg" />
    </button>
    <h1 class="title">
      {{ appStore.selectedDish ? `${appStore.selectedDish.name}` : "CookNote" }}
    </h1>
  </header>
</template>

<style scoped lang="scss">
@import "~/assets/main.scss";

header {
  display: flex;
  align-items: center;
  padding: 20px;
  position: relative;
  @include theme("color", $primary-text-color);

  h1 {
    flex-grow: 1;
    text-align: center;
    margin: 0;
  }

  & #back-button {
    @include icon-button();

    & {
      opacity: 0;
      background: none;
      border: none;
    }
  }
}
</style>
