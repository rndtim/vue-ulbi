<template>
    <button class="btn">
      <slot></slot>
    </button>
</template>

<script>
export default {
  name: 'my-button'
}
</script>

<style scoped>
.btn {
  background-color: lightgreen;
  padding: 10px 15px;
  border: none;
  border-radius: 5px;
  box-shadow: 5px 2px 2px gray;
  margin: 10px 15px 10px 0;
}
</style>