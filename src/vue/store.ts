import Vue from 'vue'
import Vuex, { Store } from 'vuex'
import * as VuexAggregate from 'vuex-aggregate'
import * as Timer from './models/Timer'
import * as Todos from './models/Todos'
import { AbstractService } from '../main'

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
  tick(date: Date) {
    Timer.commits.tick(date)
  },
  changeBounderyOutside(itemsLength: number) {
    Todos.commits.setBounderyOutsideCount(itemsLength)
  }
}
