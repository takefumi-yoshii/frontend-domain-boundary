import { createStore, combineReducers, applyMiddleware, Store, ReducersMapObject } from 'redux'
import { composeWithDevTools } from 'redux-devtools-extension'
import createSagaMiddleware from 'redux-saga'
import { createAggregate } from 'redux-aggregate'
import { TimerST, TimerModel, TimerMT } from './models/Timer'
import { TodosST, TodosModel, TodosMT } from './models/Todos'
import { SummaryST, SummaryModel, SummaryMT } from './models/Summary'
import { rootSaga } from './services/Summary'
import { AbstractService } from '../service'
import { TodosPresentST } from '../models/TodosPresent'

// ______________________________________________________
//
// @ Types

interface StoreST {
  timer: TimerST
  todos: TodosST
  summary: SummaryST
}

// ______________________________________________________
//
// @ Aggregates

const Timer = createAggregate(TimerMT, 'timer/')
const Todos = createAggregate(TodosMT, 'todos/')
const Summary = createAggregate(SummaryMT, 'summary/')

// ______________________________________________________
//
// @ Store

const sagaMiddleware = createSagaMiddleware()
function storeFactory<R extends ReducersMapObject>(reducer: R): Store<StoreST> {
  return createStore(combineReducers(reducer),
    composeWithDevTools(applyMiddleware(sagaMiddleware))
  )
}
const store = storeFactory({
  timer: Timer.reducerFactory(TimerModel()),
  todos: Todos.reducerFactory(
    TodosModel({ name: 'REACT_TODOS' })
  ),
  summary: Summary.reducerFactory(
    SummaryModel({ bounderyOutsideName: 'Vuex' })
  )
})
sagaMiddleware.run(rootSaga)

// ______________________________________________________
//
// @ Services

const ReduxService: AbstractService = {
  subscribe: store.subscribe,
  getStateTodos(): TodosPresentST {
    return store.getState().todos
  },
  onChangeBounderyOutside(state: { todos: TodosPresentST }) {
    const itemsLength = state.todos.items.length
    if (itemsLength !== store.getState().summary.bounderyOutsideCount) {
      store.dispatch(Summary.creators.setBounderyOutsideCount(itemsLength))
    }
  },
  tick(date: Date) {
    store.dispatch(Timer.creators.tick(date))
  }
}

// ______________________________________________________
//
// @ export

export { StoreST, Timer, Todos, Summary, store, ReduxService }
