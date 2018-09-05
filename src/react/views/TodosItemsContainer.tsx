import * as React from 'react'
import { connect } from 'react-redux'
import { bindActionCreators, Dispatch, AnyAction } from 'redux'
import { StoreST, Todos } from '../store'
import { TodosQR } from '../models/Todos'
import { TodoST } from '../../models/TodoPresent'
import TodosItemsComponent from './TodosItemsComponent'

// ______________________________________________________
//
// @ Types

export type MapState = {
  items: TodoST[]
}
export type MapDispatch = {
  handleClickDone: (payload: { id: string; done: boolean }) => any
}

// ______________________________________________________
//
// @ Container

const mapState = (store: StoreST): MapState => ({
  items: TodosQR.getVisiblePresentItems(store.todos)
})
const mapDispatch = (dispatch: Dispatch<AnyAction>): MapDispatch =>
  bindActionCreators({ handleClickDone: Todos.creators.setItemDone }, dispatch)

export const TodosItemsContainer = connect(
  mapState,
  mapDispatch
)(TodosItemsComponent)
