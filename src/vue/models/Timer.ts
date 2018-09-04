import { fromState, fromGetters, fromMutations } from 'vuex-aggregate'
import {
  TimerBaseST,
  TimerBaseModel,
  TimerBaseUC,
  TimerBaseMT
} from '../../models/TimerBase'

const namespace = 'timer'

// ______________________________________________________
//
// @ Timer State

interface TimerST extends TimerBaseST {}
const TimerModel = TimerBaseModel
const { mapState } = fromState(TimerModel(), namespace)

// ______________________________________________________
//
// @ Timer Getters

const TimerGT = {
  getDateLabel(state: TimerST) {
    return TimerBaseUC.getDateLabel(state.dateLabel)
  }
}
const { getters, mapGetters } = fromGetters(TimerGT, namespace)

// ______________________________________________________
//
// @ Timer Mutations

const TimerMT = TimerBaseMT
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
