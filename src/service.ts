import { TodosPresentST } from './models/TodosPresent'
import { wait } from './helpers/promise'

// ______________________________________________________
//
// @ Types

interface AbstractService {
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

async function tickTime(service: AbstractService) {
  while (true) {
    const date = new Date()
    service.tick(date)
    await wait()
  }
}

function runService(
  service: AbstractService,
  bounderyOutside: AbstractService
) {
  mapBounderyOutside(service, bounderyOutside)
  tickTime(service)
}

// ______________________________________________________
//
// @ export

export { AbstractService, runService }
