<template>
  <div class='todos'>
    <h1>{{name}}</h1>
    <p>
      <button v-on:click="handleClickToggle">
        {{toggleVisibleItemsBtnLabel}}
      </button>
    </p>
    <todos-form />
    <todos-items />
  </div>
</template>


<script lang='ts'>
import Vue from 'vue'
import TodosForm from './TodosForm.vue'
import TodosItems from './TodosItems.vue'
import * as Todos from '../models/Todos'
const computed = {
  ...Todos.mapState({
    name: 'name',
    inputValue: 'input'
  }),
  ...Todos.mapGetters({
    toggleVisibleItemsBtnLabel: 'getToggleVisibleItemsBtnLabel'
  })
}
const methods = {
  ...Todos.mapMutations({
    handleClickToggle: 'toggleShowAll'
  })
}
const components = {
  TodosForm,
  TodosItems
}
export default Vue.extend({ computed, methods, components })
</script>


<style scoped>
.todos {
  padding: 20px;
  border-radius: 5px;
  border: 2px solid;
}
.todos > h1 {
  margin-bottom: 10px;
  font-size: 20px;
  font-weight: bolder;
}
.todos > p {
  margin: 5px;
  font-size: 12px;
}
</style>
