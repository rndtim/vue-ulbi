<template>
  <div class="navbar">
    <div @click="$router.push('/')">Vue 3</div>
    <div class="navbar__btns">
      <my-button @click="$router.push('/posts')">Posts</my-button>
      <my-button @click="$router.push('/about')">About</my-button>
      <my-button @click="$router.push('/store')">Store</my-button>
      <my-button @click="$router.push('/composition')">Composition Api</my-button>
    </div>
  </div>
</template>

<script>
export default {}
</script>

<style scoped>
.navbar {
  color: white;
  height: 50px;
  background-color: teal;
  box-shadow: 2px 2px 4px gray;
  display: flex;
  align-items: center;
  padding: 0 15px;
}

.navbar__btns {
  margin-left: auto;
}
</style>