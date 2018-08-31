import { fromState, fromMutations } from 'vuex-aggregate'
import { getDateLabel } from '../../helpers/date'

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
  mutations: TimerMT
})

export { TimerST, namespace, moduleFactory, commits, mapState, mapMutations }
