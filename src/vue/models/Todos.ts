import { fromState, fromMutations, fromGetters } from 'vuex-aggregate'
import {
  TodosST,
  TodosModel,
  TodosUC,
  TodosMT
} from '../../models/TodosPresent'

const namespace = 'todos'

// ______________________________________________________
//
// @ State

const { mapState } = fromState(TodosModel(), namespace)

// ______________________________________________________
//
// @ Getters

const TodosGT = {
  getInputValue(state: TodosST) {
    return TodosUC.getInputValue(state.input)
  },
  getVisibleItems(state: TodosST) {
    return TodosUC.getVisiblePresentItems(state.items, state.showAll)
  },
  getTodosCountStatusLabel(state: TodosST) {
    return TodosUC.getTodosCountStatusLabel(state.items)
  },
  getToggleVisibleItemsBtnLabel(state: TodosST) {
    return TodosUC.getToggleVisibleItemsBtnLabel(state.showAll)
  },
  getBounderyOutsideCountLabel(state: TodosST) {
    return TodosUC.getBounderyOutsideCountLabel(
      state.bounderyOutsideName,
      state.bounderyOutsideCount
    )
  }
}
const { getters, mapGetters } = fromGetters(TodosGT, namespace)

// ______________________________________________________
//
// @ Mutations

const { commits, mapMutations } = fromMutations(TodosMT, namespace)

// ______________________________________________________
//
// @ ModuleFactory

const moduleFactory = (injects?: Partial<TodosST>) => ({
  namespaced: true,
  state: TodosModel(injects),
  getters: TodosGT,
  mutations: TodosMT
})

// ______________________________________________________
//
// @ export

export {
  TodosST,
  namespace,
  moduleFactory,
  getters,
  commits,
  mapState,
  mapGetters,
  mapMutations
}
