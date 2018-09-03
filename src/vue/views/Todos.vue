<template>
  <div class='todos'>
    <h1>{{name}}</h1>
    <p>{{dateLabel}}</p>
    <p>{{todosCountStatusLabel}}</p>
    <p>{{bounderyOutsideCountLabel}}</p>
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
import * as Timer from '../models/Timer'
import * as Todos from '../models/Todos'
const computed = {
  ...Timer.mapState({
    dateLabel: 'dateLabel'
  }),
  ...Todos.mapState({
    name: 'name',
    inputValue: 'input'
  }),
  ...Todos.mapGetters({
    todosCountStatusLabel: 'getTodosCountStatusLabel',
    toggleVisibleItemsBtnLabel: 'getToggleVisibleItemsBtnLabel',
    bounderyOutsideCountLabel: 'getBounderyOutsideCountLabel'
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


<style>
.todos {
  padding: 20px;
  border-radius: 5px;
  border: 2px solid;
}
.todos > h1 {
  margin-bottom: 10px;
  font-size: 2rem;
  font-weight: bolder;
}
.todos > p {
  margin-bottom: 10px;
}
</style>
