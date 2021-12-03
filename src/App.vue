<template>
  <div class="main">
    <h1>Posts</h1>
    <my-button
    @click="showDialog"
    >
      Create post
    </my-button>
    <my-dialog v-model:show="dialogVisible">
      <post-form
          @create="createPost"
      />
    </my-dialog>

    <post-list
        :posts="posts"
        @remove="removePost"
    />
  </div>
</template>

<script>
import PostForm from "./components/PostForm";
import PostList from "./components/PostList";
import MyDialog from "./components/UI/MyDialog";
import MyButton from "./components/UI/MyButton";

export default {
  components: {
    MyButton,
    MyDialog,
    PostList,
    PostForm
  },

  data() {
    return {
      posts: [
        {id: 1, title: 'JS', body: "Description"},
        {id: 2, title: 'JS 2', body: "Description 2"},
        {id: 3, title: 'JS 3', body: "Description 3"},
        {id: 4, title: 'JS 4', body: "Description 4"},
      ],
      dialogVisible: false,
    }
  },
  methods: {
    createPost(post) {
      this.posts.push(post);
      this.dialogVisible = false;
    },
    removePost(post) {
      this.posts = this.posts.filter(p => p.id !== post.id)
    },
    showDialog() {
      this.dialogVisible = true;
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