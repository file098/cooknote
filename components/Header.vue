<script setup lang="ts">
import { watch } from 'vue';
import { useScroll } from "~/compostables/useScroll";
import { useAppStore } from "~/stores/appStore";
import { gsap } from "gsap";
const { $TextPlugin } = useNuxtApp();

const { scrollBack } = useScroll();
const appStore = useAppStore();

const originalTitle = "Cooknote";

function handleBack() {
  scrollBack();
}

watch(() => appStore.selectedDish, (newDish) => {
  gsap.registerPlugin($TextPlugin);
  gsap.to('.title', {
    duration: 1,
    text: newDish?.name || originalTitle,
  });
});
</script>

<template>
  <header>
    <button id="back-button" @click="handleBack">
      <img src="/assets/icons/back.svg" />
    </button>
    <h1 class="title">{{ originalTitle }}</h1>
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
