<template>
  <div class='summary'>
    <p>{{dateLabel}}</p>
    <p>{{todosCountStatusLabel}}</p>
    <p>{{bounderyOutsideCountLabel}}</p>
  </div>
</template>


<script lang='ts'>
import Vue from 'vue'
import * as Todos from '../models/Todos'
import * as Summary from '../models/Summary'
const computed = {
  ...Todos.mapGetters({
    todosCountStatusLabel: 'getTodosCountStatusLabel'
  }),
  ...Summary.mapGetters({
    dateLabel: 'getDateLabel',
    bounderyOutsideCountLabel: 'getBounderyOutsideCountLabel'
  })
}

export default Vue.extend({ computed })
</script>


<style scoped>
.summary {
  padding: 20px;
  border-radius: 5px;
  border: 2px solid;
}
.summary > p {
  margin: 5px;
  font-size: 12px;
}
</style>
