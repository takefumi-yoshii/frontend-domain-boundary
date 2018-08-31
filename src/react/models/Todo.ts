import { createSelector } from 'reselect'
import { TodoItemST, TodoItemUC } from '../../models/TodoItem'

// ______________________________________________________
//
// @ Todo State

export interface TodoST extends TodoItemST {}

// ______________________________________________________
//
// @ TodosItem Queries

const selectors = {
  date: (state: TodoItemST) => state.date
}
export const TodoQR = {
  getDateLabel: createSelector([selectors.date], TodoItemUC.getDateLabel)
}
