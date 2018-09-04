import { uuid } from '../helpers/uuid'

// ______________________________________________________
//
// @ TodosItem State

export interface TodoST {
  id: string
  date: Date
  value: string | null
  done: boolean
}
export interface TodoPresentST extends TodoST {
  dateLabel: string
}
export const TodoItemModel = (injects?: Partial<TodoST>) => ({
  id: uuid(),
  date: new Date(),
  value: '',
  done: false,
  ...injects
})
