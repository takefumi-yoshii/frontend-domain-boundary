import { createStore, combineReducers, Store, ReducersMapObject } from 'redux'
import { composeWithDevTools } from 'redux-devtools-extension'
import { createAggregate } from 'redux-aggregate'
import { TimerST, TimerModel, TimerMT } from './models/Timer'
import { TodosST, TodosModel, TodosMT } from './models/Todos'
import { AbstractService } from '../main'
import { TodosPresentST } from '../models/TodosPresent'

// ______________________________________________________
//
// @ Types

export interface StoreST {
  timer: TimerST
  todos: TodosST
}

// ______________________________________________________
//
// @ Aggregates

export const Timer = createAggregate(TimerMT, 'timer/')
export const Todos = createAggregate(TodosMT, 'todos/')

// ______________________________________________________
//
// @ Store

function storeFactory<R extends ReducersMapObject>(reducer: R): Store<StoreST> {
  return createStore(combineReducers(reducer), composeWithDevTools())
}
export const store = storeFactory({
  timer: Timer.reducerFactory(TimerModel()),
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
