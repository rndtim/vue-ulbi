<template>
  <div class="main">
    <h1>Posts</h1>
    <my-input
        v-model="searchQuery"
        placeholder="Search"
    />
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
        :posts="sortedPostsSearch"
        @remove="removePost"
        v-if="!isPostLoading"
    />
    <div v-else>Loading posts...</div>

    <!--    отслеживаемая область-->
    <div v-intersection="loadMorePosts" class="observer">

    </div>
  </div>
</template>

<script>
import PostForm from "@/components/PostForm";
import PostList from "@/components/PostList";
import MyDialog from "@/components/UI/MyDialog";
import MyButton from "@/components/UI/MyButton";
import axios from "axios";
import MySelect from "@/components/UI/MySelect";
import MyInput from "@/components/UI/MyInput";

export default {
  components: {
    MyInput,
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
      ],
      searchQuery: '',
      page: 1,
      limit: 10,
      totalPages: 0,
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
        const response = await axios.get('https://jsonplaceholder.typicode.com/posts', {
          params: {
            _page: this.page,
            _limit: this.limit
          }
        });
        //post per page
        this.totalPages = Math.ceil(response.headers['x-total-count'] / this.limit);
        this.posts = response.data;
        // this.isPostLoading = false;
      } catch (e) {
        alert('Error: ' + e)
      } finally {
        this.isPostLoading = false;
      }
    },

    async loadMorePosts() {
      try {
        this.page += 1;
        const response = await axios.get('https://jsonplaceholder.typicode.com/posts', {
          params: {
            _page: this.page,
            _limit: this.limit
          }
        });

        //post per page
        this.totalPages = Math.ceil(response.headers['x-total-count'] / this.limit);
        this.posts = [...this.posts, ...response.data];
        // this.isPostLoading = false;
      } catch (e) {
        alert('Error: ' + e)
      } finally {
        this.isPostLoading = false;
      }
    }
  },
  mounted() {
    // load post as app opens
    this.fetchPosts();

    // console.log(this.$refs.observer);
    // const options = {
    //   rootMargin: '0px',
    //   threshold: 1.0
    // }
    // const callback = (entries, observer) => {
    //   if (entries[0].isIntersecting && this.page < this.totalPages) {
    //     this.loadMorePosts();
    //   }
    // };
    // const observer = new IntersectionObserver(callback, options);
    // observer.observe(this.$refs.observer);
  },
  computed: {
    sortedPosts() {
      //make a new array
      return [...this.posts].sort((a, b) => a[this.selectedSort]?.localeCompare(b[this.selectedSort]))
    },
    sortedPostsSearch() {
      return this.sortedPosts.filter(post => post.title.toLowerCase().includes(this.searchQuery))
    }
  },
  watch: {
    // selectedSort(newValue) {
    //   this.posts.sort((a,b) => {
    //     return a[this.selectedSort].localeCompare(b[this.selectedSort]);
    //   })
    // }
    // page() {
    //   this.fetchPosts()
    // }
  }
}
</script>

<style>


.app__btns {
  display: flex;
  justify-content: space-between;
}

.page__wrapper {
  display: flex;
  margin-top: 15px;
}

.page {
  border: 1px solid black;
  padding: 5px 10px;
  cursor: pointer;
  margin-right: 5px;
  margin-bottom: 10px;
}

.current-page {
  border: 2px solid lightcoral;
}

.observer {
  height: 30px;
  /*background-color: green;*/
  margin-bottom: 10px;
}
</style>