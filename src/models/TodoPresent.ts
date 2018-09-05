import { TodoBaseST, TodoBaseModel } from './TodoBase'

// ______________________________________________________
//
// @ State

interface TodoPresentST extends TodoBaseST {
  dateLabel: string
}
const TodoPresentModel = (injects?: Partial<TodoPresentST>) => ({
  ...TodoBaseModel(),
  dateLabel: '',
  ...injects
})

// ______________________________________________________
//
// @ export

interface TodoST extends TodoPresentST {}
const TodoModel = TodoPresentModel

export { TodoPresentST, TodoPresentModel }
export { TodoST, TodoModel }
