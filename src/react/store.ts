import { createStore, combineReducers, Store, ReducersMapObject } from 'redux'
import { composeWithDevTools } from 'redux-devtools-extension'
import { createAggregate, createActions } from 'redux-aggregate'
import { TimerAC } from './actions/timer'
import { TodosST, TodosModel, TodosMT, TodosSB } from './models/Todos'
import { AbstractService } from '../main'

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
  tick(date: Date) {
    store.dispatch(Timer.creators.tick(date))
  },
  changeBounderyOutside(itemsLength: number) {
    store.dispatch(Todos.creators.setBounderyOutsideCount(itemsLength))
  }
}
