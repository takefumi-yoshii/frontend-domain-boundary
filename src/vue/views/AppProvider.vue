<template>
  <div class='root'>
    <todos-vue />
    <summary-vue />
  </div>
</template>


<script lang='ts'>
import Vue from 'vue'
import TodosVue from './Todos.vue'
import SummaryVue from './Summary.vue'
import * as Summary from '../models/Summary'
const components = { TodosVue, SummaryVue }
export default Vue.extend({ components })
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
