<template>
  <div>
    <ul class="items">
      <li
        class="item"
        v-bind:class="{ disabled: todo.done }"
        v-bind:key="todo.id"
        v-for="todo in todos"
      >
        <p class="button">
          <button
            v-on:click="handleClickDone({ id: todo.id, done: true })"
            v-bind:disabled="todo.done"
          >done</button>
        </p>
        <p class="value">{{todo.value}}</p>
        <p class="dateLabel">{{todo.date}}</p>
      </li>
    </ul>
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


<style scoped>
.items {
  padding: 0;
}
.item {
  display: flex;
  justify-content: space-around;
  margin-bottom: 3px;
  list-style: none;
  font-size: 12px;
}
.item.disabled {
  color: #eee;
}
.item > .button {
  margin: 0px;
}
.item > .value {
  flex: 1 0 auto;
  margin: 0 0 0 10px;
}
.item > .dateLabel {
  margin: 0px;
}
</style>
