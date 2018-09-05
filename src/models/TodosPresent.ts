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
// @ State

interface TodosPresentST extends TodosBaseST {
  name: string
  showAll: boolean
  dateLabel: string
  bgColor: string
}
const TodosPresentModel = (injects?: Partial<TodosPresentST>) => ({
  ...TodosBaseModel(),
  name: '',
  showAll: true,
  dateLabel: '',
  bgColor: '#fff',
  ...injects
})

// ______________________________________________________
//
// @ UseCases

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
const TodosPresentUC = {
  ...TodosBaseUC,
  getVisiblePresentItems,
  getToggleVisibleItemsBtnLabel,
  getTodosCountStatusLabel
}

// ______________________________________________________
//
// @ Mutations

function toggleShowAll(state: TodosPresentST): void {
  state.showAll = !state.showAll
}
function setDateLabel(state: TodosPresentST, payload: { label: string }): void {
  state.dateLabel = payload.label
}
const TodosPresentMT = {
  ...TodosBaseMT,
  toggleShowAll,
  setDateLabel
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
