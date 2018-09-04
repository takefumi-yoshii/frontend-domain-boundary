import { fromState, fromGetters, fromMutations } from 'vuex-aggregate'
import { getDateLabel } from '../../models/TodoItem'
import { TodosPresentUC } from '../../models/TodosPresent'

const namespace = 'timer'

// ______________________________________________________
//
// @ Timer State

interface TimerST {
  dateLabel: string
}
const TimerModel = (injects?: Partial<TimerST>) => ({
  dateLabel: '',
  ...injects
})
const { mapState } = fromState(TimerModel(), namespace)

// ______________________________________________________
//
// @ Timer Getters

const TimerGT = {
  getDateLabel(state: TimerST) {
    return TodosPresentUC.getDateLabel(state.dateLabel)
  }
}
const { getters, mapGetters } = fromGetters(TimerGT, namespace)

// ______________________________________________________
//
// @ Timer Mutations

const TimerMT = {
  tick(state: TimerST, date: Date) {
    state.dateLabel = getDateLabel(date)
  }
}
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
