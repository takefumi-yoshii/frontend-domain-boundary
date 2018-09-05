import { createSelector } from 'reselect'
import { wrapImmer } from 'redux-aggregate-immer'
import {
  TodosST,
  TodosModel,
  TodosUC,
  TodosPresentMT
} from '../../models/TodosPresent'

// ______________________________________________________
//
// @ Todos Queries

const selectors = {
  input: (state: TodosST) => state.input,
  items: (state: TodosST) => state.items,
  showAll: (state: TodosST) => state.showAll,
  dateLabel: (state: TodosST) => state.dateLabel,
  bounderyOutsideName: (state: TodosST) => state.bounderyOutsideName,
  bounderyOutsideCount: (state: TodosST) => state.bounderyOutsideCount
}
const TodosQR = {
  getInputValue: createSelector([selectors.input], TodosUC.getInputValue),
  getVisiblePresentItems: createSelector(
    [selectors.items, selectors.showAll],
    TodosUC.getVisiblePresentItems
  ),
  getTodosCountStatusLabel: createSelector(
    [selectors.items],
    TodosUC.getTodosCountStatusLabel
  ),
  getToggleVisibleItemsBtnLabel: createSelector(
    [selectors.showAll],
    TodosUC.getToggleVisibleItemsBtnLabel
  ),
  getBounderyOutsideCountLabel: createSelector(
    [selectors.bounderyOutsideName, selectors.bounderyOutsideCount],
    TodosUC.getBounderyOutsideCountLabel
  )
}

// ______________________________________________________
//
// @ Todos Mutations

const TodosMT = wrapImmer(TodosPresentMT)

// ______________________________________________________
//
// @ export

export { TodosST, TodosModel, TodosQR, TodosMT }
