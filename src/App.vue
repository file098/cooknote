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
        <svg
          width="24px"
          height="24px"
          viewBox="0 0 1024 1024"
          fill="#000000"
          class="icon"
          version="1.1"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M669.6 849.6c8.8 8 22.4 7.2 30.4-1.6s7.2-22.4-1.6-30.4l-309.6-280c-8-7.2-8-17.6 0-24.8l309.6-270.4c8.8-8 9.6-21.6 2.4-30.4-8-8.8-21.6-9.6-30.4-2.4L360.8 480.8c-27.2 24-28 64-0.8 88.8l309.6 280z"
            fill="currentColor"
          />
        </svg>
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
