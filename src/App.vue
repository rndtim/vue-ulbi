<template>
  <div class="main">
    <h1>Posts</h1>
    <my-button
    @click="showDialog"
    >
      Create post
    </my-button>
    <my-button @click="fetchPosts">
      Get Posts from Api
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
import axios from "axios";

export default {
  components: {
    MyButton,
    MyDialog,
    PostList,
    PostForm
  },

  data() {
    return {
      posts: [],
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
    },

    async fetchPosts() {
        try {
          const response = await axios.get('https://jsonplaceholder.typicode.com/posts?_limit=10');
          this.posts = response.data;
        }
        catch (e){
          alert('Error: ' + e)
        }
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