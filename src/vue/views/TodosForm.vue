<template>
  <form v-on:submit="handleSubmit">
    <input
      type="text"
      :value="inputValue"
      v-on:change="e => handleInputChange(e.target.value)"
    />
    <button>addTodo</button>
  </form>
</template>


<script lang='ts'>
import Vue from 'vue'
import * as Todos from '../models/Todos'
const computed = {
  ...Todos.mapGetters({
    inputValue: 'getInputValue'
  })
}
const methods = {
  ...Todos.mapMutations({
    handleInputChange: 'setInputValue',
    handleSubmit: 'addTodo'
  }),
  handleSubmit(e: Event) {
    e.preventDefault()
    Todos.commits.addTodo()
  }
}
export default Vue.extend({ computed, methods })
</script>
