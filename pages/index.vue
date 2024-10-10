<script setup lang="ts">

definePageMeta({
  title: "Notes",
});
</script>

<template>
  <main id="main">
    <section id="add-recipe">
      <AddRecipe />
    </section>
    <section id="list">
      <List />
    </section>
    <section id="items">
      <Items />
    </section>
    <section id="procedure">
      <Procedure />
    </section>
  </main>
</template>

