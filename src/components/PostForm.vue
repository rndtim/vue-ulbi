<template>
  <form @submit.prevent>
    <h4>Create post</h4>
    <my-input
        v-model="post.title"
        type="text"
        placeholder="Title"/>
    <my-input
        v-model="post.body"
        type="text"
        placeholder="Description"/>
    <my-button
        @click="createPost"
        style="align-self: flex-start; margin-top: 15px;"
    >
      Create
    </my-button>
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
      if (this.post.title === '' || this.post.body === '')
        alert('U have to fill the fields');
      else {
        this.$emit('create', this.post);
        this.post = {
          title: '',
          body: ''
        }
      }
    }
  }
}
</script>

<style scoped>

h4 {
  margin: 10px;
}

form {
  display: flex;
  flex-direction: column;
}


</style>