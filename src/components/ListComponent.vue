<script setup lang="ts">
import list from '@/recipes.json';
import { useAppStore } from "@/stores/appState";
import gsap from "gsap";

const store = useAppStore();

function handleItemClick(index: number, title: string, event: Event) {
  store.setTitle("");
  store.setDetails(true);

  const listItem = document.querySelectorAll("li")[index];
  const itemRect = listItem.getBoundingClientRect();

  const mainTitle = document.querySelector("#main-title");
  const titleRect = mainTitle?.getBoundingClientRect();

  if (titleRect) {
    const deltaX = titleRect.left - itemRect.left;
    const deltaY = titleRect.top - itemRect.top;
    gsap.to(event.target, {
      x: deltaX,
      y: deltaY,
      duration: 0.5,
      fontSize: "24px", // Change to target font size if necessary
    });
  }
}

// onMounted(() => {
//   if (activeLink.value) {
//     gsap.set(activeLink.value, { borderBottom: "1px solid black" });
//   }
// });
</script>

<template>
  <TransitionGroup tag="ul">
    <li v-for="(item, index) in list" :key="item.title">
      <a @click="(event) => handleItemClick(index, item.title, event)">{{
        item.title
      }}</a>
    </li>
  </TransitionGroup>
</template>

<style scoped lang="scss">
ul {
  list-style: none;
  padding: 0;

  a {
    font-size: 16px;
    margin: 5px 0;
    cursor: pointer;
    display: inline-block;
    position: relative;
    text-decoration: none;
  }

  a::after {
    content: "";
    position: absolute;
    left: 0;
    bottom: -2px;
    width: 100%;
    height: 2px;
    background: black;
    transform: scaleX(0);
    transform-origin: right;
    transition: transform 0.5s ease;
  }

  a:hover::after {
    transform: scaleX(1);
    transform-origin: left;
  }
}
</style>
