<template>
  <Input placeholder="Search recipes..." />
  <div
    ref="rolodexRef"
    class="rolodex"
    @wheel.prevent="rotateRolodex"
    @touchstart="handleTouchStart"
    @touchmove="handleTouchMove"
    @touchend="handleTouchEnd"
  >
    <ul>
      <li v-for="recipe in recipes" @click="selectRecipe(recipe)">{{ recipe.title }}</li>
    </ul>
  </div>
</template>

<script setup lang="ts">
import Input from "@/components/Input.vue";
import { useAppStore } from "@/stores/appStore";
import type { Recipe } from "@/utils/models/recipe.model";
import gsap from "gsap";
import { onMounted, onUnmounted, ref, type Ref } from "vue";


const recipes: Ref<Recipe[]> = ref([
  {
    title: "Spaghetti Carbonara",
    ingredients: ["Spaghetti", "Eggs", "Pancetta", "Parmesan cheese", "Black pepper"],
    instructions: "Boil spaghetti. Cook pancetta. Mix eggs and cheese. Combine all with spaghetti and pancetta. Season with pepper."
  },
  {
    title: "Chicken Curry",
    ingredients: ["Chicken", "Onions", "Tomatoes", "Garlic", "Ginger", "Spices", "Coconut milk"],
    instructions: "Cook onions, garlic, and ginger. Add spices and chicken. Add tomatoes and coconut milk. Simmer until chicken is cooked."
  },
  {
    title: "Caesar Salad",
    ingredients: ["Romaine lettuce", "Croutons", "Parmesan cheese", "Caesar dressing", "Chicken (optional)"],
    instructions: "Chop lettuce. Add croutons and cheese. Toss with dressing. Add grilled chicken if desired."
  },
  {
    title: "Chocolate Cake",
    ingredients: ["Flour", "Sugar", "Cocoa powder", "Baking powder", "Eggs", "Milk", "Butter"],
    instructions: "Mix dry ingredients. Add wet ingredients. Bake at 350°F for 30 minutes."
  },
  {
    title: "Pancakes",
    ingredients: ["Flour", "Sugar", "Baking powder", "Eggs", "Milk", "Butter", "Maple syrup"],
    instructions: "Mix dry ingredients. Add wet ingredients. Cook on griddle. Serve with syrup."
  },
  {
    title: "Margarita Pizza",
    ingredients: ["Pizza dough", "Tomato sauce", "Mozzarella cheese", "Basil", "Olive oil"],
    instructions: "Roll out dough. Spread sauce. Add cheese and basil. Bake at 450°F for 15 minutes."
  },
  {
    title: "Tacos",
    ingredients: ["Tortillas", "Ground beef", "Lettuce", "Tomatoes", "Cheese", "Sour cream", "Salsa"],
    instructions: "Cook beef. Assemble tacos with lettuce, tomatoes, cheese, sour cream, and salsa."
  },
  {
    title: "Chicken Alfredo",
    ingredients: ["Fettuccine", "Chicken", "Cream", "Parmesan cheese", "Garlic", "Butter"],
    instructions: "Cook pasta. Cook chicken. Make sauce with cream, cheese, garlic, and butter. Combine all."
  },
  {
    title: "Burgers",
    ingredients: ["Ground beef", "Buns", "Lettuce", "Tomatoes", "Cheese", "Ketchup", "Mustard"],
    instructions: "Form patties. Cook burgers. Assemble with lettuce, tomatoes, cheese, ketchup, and mustard."
  },
  {
    title: "Sushi",
    ingredients: ["Rice", "Nori", "Fish", "Vegetables", "Soy sauce", "Wasabi", "Ginger"],
    instructions: "Cook rice. Assemble sushi with fish and vegetables. Serve with soy sauce, wasabi, and ginger."
  },
])

const search = ref("");
const rolodexRef = ref<HTMLElement | null>(null);
let slides: NodeListOf<Element>;
let currentIndex = 0;
let isAnimating = false;

let startY = 0;
let lastY = 0;
const touchThreshold = 50;
const touchTimeThreshold = 300;
let touchStartTime = 0;
const visibleElements =  6;

onMounted(() => {
  if (rolodexRef.value) {
    slides = rolodexRef.value.querySelectorAll("li");
    setupRolodex();
    setupMobileSupport();
    setupKeyboardNavigation();
  }
});

onUnmounted(() => {
  window.removeEventListener("keydown", handleKeyDown);

});

function setupRolodex() {
  const slideCount = recipes.value.length;
  const radius = calculateRadius();

  slides.forEach((slide, index) => {
    const distance = Math.min(
      Math.abs((index - currentIndex + slideCount) % slideCount),
      Math.abs((currentIndex - index + slideCount) % slideCount)
    );

    gsap.set(slide, {
      position: "absolute",
      top: "50%",
      left: "50%",
      width: "100%",
      opacity: distance > 2 ? 0 : 1,
      backfaceVisibility: "hidden",
      rotationX: index * (360 / slideCount),
      transformOrigin: "50% 50%",
      transformStyle: "preserve-3d",
      transform: `translate(-50%, -50%)
                  rotateX(${index * (360 / slideCount)}deg)
                  translateZ(${radius}px)`,
      zIndex: slideCount - Math.abs(index - currentIndex),
    });
  });
}

