<template>
  <div class="post">
    <div>
      <div><strong>{{post.id}}</strong></div>
      <div><strong>Title</strong> {{ post.title }}</div>
      <div><strong>Description</strong> {{ post.body }}</div>
    </div>
    <div class="post__btns">
      <my-button
          @click="$router.push(`/posts/${post.id}`)"
          style="background-color: #4586ff">
        Open
      </my-button>
      <my-button
          @click="$emit('remove', post)"
          style="background-color: #f53c3c">
        Delete
      </my-button>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    post: {
      type: Object,
      required: true
    }
  }
}
</script>

<style scoped>
.post {
  margin-top: 15px;
  padding: 15px;
  border: 2px solid teal;
  display: flex;
  align-items: center;
  justify-content: space-between;
}

.post__btns {
  display: flex;
}
</style>