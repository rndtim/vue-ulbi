<template>
  <div class="main">
    <post-form
      @create="createPost"
    />
    <post-list
        :posts="posts"
        />
  </div>
</template>

<script>
import PostForm from "./components/PostForm";
import PostList from "./components/PostList";

export default {
  components: {
    PostList,
    PostForm
  },

  data() {
    return {
      posts: [
        {id: 1, title: 'JS', body: "Description"},
        {id: 2, title: 'JS 2', body: "Description 2"},
        {id: 3, title: 'JS 3', body: "Description 3"},
        {id: 3, title: 'JS 4', body: "Description 4"},
      ]
    }
  },
  methods: {
    createPost(post){
      this.posts.push(post)
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

.main {
  margin: 0 auto;
  width: 75%;
}

</style>