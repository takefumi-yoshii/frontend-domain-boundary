<template>
  <form v-on:submit="handleSubmit">
    <input
      type="text"
      v-model="input"
      v-on:change="e => handleInputChange(e.target.value)"
    />
    <button>addTodo</button>
  </form>
</template>


<script lang='ts'>
import Vue from 'vue'
import * as Todos from '../modules/Todos'
const computed = {
  ...Todos.mapGetters({
    input: 'getInputValue'
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
