<template>
  <div class="wrapper">
    <h1 id="main-title">Title</h1>
    <ul class="list">
      <li>Item 1</li>
      <li>Item 2</li>
      <li>Item 3</li>
      <li>Item 4</li>
    </ul>
  </div>
</template>

<script setup lang="ts">
import { onMounted } from "vue";

// TypeScript types for DOM elements
type HTMLElementEvent<T extends HTMLElement> = Event & {
  target: T;
};

onMounted(() => {
  const title = document.getElementById("main-title") as HTMLElement;
  const listItems = document.querySelectorAll(
    ".list li"
  ) as NodeListOf<HTMLElement>;

  listItems.forEach((item) => {
    item.addEventListener("click", (event: MouseEvent) => {
      const clickedItem = event.target as HTMLElement;

      // Get the position of the title and the clicked item
      const titleRect = title.getBoundingClientRect();
      const itemRect = clickedItem.getBoundingClientRect();

      // Calculate the translation distance
      const translateX = titleRect.left - itemRect.left;
      const translateY = titleRect.top - itemRect.top;

      // Set the position and transform properties
      clickedItem.classList.add("moving");
      clickedItem.style.transform = `translate(${translateX}px, ${translateY}px)`;
      clickedItem.style.zIndex = "1000";

      // After the animation ends, replace the title with the clicked item text
      setTimeout(() => {
        title.textContent = clickedItem.textContent;
        clickedItem.style.display = "none";
        clickedItem.style.transform = "";

        // After replacing the title, fade out all list items in order
        fadeOutListItems(listItems);
      }, 500); // The timeout duration should match the CSS transition duration
    });
  });

  // Function to fade out all list witems in order
  function fadeOutListItems(items: NodeListOf<HTMLElement>) {
    items.forEach((item, index) => {
      setTimeout(() => {
        item.style.transition = "opacity 0.5s ease";
        item.style.opacity = "0";
      }, index * 300); // Delay each item's fade out
    });
  }
});
</script>

<style scoped>
.wrapper {
  display: flex;
  justify-content: space-evenly;
  align-items: center;
}

h1,
.list {
  margin: 0;
  padding: 0;
}

.list {
  list-style: none;
  padding: 0;
}

.list li {
  cursor: pointer;
  padding: 10px;
  transition: all 0.5s ease;
}

.moving {
  position: absolute;
  transition: transform 0.5s ease, opacity 0.5s ease;
}
</style>
