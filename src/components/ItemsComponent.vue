<template>
  <div class="items__wrapper">
    <span v-for="index in 6" :key="index">item {{ index }}</span>
  </div>
</template>

<style lang="scss">
.items__wrapper {
  display: grid;
  grid-template-columns: 1fr 1fr;
}
</style>
