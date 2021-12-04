<template>
  <div class="main">
    <h1>Posts</h1>
    <div class="app__btns">
      <my-button
          @click="showDialog"
      >
        Create post
      </my-button>
      <my-select v-model="selectedSort" :options="sortOptions">

      </my-select>
    </div>

    <my-dialog v-model:show="dialogVisible">
      <post-form
          @create="createPost"
      />
    </my-dialog>

    <post-list
        :posts="sortedPosts"
        @remove="removePost"
        v-if="!isPostLoading"
    />
    <div v-else>Loading posts...</div>
  </div>
</template>

<script>
import PostForm from "./components/PostForm";
import PostList from "./components/PostList";
import MyDialog from "./components/UI/MyDialog";
import MyButton from "./components/UI/MyButton";
import axios from "axios";
import MySelect from "./components/UI/MySelect";

export default {
  components: {
    MySelect,
    MyButton,
    MyDialog,
    PostList,
    PostForm
  },

  data() {
    return {
      posts: [],
      dialogVisible: false,
      isPostLoading: true,
      selectedSort: '',
      sortOptions: [
        {value: 'title', name: 'By name'},
        {value: 'body', name: 'By description'},
        {value: 'id', name: 'By ID'}
      ]
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
        // this.isPostLoading = false;
      } catch (e) {
        alert('Error: ' + e)
      } finally {
        this.isPostLoading = false;
      }
    }
  },
  mounted() {
    this.fetchPosts(); // load post as app opens
  },
  computed: {
    sortedPosts() {
      //make a new array
      return [...this.posts].sort((a,b) => a[this.selectedSort]?.localeCompare(b[this.selectedSort]))
    }
  },
  // watch: {
  //   selectedSort(newValue) {
  //     this.posts.sort((a,b) => {
  //       return a[this.selectedSort].localeCompare(b[this.selectedSort]);
  //     })
  //   }
  // }
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

.app__btns {
  display: flex;
  justify-content: space-between;
}
</style>