import { TodosPresentST } from './models/TodosPresent'
import { ReduxService } from './react/store'
import { VuexService } from './vue/store'
import { wait } from './helpers/promise'
import './react/app'
import './vue/app'

// ______________________________________________________
//
// @ Types

export interface AbstractService {
  tick: (date: Date) => void
  subscribe: (args?: any) => any
  getStateTodos(): TodosPresentST
  onChangeBounderyOutside: (state: { todos: TodosPresentST }) => void
}

// ______________________________________________________
//
// @ Services

function mapBounderyOutside(
  service: AbstractService,
  bounderyOutside: AbstractService
) {
  service.subscribe(() => {
    const todos = service.getStateTodos()
    bounderyOutside.onChangeBounderyOutside({ todos })
  })
}

async function timerService(service: AbstractService) {
  const date = new Date()
  service.tick(date)
  while (true) {
    await wait()
    const date = new Date()
    service.tick(date)
  }
}

function runService(
  service: AbstractService,
  bounderyOutside: AbstractService
) {
  mapBounderyOutside(service, bounderyOutside)
  timerService(service)
}

// ______________________________________________________
//
// @ exec

runService(ReduxService, VuexService)
runService(VuexService, ReduxService)
