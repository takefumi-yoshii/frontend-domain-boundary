<template>
  <div>
    <div v-for="todo in todos" v-bind:key="todo.id">
      <p>{{todo.value}}</p>
      <button
        v-on:click="handleClickDone({ id: todo.id, done: true })"
        v-if="!todo.done"
      >
        done
      </button>
    </div>
  </div>
</template>


<script lang='ts'>
import Vue from 'vue'
import * as Todos from '../models/Todos'
const computed = {
  ...Todos.mapGetters({
    todos: 'getVisibleItems'
  })
}
const methods = {
  ...Todos.mapMutations({
    handleClickDone: 'setItemDone'
  })
}
export default Vue.extend({ computed, methods })
</script>