function calculateRadius(): number {
  if (!rolodexRef.value) return 0;

  const slideHeight = rolodexRef.value.offsetHeight / visibleElements;
  const slideCount = slides.length;
  return (slideHeight * slideCount) / (2 * Math.PI);
}

function rotateRolodex(event: WheelEvent | { deltaY: number }) {
  if (isAnimating) return;

  const direction = "deltaY" in event ? (event.deltaY > 0 ? -1 : 1) : 0;
  currentIndex = (currentIndex + direction + slides.length) % slides.length;
  rotateToIndex(currentIndex);
}

function rotateToIndex(index: number) {
  const slideCount = slides.length;
  const radius = calculateRadius();

  isAnimating = true;

  gsap.to(slides, {
    duration: 0.5,
    opacity: (i) => {
      const distance = Math.min(
        Math.abs((i - index + slideCount) % slideCount),
        Math.abs((index - i + slideCount) % slideCount)
      );
      return distance > 2 ? 0 : 1;
    },
    transform: (i) => {
      const rotationAngle = ((i - index + slideCount) % slideCount) * (360 / slideCount);
      return `translate(-50%, -50%)
              rotateX(${rotationAngle}deg)
              translateZ(${radius}px)`;
    },
    zIndex: (i) => slideCount - Math.abs(i - index),
    ease: "power2.inOut",
    onComplete: () => {
      isAnimating = false;
    },
  });
}

// Mobile Touch Support
function setupMobileSupport() {
  if (!rolodexRef.value) return;

  rolodexRef.value.addEventListener("touchstart", handleTouchStart, { passive: false });
  rolodexRef.value.addEventListener("touchmove", handleTouchMove, { passive: false });
  rolodexRef.value.addEventListener("touchend", handleTouchEnd);
}

function handleTouchStart(event: TouchEvent) {
  event.preventDefault();
  startY = event.touches[0].clientY;
  lastY = startY;
  touchStartTime = Date.now();
}

function handleTouchMove(event: TouchEvent) {
  event.preventDefault();
  const currentY = event.touches[0].clientY;
  lastY = currentY;
}

function handleTouchEnd(event: TouchEvent) {
  const touchEndTime = Date.now();
  const deltaY = lastY - startY;

  // Check if touch was quick enough and crossed threshold
  if (
    Math.abs(deltaY) > touchThreshold &&
    touchEndTime - touchStartTime < touchTimeThreshold
  ) {
    const direction = deltaY > 0 ? 1 : -1;
    currentIndex = (currentIndex + direction + slides.length) % slides.length;
    rotateToIndex(currentIndex);
  }
}

// Keyboard Navigation
function handleKeyDown(event: KeyboardEvent) {
  if (event.key === "ArrowDown") {
    rotateRolodex({ deltaY: 100 });
  } else if (event.key === "ArrowUp") {
    rotateRolodex({ deltaY: -100 });
  }
}

function setupKeyboardNavigation() {
  window.addEventListener("keydown", handleKeyDown);
}

function selectRecipe(recipe: Recipe) {
  const visibleSlides = Array.from(slides).filter((_, i) => {
    const distance = Math.min(
      Math.abs((i - currentIndex + slides.length) % slides.length),
      Math.abs((currentIndex - i + slides.length) % slides.length)
    );
    return distance <= 2;
  });

  gsap.to(visibleSlides, {
    duration: 0.5,
    y: window.innerHeight,
    opacity: 0,
    stagger: 0.05,
    ease: "power2.in",
    onComplete: () => {
      const appStore = useAppStore();
      appStore.setActiveRecipe(recipe);
    }
  });
}
</script>

<style scoped lang="scss">
.rolodex {
  position: relative;
  width: 100%;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  overflow: hidden;
  transform-style: preserve-3d;
  touch-action: none;

  &::before,
  &::after {
    content: "";
    position: absolute;
    left: 0;
    right: 0;
    height: 40%;
    z-index: 10;
    pointer-events: none;
  }

  &::before {
    top: 0;
    background: linear-gradient(
      to bottom,
      rgba(255, 255, 255, 1) 0%,
      rgba(255, 255, 255, 0.8) 20%,
      rgba(255, 255, 255, 0) 100%
    );
  }

  &::after {
    bottom: 0;
    background: linear-gradient(
      to top,
      rgba(255, 255, 255, 1) 0%,
      rgba(255, 255, 255, 0.8) 20%,
      rgba(255, 255, 255, 0) 100%
    );
  }

  ul {
    list-style: none;
    padding: 0;
    margin: 0;
    width: 100%;
    transform-style: preserve-3d;

    li {
      cursor: pointer;
      position: absolute;
      width: 100%;
      text-align: center;
      font-size: 32px;
      letter-spacing: 5px;
      backface-visibility: hidden;
      user-select: none;
      transform-style: preserve-3d;
    }
  }

  @media (max-width: 768px) {
    li {
      font-size: 24px;
      letter-spacing: 3px;
    }
  }
}
</style>
