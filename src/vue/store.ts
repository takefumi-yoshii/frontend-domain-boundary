import Vue from 'vue'
import Vuex, { Store } from 'vuex'
import * as VuexAggregate from 'vuex-aggregate'
import * as Timer from './models/Timer'
import * as Todos from './models/Todos'
import { AbstractService } from '../main'
import { TodosPresentST } from '../models/TodosPresent'

// ______________________________________________________
//
// @ Types

interface StoreST {
  timer: Timer.TimerST
  todos: Todos.TodosST
}

// ______________________________________________________
//
// @ Store

Vue.use(Vuex)

export const store: Store<StoreST> = new Vuex.Store({
  modules: {
    [Timer.namespace]: Timer.moduleFactory(),
    [Todos.namespace]: Todos.moduleFactory({
      name: 'VUE_TODOS',
      bounderyOutsideName: 'Redux'
    })
  }
})

VuexAggregate.use(store) // Required

// ______________________________________________________
//
// @ Services

export const VuexService: AbstractService = {
  subscribe: (fn: any) => store.subscribe(fn),
  getStateTodos(): TodosPresentST {
    return store.state.todos
  },
  onChangeBounderyOutside(state: { todos: TodosPresentST }) {
    const itemsLength = state.todos.items.length
    if (itemsLength !== store.state.todos.bounderyOutsideCount) {
      Todos.commits.setBounderyOutsideCount(itemsLength)
    }
  },
  tick(date: Date) {
    Timer.commits.tick(date)
  }
}
