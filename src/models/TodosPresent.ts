import {
  TodosBaseST,
  TodosBaseUC,
  TodosBaseMT,
  TodosBaseModel
} from './TodosBase'
import { TodoItemST } from './TodoItem'
const { getDoingItems, getDoneItems } = TodosBaseUC

// ______________________________________________________
//
// @ TodosPresentModel State

export interface TodosPresentST extends TodosBaseST {
  showAll: boolean
  dateLabel: string
  bgColor: string
}
export const TodosPresentModel = (injects?: Partial<TodosPresentST>) => ({
  ...TodosBaseModel(),
  showAll: true,
  dateLabel: '',
  bgColor: '#fff',
  ...injects
})

// ______________________________________________________
//
// @ TodosPresentModel UseCases

function getVisibleItems(items: TodoItemST[], showAll: boolean): TodoItemST[] {
  return showAll ? items : getDoingItems(items)
}
function getToggleVisibleItemsBtnLabel(showAll: boolean): string {
  return showAll ? 'hide done items' : 'show all items'
}
function getTodosCountStatusLabel(items: TodoItemST[]): string {
  const all = `all: ${items.length}`
  const doing = `doing: ${getDoingItems(items).length}`
  const done = `done: ${getDoneItems(items).length}`
  return `${all} / ${doing} / ${done}`
}
export const TodosPresentUC = {
  ...TodosBaseUC,
  getVisibleItems,
  getToggleVisibleItemsBtnLabel,
  getTodosCountStatusLabel
}

// ______________________________________________________
//
// @ TodosPresentModel Mutations

function toggleShowAll(state: TodosPresentST): void {
  state.showAll = !state.showAll
}
function setDateLabel(state: TodosPresentST, payload: { label: string }): void {
  state.dateLabel = payload.label
}
export const TodosPresentMT = {
  ...TodosBaseMT,
  toggleShowAll,
  setDateLabel
}
