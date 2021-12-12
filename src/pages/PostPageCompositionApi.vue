<template>
  <div class="main">
    <h1>Posts</h1>
    <my-input
        v-model="searchQuery"
        placeholder="Search"
    />
    <div class="app__btns">
      <my-button
      >
        Create post
      </my-button>
      <my-select v-model="selectedSort" :options="sortOptions">

      </my-select>
    </div>

    <my-dialog v-model:show="dialogVisible">
      <post-form
      />
    </my-dialog>

    <post-list
        :posts="sortedPostsSearch"
        v-if="!isPostLoading"
    />
    <div v-else>Loading posts...</div>

  </div>
</template>

<script>
import PostForm from "@/components/PostForm";
import PostList from "@/components/PostList";
import MyDialog from "@/components/UI/MyDialog";
import MyButton from "@/components/UI/MyButton";
import MySelect from "@/components/UI/MySelect";
import MyInput from "@/components/UI/MyInput";
import usePosts from "../hooks/usePosts";
import useSortedPosts from "../hooks/useSortedPosts";
import useSortedPostsSearch from "../hooks/useSortedPostsSearch";

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
      dialogVisible: false,
      sortOptions: [
        {value: 'title', name: 'By name'},
        {value: 'body', name: 'By description'},
        {value: 'id', name: 'By ID'}
      ],
    }
  },

  setup(props) {
    const {posts, isPostLoading, totalPages} = usePosts(10)
    const {sortedPosts, selectedSort} = useSortedPosts(posts)
    const {searchQuery, sortedPostsSearch} = useSortedPostsSearch(sortedPosts)

    return {
      posts,
      isPostLoading,
      totalPages,
      sortedPosts,
      selectedSort,
      searchQuery,
      sortedPostsSearch
    }
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