import { fromState, fromGetters, fromMutations } from 'vuex-aggregate'
import { SummaryST, SummaryModel, SummaryUC, SummaryMT } from '../../models/SummaryBase'

const namespace = 'summary'

// ______________________________________________________
//
// @ State

const { mapState } = fromState(SummaryModel(), namespace)

// ______________________________________________________
//
// @ Getters

const SummaryGT = {
  getBounderyOutsideCountLabel(state: SummaryST) {
    return SummaryUC.getBounderyOutsideCountLabel(
      state.bounderyOutsideName,
      state.bounderyOutsideCount
    )
  },
  getDateLabel(state: SummaryST) {
    return SummaryUC.getDateLabel(state.dateLabel)
  }
}
const { getters, mapGetters } = fromGetters(SummaryGT, namespace)

// ______________________________________________________
//
// @ Mutations

const { commits, mapMutations } = fromMutations(SummaryMT, namespace)

// ______________________________________________________
//
// @ ModuleFactory

const moduleFactory = (injects?: Partial<SummaryST>) => ({
  namespaced: true,
  state: SummaryModel(injects),
  getters: SummaryGT,
  mutations: SummaryMT
})

// ______________________________________________________
//
// @ export

export {
  SummaryST,
  namespace,
  moduleFactory,
  getters,
  commits,
  mapState,
  mapGetters,
  mapMutations
}
