<template>
  <div class='root'>
    <todos />
  </div>
</template>


<script lang='ts'>
import Vue from 'vue'
import Todos from './Todos.vue'
const components = { Todos }
export default Vue.extend({ components })
</script>


<style>
.root {
  padding: 10px;
  box-sizing: border-box;
}
</style>
