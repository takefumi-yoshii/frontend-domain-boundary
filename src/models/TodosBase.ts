import { TodoBaseModel, TodoBaseST } from './TodoBase'

// ______________________________________________________
//
// @ TodosModel State

interface TodosBaseST {
  input: string | null
  items: TodoBaseST[]
}
const TodosBaseModel = (injects?: Partial<TodosBaseST>) => ({
  input: null,
  items: [],
  ...injects
})

// ______________________________________________________
//
// @ TodosModel UseCases

function getDoingItems(items: TodoBaseST[]): TodoBaseST[] {
  return items.filter(item => !item.done)
}
function getDoneItems(items: TodoBaseST[]): TodoBaseST[] {
  return items.filter(item => item.done)
}
function getInputValue(input: string | null): string {
  if (input === null) return ''
  return input
}
const TodosBaseUC = {
  getDoingItems,
  getDoneItems,
  getInputValue
}

// ______________________________________________________
//
// @ TodosModel Mutations

function addTodo(state: TodosBaseST): void {
  if (state.input === '') return
  state.items.push(TodoBaseModel({ value: state.input }))
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
const TodosBaseMT = {
  addTodo,
  setInputValue,
  setItemDone
}

// ______________________________________________________
//
// @ export

export { TodosBaseST, TodosBaseModel, TodosBaseUC, TodosBaseMT }
