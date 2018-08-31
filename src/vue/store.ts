import Vue from 'vue'
import Vuex from 'vuex'
import * as VuexAggregate from 'vuex-aggregate'
import * as Timer from './modules/Timer'
import * as Todos from './modules/Todos'
import { wait } from '../helpers/promise'

// ______________________________________________________
//
// @ Store

Vue.use(Vuex)

export const store = new Vuex.Store({
  modules: {
    [Timer.namespace]: Timer.moduleFactory(),
    [Todos.namespace]: Todos.moduleFactory({
      name: 'VUE_TODOS'
    })
  }
})

VuexAggregate.use(store) // Required

// ______________________________________________________
//
// @ Services

async function runTimerService() {
  while (true) {
    await wait()
    Timer.commits.tick(new Date())
  }
}
Timer.commits.tick(new Date())
runTimerService()
