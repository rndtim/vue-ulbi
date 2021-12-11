<template>
  <div class="dialog" v-if="show" @click="hideDialog">
    <div @click.stop class="dialog__content">
      <slot></slot>
    </div>
  </div>
</template>

<script>
import toggleMixin from "../../mixins/toggleMixin";

export default {
  name: 'my-dialog',
  mixins: [toggleMixin]
}
</script>

<style scoped>
  .dialog {
    position: fixed;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background-color: rgba(0,0,0, 0.5);
    display: flex;
  }

  .dialog__content {
    margin: auto;
    background-color: #fff;
    min-height: 100px;
    min-width: 400px;
    border-radius: 12px;
    padding: 20px;
  }
</style>