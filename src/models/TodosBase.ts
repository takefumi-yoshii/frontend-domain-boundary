import { TodoItemModel, TodoItemST } from './TodoItem'

// ______________________________________________________
//
// @ TodosModel State

export interface TodosBaseST {
  name: string
  input: string | null
  items: TodoItemST[]
}
export const TodosBaseModel = (injects?: Partial<TodosBaseST>) => ({
  name: '',
  input: null,
  items: [],
  ...injects
})

// ______________________________________________________
//
// @ TodosModel UseCases

function getDoingItems(items: TodoItemST[]): TodoItemST[] {
  return items.filter(item => !item.done)
}
function getDoneItems(items: TodoItemST[]): TodoItemST[] {
  return items.filter(item => item.done)
}
function getInputValue(input: string | null): string {
  if (input === null) return ''
  return input
}
export const TodosBaseUC = {
  getDoingItems,
  getDoneItems,
  getInputValue
}

// ______________________________________________________
//
// @ TodosModel Mutations

function addTodo(state: TodosBaseST): void {
  if (state.input === '') return
  state.items.push(TodoItemModel({ value: state.input }))
  state.input = ''
}
function setInputValue(state: TodosBaseST, value: string): void {
  state.input = value
}
function setItemDone(
  state: TodosBaseST,
  { id, done }: { id: string; done: boolean }
): void {
  state.items.map(item => {
    if (item.id !== id) return item
    item.done = done
  })
}
export const TodosBaseMT = {
  addTodo,
  setInputValue,
  setItemDone
}
