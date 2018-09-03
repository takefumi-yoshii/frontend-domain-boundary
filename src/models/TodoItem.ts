import { uuid } from '../helpers/uuid'

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

export function getDateLabel(date: Date) {
  const month = date.getMonth() + 1
  const _date = date.getDate()
  const hour = date.getHours()
  const minute = date.getMinutes()
  const second = date.getSeconds()
  return `${month}/${_date} ${hour}:${minute}:${second}`
}
export const TodoItemUC = {
  getDateLabel
}
