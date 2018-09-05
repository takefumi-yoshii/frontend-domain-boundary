import { fromState, fromGetters, fromMutations } from 'vuex-aggregate'
import { TimerST, TimerModel, TimerMT } from '../../models/TimerBase'

const namespace = 'timer'

// ______________________________________________________
//
// @ State

const { mapState } = fromState(TimerModel(), namespace)

// ______________________________________________________
//
// @ Mutations

const { commits, mapMutations, mutationTypes } = fromMutations(TimerMT, namespace)

// ______________________________________________________
//
// @ ModuleFactory

const moduleFactory = (injects?: Partial<TimerST>) => ({
  namespaced: true,
  state: TimerModel(injects),
  mutations: TimerMT
})

// ______________________________________________________
//
// @ export

export {
  TimerST,
  namespace,
  moduleFactory,
  commits,
  mutationTypes,
  mapState,
  mapMutations
}
