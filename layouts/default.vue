<script setup lang="ts">
useSeoMeta({
  title: "CookNote",
  ogTitle: "CookNote",
  description: "A simple cookbook with my own recipes",
  ogDescription: "A simple cookbook with my own recipes",
  // ogImage: "https://example.com/image.png",
  // twitterCard: "summary_large_image",
});
</script>

<template>
  <div class="container">
    <Header />
    <NuxtPage />
  </div>
</template>

<style scoped lang="scss">
@import "@/assets/main.scss";

.container {
  height: 100vh;
  display: flex;
  flex-direction: column;
}
</style>
