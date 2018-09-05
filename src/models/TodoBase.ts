import { uuid } from '../helpers/uuid'

// ______________________________________________________
//
// @ State

interface TodoBaseST {
  id: string
  date: Date
  value: string | null
  done: boolean
}
const TodoBaseModel = (injects?: Partial<TodoBaseST>) => ({
  id: uuid(),
  date: new Date(),
  value: '',
  done: false,
  ...injects
})

// ______________________________________________________
//
// @ export

export { TodoBaseST, TodoBaseModel }
