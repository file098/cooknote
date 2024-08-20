<script setup lang="ts">
import { gsap } from "gsap";
import type { Dish } from "~/types/dish";

const appStore = useAppStore();
const selectedDish = computed<Dish | null>(() => appStore.selectedDish);

// watch(selectedDish, (newSelectedDish) => {
//   // FIXME: it doesnt see the list items
//   gsap.fromTo(
//     ".procedure ol",
//     { opacity: 0, x: 100 },
//     { opacity: 1, x: 0, duration: 1.5, stagger: 0.2 }
//   );
// });
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
