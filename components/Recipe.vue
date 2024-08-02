<template>
  <div class="items__wrapper fade-in">
    <span class="item" v-for="index in 6" :key="index">item {{ index }}</span>
  </div>
</template>

<style lang="scss" scoped>
.items__wrapper {
  display: none;
  &.fade-in {
    display: flex;
    flex-direction: column;
  }
}
</style>
