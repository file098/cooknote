<script setup lang="ts">
import { gsap } from "gsap";
import type { Dish } from "~/types/dish";

const appStore = useAppStore();
const selectedDish = computed<Dish | null>(() => appStore.selectedDish);


onUpdated(() => {
  gsap.fromTo(
    ".procedure ol li",
    { opacity: 0, y: 100 },
    { opacity: 1, y: 0, duration: 0.5, stagger: 0.2 },
    "-=0.1"
  );
})
</script>

<template>
  <div class="procedure">
    <ol>
      <li class="step" v-for="step in selectedDish?.procedure">
        {{ step }}
      </li>
    </ol>
  </div>
</template>

<style scoped lang="scss">
.procedure {
  & ol {
    list-style-position: inside;
    margin: 0 auto;
    padding: 0;
    text-align: center;
    width: fit-content;

    & li {
      margin-left: 0;
      text-align: left;
    }
  }
}
</style>
