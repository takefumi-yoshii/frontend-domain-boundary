import Vue from 'vue'
import Vuex, { Store } from 'vuex'
import * as VuexAggregate from 'vuex-aggregate'
import * as Timer from './models/Timer'
import * as Todos from './models/Todos'
import * as Summary from './models/Summary'
import { AbstractService } from '../service'
import { TodosPresentST } from '../models/TodosPresent'
import { runService } from './services/Summary'

// ______________________________________________________
//
// @ Types

interface StoreST {
  timer: Timer.TimerST
  todos: Todos.TodosST
  summary: Summary.SummaryST
}

// ______________________________________________________
//
// @ Store

Vue.use(Vuex)

const store: Store<StoreST> = new Vuex.Store({
  modules: {
    [Timer.namespace]: Timer.moduleFactory(),
    [Todos.namespace]: Todos.moduleFactory({
      name: 'VUE_TODOS'
    }),
    [Summary.namespace]: Summary.moduleFactory({
      bounderyOutsideName: 'Redux'
    })
  }
})

VuexAggregate.use(store)

// ______________________________________________________
//
// @ DI Services

runService()

// ______________________________________________________
//
// @ RPC Services

const VuexService: AbstractService = {
  subscribe: (fn: any) => store.subscribe(fn),
  getStateTodos(): TodosPresentST {
    return store.state.todos
  },
  onChangeBounderyOutside(state: { todos: TodosPresentST }) {
    const itemsLength = state.todos.items.length
    if (itemsLength !== store.state.summary.bounderyOutsideCount) {
      Summary.commits.setBounderyOutsideCount(itemsLength)
    }
  },
  tick(date: Date) {
    Timer.commits.tick(date)
  }
}

// ______________________________________________________
//
// @ export

export { StoreST, store, VuexService }
