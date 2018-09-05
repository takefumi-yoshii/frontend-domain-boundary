import { toDateLabel } from '../helpers/date'
import {
  TodosBaseST,
  TodosBaseUC,
  TodosBaseMT,
  TodosBaseModel
} from './TodosBase'
import { TodoBaseST } from './TodoBase'
import { TodoPresentST } from './TodoPresent'
const { getDoingItems, getDoneItems } = TodosBaseUC

// ______________________________________________________
//
// @ TodosPresentModel State

interface TodosPresentST extends TodosBaseST {
  name: string
  showAll: boolean
  dateLabel: string
  bgColor: string
  bounderyOutsideName: string
  bounderyOutsideCount: number
}
const TodosPresentModel = (injects?: Partial<TodosPresentST>) => ({
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

function getVisibleItems(items: TodoBaseST[], showAll: boolean): TodoBaseST[] {
  return showAll ? items : getDoingItems(items)
}
function getVisiblePresentItems(
  items: TodoBaseST[],
  showAll: boolean
): TodoPresentST[] {
  const _items = getVisibleItems(items, showAll)
  return _items.map(item => ({ ...item, dateLabel: toDateLabel(item.date) }))
}
function getToggleVisibleItemsBtnLabel(showAll: boolean): string {
  return showAll ? 'hide done items' : 'show all items'
}
function getTodosCountStatusLabel(items: TodoBaseST[]): string {
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
const TodosPresentUC = {
  ...TodosBaseUC,
  getVisiblePresentItems,
  getToggleVisibleItemsBtnLabel,
  getTodosCountStatusLabel,
  getBounderyOutsideCountLabel
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
const TodosPresentMT = {
  ...TodosBaseMT,
  toggleShowAll,
  setDateLabel,
  setBounderyOutsideCount
}

// ______________________________________________________
//
// @ export

interface TodosST extends TodosPresentST {}
const TodosModel = TodosPresentModel
const TodosUC = TodosPresentUC
const TodosMT = TodosPresentMT

export { TodosPresentST, TodosPresentModel, TodosPresentUC, TodosPresentMT }
export { TodosST, TodosModel, TodosUC, TodosMT }
