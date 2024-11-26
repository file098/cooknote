<template>
  <div class="photo-container">
    <div v-for="(image, index) in images" :key="index" class="photo-wrapper">
      <div v-if="!loadedImages[index]" class="placeholder"></div>
      <img
        :src="image"
        :alt="`Photo ${index + 1}`"
        @load="handleImageLoad(index)"
        :class="['photo', { loaded: loadedImages[index] }]"
      />
    </div>
  </div>
</template>

<script setup>
import { ref } from "vue";

const images = [
  "https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Ftse3.mm.bing.net%2Fth%3Fid%3DOIP.4_jq_CRBWboirDOf-OBFyAHaHa%26pid%3DApi&f=1&ipt=21fc50362c515b35363ece225fdd45320c262602fb79944f1be320a62c53568d&ipo=images",
  "https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Ftse3.mm.bing.net%2Fth%3Fid%3DOIP.4_jq_CRBWboirDOf-OBFyAHaHa%26pid%3DApi&f=1&ipt=21fc50362c515b35363ece225fdd45320c262602fb79944f1be320a62c53568d&ipo=images",
  "https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Ftse3.mm.bing.net%2Fth%3Fid%3DOIP.4_jq_CRBWboirDOf-OBFyAHaHa%26pid%3DApi&f=1&ipt=21fc50362c515b35363ece225fdd45320c262602fb79944f1be320a62c53568d&ipo=images",
];

const loadedImages = ref(new Array(images.length).fill(false));

const handleImageLoad = (index) => {
  loadedImages.value[index] = true;
};
</script>

<style scoped lang="scss">
.photo-container {
  display: flex;
  justify-content: space-between;
  margin: 1rem 2rem;

  & .photo-wrapper {
    position: relative;
    width: 25%;

    & .placeholder {
      position: absolute;
      top: 0;
      left: 0;
      width: 100%;
      height: 100%;
      background-color: #e0e0e0;
      animation: pulse 1.5s infinite;
    }

    & .photo {
      width: 100%;
      height: auto;
      opacity: 0;
      transition: opacity 0.5s ease-in-out;

      &.loaded {
        opacity: 1;
      }
    }
  }
}

@keyframes pulse {
  0% {
    background-color: #e0e0e0;
  }
  50% {
    background-color: #f0f0f0;
  }
  100% {
    background-color: #e0e0e0;
  }
}
</style>
