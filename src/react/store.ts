import { createStore, combineReducers, Store, ReducersMapObject } from 'redux'
import { composeWithDevTools } from 'redux-devtools-extension'
import { createAggregate, createActions } from 'redux-aggregate'
import { TimerAC } from './actions/timer'
import { TodosST, TodosModel, TodosMT, TodosSB } from './models/Todos'
import { AbstractService } from '../main'
import { TodosPresentST } from '../models/TodosPresent'

// ______________________________________________________
//
// @ Types

export interface StoreST {
  todos: TodosST
}

// ______________________________________________________
//
// @ Aggregates

export const Timer = createActions(TimerAC, 'timer/')
export const Todos = createAggregate(TodosMT, 'todos/')
Todos.subscribe(Timer, TodosSB.Timer)

// ______________________________________________________
//
// @ Store

function storeFactory<R extends ReducersMapObject>(reducer: R): Store<StoreST> {
  return createStore(combineReducers(reducer), composeWithDevTools())
}
export const store = storeFactory({
  todos: Todos.reducerFactory(
    TodosModel({
      name: 'REACT_TODOS',
      bounderyOutsideName: 'Vuex'
    })
  )
})

// ______________________________________________________
//
// @ Services

export const ReduxService: AbstractService = {
  subscribe: store.subscribe,
  getStateTodos(): TodosPresentST {
    return store.getState().todos
  },
  onChangeBounderyOutside(state: { todos: TodosPresentST }) {
    const itemsLength = state.todos.items.length
    if (itemsLength !== store.getState().todos.bounderyOutsideCount) {
      store.dispatch(Todos.creators.setBounderyOutsideCount(itemsLength))
    }
  },
  tick(date: Date) {
    store.dispatch(Timer.creators.tick(date))
  }
}
