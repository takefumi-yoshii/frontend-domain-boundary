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
  name: string
  showAll: boolean
  dateLabel: string
  bgColor: string
  bounderyOutsideName: string
  bounderyOutsideCount: number
}
export const TodosPresentModel = (injects?: Partial<TodosPresentST>) => ({
  ...TodosBaseModel(),
  name: '',
  showAll: true,
  dateLabel: '',
  bgColor: '#fff',
  bounderyOutsideName: 'unknown',
  bounderyOutsideCount: 0,
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
function getBounderyOutsideCountLabel(
  bounderyOutsideName: string,
  bounderyOutsideCount: number
): string {
  return `${bounderyOutsideName} count is ${bounderyOutsideCount}.`
}
function getDateLabel(dateLabel: string): string {
  return `current time: ${dateLabel}`
}
export const TodosPresentUC = {
  ...TodosBaseUC,
  getVisibleItems,
  getToggleVisibleItemsBtnLabel,
  getTodosCountStatusLabel,
  getBounderyOutsideCountLabel,
  getDateLabel
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
function setBounderyOutsideCount(state: TodosPresentST, amount: number) {
  state.bounderyOutsideCount = amount
}
export const TodosPresentMT = {
  ...TodosBaseMT,
  toggleShowAll,
  setDateLabel,
  setBounderyOutsideCount
}
