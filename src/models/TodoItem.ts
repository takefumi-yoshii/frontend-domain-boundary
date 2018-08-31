import { uuid } from '../helpers/uuid'
import { getDateLabel } from '../helpers/date'

// ______________________________________________________
//
// @ TodosItem State

export interface TodoItemST {
  id: string
  date: Date
  value: string | null
  done: boolean
}
export const TodoItemModel = (injects?: Partial<TodoItemST>) => ({
  id: uuid(),
  date: new Date(),
  value: '',
  done: false,
  ...injects
})

// ______________________________________________________
//
// @ TodosItem UseCases

export const TodoItemUC = {
  getDateLabel
}
