import { createSelector } from 'reselect'
import { wrapImmer } from 'redux-aggregate-immer'
import {
  TodosPresentST,
  TodosPresentModel,
  TodosPresentUC,
  TodosPresentMT
} from '../../models/TodosPresent'

// ______________________________________________________
//
// @ Todos State

export interface TodosST extends TodosPresentST {}
export const TodosModel = TodosPresentModel

// ______________________________________________________
//
// @ Todos Queries

const selectors = {
  input: (state: TodosST) => state.input,
  items: (state: TodosST) => state.items,
  showAll: (state: TodosST) => state.showAll,
  bounderyOutsideName: (state: TodosST) => state.bounderyOutsideName,
  bounderyOutsideCount: (state: TodosST) => state.bounderyOutsideCount
}
export const TodosQR = {
  getInputValue: createSelector(
    [selectors.input],
    TodosPresentUC.getInputValue
  ),
  getVisibleItems: createSelector(
    [selectors.items, selectors.showAll],
    TodosPresentUC.getVisibleItems
  ),
  getTodosCountStatusLabel: createSelector(
    [selectors.items],
    TodosPresentUC.getTodosCountStatusLabel
  ),
  getToggleVisibleItemsBtnLabel: createSelector(
    [selectors.showAll],
    TodosPresentUC.getToggleVisibleItemsBtnLabel
  ),
  getBounderyOutsideCountLabel: createSelector(
    [selectors.bounderyOutsideName, selectors.bounderyOutsideCount],
    TodosPresentUC.getBounderyOutsideCountLabel
  )
}

// ______________________________________________________
//
// @ Todos Mutations

export const TodosMT = wrapImmer(TodosPresentMT)

// ______________________________________________________
//
// @ Todos Subscriptions

export const TodosSB = {
  Timer: wrapImmer({
    tick: TodosPresentMT.setDateLabel
  })
}
