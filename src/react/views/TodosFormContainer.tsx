import * as React from 'react'
import { connect } from 'react-redux'
import { bindActionCreators, Dispatch, AnyAction } from 'redux'
import { StoreST, Todos } from '../store'
import { TodosQR } from '../models/Todos'
import TodosFormComponent from './TodosFormComponent'

// ______________________________________________________
//
// @ Types

export type MapState = {
  inputValue: string
}
export type MapDispatch = {
  handleSubmit: () => any
  handleInputChange: (payload: string) => any
}

// ______________________________________________________
//
// @ Container

const mapState = (store: StoreST): MapState => ({
  inputValue: TodosQR.getInputValue(store.todos)
})
const mapDispatch = (dispatch: Dispatch<AnyAction>): MapDispatch =>
  bindActionCreators(
    {
      handleSubmit: Todos.creators.addTodo,
      handleInputChange: Todos.creators.setInputValue
    },
    dispatch
  )
export const TodosFormContainer = connect(
  mapState,
  mapDispatch
)(TodosFormComponent)
