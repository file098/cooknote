<script setup>
import { initializeGSAP } from "@/assets/animations";
import { useScroll } from "@/assets/animations/composables/useScroll";
import { onMounted } from "vue";
import ListComponent from "./components/ListComponent.vue";
import ProcedureComponent from "./components/ProcedureComponent.vue";
import RecipeComponent from "./components/RecipeComponent.vue";

const { scrollBack } = useScroll();

onMounted(() => {
  initializeGSAP();
});
</script>

<template>
  <div class="container">
    <header>
      <button id="back-button" @click="() => scrollBack()">
        <img src="@/assets/icons/back.svg" />
      </button>
      <h1 class="title">Title</h1>
    </header>
    <main id="main">
      <div class="sections">
        <section>
          <ListComponent />
        </section>
        <section>
          <RecipeComponent />
          <ProcedureComponent />
        </section>
      </div>
    </main>
  </div>
</template>

<style scoped lang="scss">
@import "@/assets/main.scss";

.container {
  height: 100vh;
  display: flex;
  flex-direction: column;
}

header {
  display: flex;
  align-items: center;
  padding: 20px;
  position: relative;
  @include theme("color", $primary-text-color);
}

.title {
  flex-grow: 1;
  text-align: center;
  margin: 0;
}

main {
  flex: 1;
  overflow: hidden;
}

.sections {
  display: flex;
  width: 200vw;
  height: 100%;
}

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

#back-button {
  position: absolute;
  left: 20px;
  padding: 10px 20px;
  cursor: pointer;
  opacity: 0;
  background: none;
  border: none;
  @include theme("color", $primary-text-color);
}
</style>
