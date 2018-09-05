import { fromState, fromGetters, fromMutations } from 'vuex-aggregate'
import { TimerST, TimerModel, TimerUC, TimerMT } from '../../models/TimerBase'

const namespace = 'timer'

// ______________________________________________________
//
// @ State

const { mapState } = fromState(TimerModel(), namespace)

// ______________________________________________________
//
// @ Getters

const TimerGT = {
  getDateLabel(state: TimerST) {
    return TimerUC.getDateLabel(state.dateLabel)
  }
}
const { getters, mapGetters } = fromGetters(TimerGT, namespace)

// ______________________________________________________
//
// @ Mutations

const { commits, mapMutations } = fromMutations(TimerMT, namespace)

// ______________________________________________________
//
// @ ModuleFactory

const moduleFactory = (injects?: Partial<TimerST>) => ({
  namespaced: true,
  state: TimerModel(injects),
  getters: TimerGT,
  mutations: TimerMT
})

// ______________________________________________________
//
// @ export

export {
  TimerST,
  namespace,
  moduleFactory,
  getters,
  commits,
  mapState,
  mapGetters,
  mapMutations
}
