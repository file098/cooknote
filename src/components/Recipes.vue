<template>
  <div class="recipe-container" @wheel="handleWheel">
    <div class="rolodex">
      <div
        v-for="item in visibleItems"
        :key="`${item.id}-${item.position}`"
        class="recipe-item"
        :class="getPositionClass(item.position)"
        @click="appStore.selectedRecipe = item"
      >
        <div :key="item.id">{{ item.name }}</div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref, computed } from "vue";
import { useAppStore } from "../stores/appStore";

const appStore = useAppStore();

const recipes = [
  { id: 1, name: "Spaghetti Bolognese" },
  { id: 2, name: "Chicken Curry" },
  { id: 3, name: "Beef Stroganoff" },
  { id: 4, name: "Pancakes" },
  { id: 5, name: "Chocolate Cake" },
];

const activeIndex = ref(0);
const isScrolling = ref(false);

const visibleItems = computed(() => {
  const items = [];
  const totalItems = recipes.length;

  for (let i = -2; i < 3; i++) {
    let index = activeIndex.value + i;
    if (index < 0) index = totalItems + index;
    if (index >= totalItems) index = index - totalItems;

    items.push({
      ...recipes[index],
      position: i,
    });
  }

  return items;
});

const handleWheel = (e: WheelEvent) => {
  if (isScrolling.value) return;

  isScrolling.value = true;
  if (e.deltaY > 0) {
    activeIndex.value = (activeIndex.value + 1) % recipes.length;
  } else {
    activeIndex.value = (activeIndex.value - 1 + recipes.length) % recipes.length;
  }

  setTimeout(() => {
    isScrolling.value = false;
  }, 200);
};

const getPositionClass = (position: number) => {
  return {
    "position-center": position === 0,
    "position-up-1": position === -1,
    "position-up-2": position === -2,
    "position-down-1": position === 1,
    "position-down-2": position === 2,
  };
};
</script>

<style scoped lang="scss">
.rolodex {
  position: absolute;
  left: 0;
  right: 0;
  top: 50%;
  transform: translateY(-50%);
}

.recipe-item {
  position: absolute;
  left: 50%;
  width: 100%;
  transform: translateX(-50%);
  text-align: center;
  transition: all 0.3s ease-in-out;
}

.position-center {
  transform: translate(-50%, 0);
  font-size: 2rem;
  font-weight: bold;
  color: black;
  opacity: 1;
  z-index: 10;
}

.position-up-1 {
  transform: translate(-50%, -5rem);
  font-size: 1.25rem;
  color: #6b7280;
  opacity: 0.6;
}

.position-up-2 {
  transform: translate(-50%, -10rem);
  font-size: 1.25rem;
  color: #6b7280;
  opacity: 0.2;
}

.position-down-1 {
  transform: translate(-50%, 5rem);
  font-size: 1.25rem;
  color: #6b7280;
  opacity: 0.6;
}

.position-down-2 {
  transform: translate(-50%, 10rem);
  font-size: 1.25rem;
  color: #6b7280;
  opacity: 0.2;
}

#search {
  width: 100%;
  padding: 0.5rem;
  font-size: 1rem;
  border-bottom: 1px solid #ccc;
  border-radius: 0.25rem;
  margin-bottom: 1rem;
  background: transparent;
}
</style>
