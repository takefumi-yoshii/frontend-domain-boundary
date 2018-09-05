<template>
  <div class='root'>
    <todos-vue />
  </div>
</template>


<script lang='ts'>
import Vue from 'vue'
import TodosVue from './Todos.vue'
const components = { TodosVue }
</script>


<style scoped>
.root {
  padding: 10px;
  box-sizing: border-box;
}
.root > * {
  margin-bottom: 10px;
}
</style>
