<template>
  <div class="main">
    <form @submit.prevent>
      <h4>Create post</h4>
      <input
          :value="title"
          @input="title = $event.target.value"
          class="input"
          type="text"
          placeholder="Title">
      <input
          :value="body"
          @input="body = $event.target.value"
          class="input"
          type="text"
          placeholder="Description">
      <button
          @click="createPost"
          class="btn">
        Create
      </button>
    </form>
    <div class="post" v-for="post in posts">
      <div><strong>Title</strong> {{ post.title }}</div>
      <div><strong>Description</strong> {{ post.body }}</div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      posts: [
        {id: 1, title: 'JS', body: "Description"},
        {id: 2, title: 'JS 2', body: "Description 2"},
        {id: 3, title: 'JS 3', body: "Description 3"},
        {id: 3, title: 'JS 4', body: "Description 4"},
      ],
      title: '',
      body: '',

    }
  },
  methods: {
    createPost() {
      const newPost = {
        id: Date.now(),
        title: this.title,
        body: this.body
      }

      this.posts.push(newPost);

      this.title = '';
      this.body = '';
    }
  }
}
</script>

<style>
body {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

.post {
  margin-top: 15px;
  padding: 15px;
  border: 2px solid teal;
}

.main {
  margin: 0 auto;
  width: 75%;
}

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