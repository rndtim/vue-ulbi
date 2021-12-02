<template>
  <form @submit.prevent>
    <h4>Create post</h4>
    <input
        v-model="post.title"
        class="input"
        type="text"
        placeholder="Title">
    <input
        v-model="post.body"
        class="input"
        type="text"
        placeholder="Description">
    <button
        @click="createPost"
        class="btn">
      Create
    </button>
  </form>
</template>

<script>
export default {
  data() {
    return {
      post: {
        title: '',
        body: ''
      }
    }
  },
  methods: {
    createPost() {
      this.post.id = Date.now();
      this.$emit('create', this.post);
      this.post = {
        title: '',
        body: ''
      }
    }
  }
}
</script>

<style scoped>

.input {
  padding: 10px 15px;
  border: 1px solid deepskyblue;
  margin-top: 10px;
}

form {
  display: flex;
  flex-direction: column;
}

.btn {
  margin-top: 10px;
  align-self: flex-start;
  background-color: lightgreen;
  padding: 10px 15px;
  border: none;
  border-radius: 5px;
  box-shadow: 5px 2px 2px green;
}
</style>