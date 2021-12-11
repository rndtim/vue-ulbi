<template>
  <div class="main">
    <navbar></navbar>
    <router-view></router-view>
  </div>
</template>

<script>
import Navbar from "./components/UI/Navbar";
export default {
  components: {Navbar}
}
</script>

<style scoped>
body {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

.main {
  margin: 0 auto;
  width: 75%;
}
</style>