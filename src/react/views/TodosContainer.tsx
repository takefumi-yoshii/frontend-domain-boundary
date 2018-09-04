import * as React from 'react'
import { connect } from 'react-redux'
import { bindActionCreators, Dispatch, AnyAction } from 'redux'
import { StoreST, Todos } from '../store'
import { TodosQR } from '../models/Todos'
import TodosComponent from './TodosComponent'

// ______________________________________________________
//
// @ Types

export type MapState = {
  name: string
  todosCountStatusLabel: string
  toggleVisibleItemsBtnLabel: string
  bounderyOutsideCountLabel: string
  dateLabel: string
  bgColor: string
}
export type MapDispatch = {
  handleClickToggle: () => any
  handleClickDone: (payload: { id: string; done: boolean }) => any
}
export type OwnProps = {
  items: () => React.ReactNode
  form: () => React.ReactNode
}

// ______________________________________________________
//
// @ Container

const mapState = (store: StoreST): MapState => ({
  name: store.todos.name,
  todosCountStatusLabel: TodosQR.getTodosCountStatusLabel(store.todos),
  toggleVisibleItemsBtnLabel: TodosQR.getToggleVisibleItemsBtnLabel(
    store.todos
  ),
  bounderyOutsideCountLabel: TodosQR.getBounderyOutsideCountLabel(store.todos),
  dateLabel: TodosQR.getDateLabel(store.todos),
  bgColor: store.todos.bgColor
})
const mapDispatch = (dispatch: Dispatch<AnyAction>): MapDispatch =>
  bindActionCreators(
    {
      handleClickToggle: Todos.creators.toggleShowAll,
      handleClickDone: Todos.creators.setItemDone
    },
    dispatch
  )
const mergeProps = (
  mapState: MapState,
  mapDispatch: MapDispatch,
  ownProps: OwnProps
) => ({
  ...mapState,
  ...mapDispatch,
  items: ownProps.items,
  form: ownProps.form
})
export const TodosContainer = connect(
  mapState,
  mapDispatch,
  mergeProps
)(TodosComponent)
