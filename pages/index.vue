<script setup lang="ts">
import { ref } from 'vue';
import { gsap } from 'gsap'

definePageMeta({
  title: 'Notes',
});
const appStore = useAppStore();
const baseX = appStore.currentSection * 100;
const translateX = ref(baseX);

function translateLeft() {
  appStore.decreaseSection()
  // Move left: Increase translateX by 100
  if (translateX.value <= baseX) {
    gsap.to('#main', { x: `+=100vw`, duration: 0.5, ease: 'power4.out' });
    translateX.value += 100;
  }
}

function translateRight() {
  appStore.increaseSection()
  // Move right: Decrease translateX by 100
  gsap.to('#main', { x: `-=100vw`, duration: 0.5, ease: 'power4.out' });
  translateX.value -= 100;
}
</script>

<template>
  <main id="main" :style="{ transform: `translateX(-${baseX}vw)` }">
    <section>
      <AddRecipe />
    </section>
    <section>
      <List />
    </section>
    <section>
      <Items />
      <Procedure />
    </section>
  </main>

  <div class="buttons">
    <button @click="translateLeft">Left</button>
    <button @click="translateRight">Right</button>
  </div>
</template>

<style scoped lang="scss">
.buttons {
  position: fixed;
  bottom: 20px;
  left: 50%;
  transform: translateX(-50%);
  display: flex;
  gap: 10px;

  button {
    padding: 10px 20px;
    cursor: pointer;
  }
}
</style>
