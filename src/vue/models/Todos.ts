import { fromState, fromMutations, fromGetters } from 'vuex-aggregate'
import {
  TodosPresentST,
  TodosPresentModel,
  TodosPresentUC,
  TodosPresentMT
} from '../../models/TodosPresent'

const namespace = 'todos'

// ______________________________________________________
//
// @ Todos State

interface TodosST extends TodosPresentST {}
const TodosModel = TodosPresentModel
const { mapState } = fromState(TodosModel(), namespace)

// ______________________________________________________
//
// @ Todos Getters

const TodosGT = {
  getInputValue(state: TodosST) {
    return TodosPresentUC.getInputValue(state.input)
  },
  getVisibleItems(state: TodosST) {
    return TodosPresentUC.getVisibleItems(state.items, state.showAll)
  },
  getTodosCountStatusLabel(state: TodosST) {
    return TodosPresentUC.getTodosCountStatusLabel(state.items)
  },
  getToggleVisibleItemsBtnLabel(state: TodosST) {
    return TodosPresentUC.getToggleVisibleItemsBtnLabel(state.showAll)
  },
  getBounderyOutsideCountLabel(state: TodosST) {
    return TodosPresentUC.getBounderyOutsideCountLabel(
      state.bounderyOutsideName,
      state.bounderyOutsideCount
    )
  }
}
const { getters, mapGetters } = fromGetters(TodosGT, namespace)

// ______________________________________________________
//
// @ Todos Mutations

const TodosMT = { ...TodosPresentMT }
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
