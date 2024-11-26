<template>
  <input type="text" class="ghost-input" :placeholder="props.placeholder" />
</template>

<script setup>
const props = defineProps({
    placeholder: String,
});
</script>

<style scoped lang="scss">
.ghost-input {
  display: block;
  font-weight: 300;
  width: 100%;
  font-size: 25px;
  border: 0px;
  outline: none;
  width: 100%;
  -webkit-box-sizing: border-box;
  -moz-box-sizing: border-box;
  box-sizing: border-box;
  color: #4b545f;
  padding: 10px 15px;
  -webkit-transition: all 0.1s ease-in-out;
  -moz-transition: all 0.1s ease-in-out;
  -ms-transition: all 0.1s ease-in-out;
  -o-transition: all 0.1s ease-in-out;
  transition: all 0.1s ease-in-out;
  &:focus {
    border-bottom: 1px solid lightgrey;
  }
}
</style>
