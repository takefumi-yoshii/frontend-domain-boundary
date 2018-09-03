import { ReduxService, store as ReduxStore } from './react/store'
import { VuexService, store as VuexStore } from './vue/store'
import { wait } from './helpers/promise'
import './react/app'
import './vue/app'
import { TodoItemST } from './models/TodoItem'
import { TodosPresentST } from './models/TodosPresent'

// ______________________________________________________
//
// @ Services

export interface AbstractService {
  tick: (date: Date) => void
  changeBounderyOutside: (itemsLength: number) => void
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

function mapVuexToRedux() {
  let _length = 0
  VuexStore.subscribe(() => {
    const { todos } = VuexStore.state
    const length = todos.items.length
    if (length !== _length) {
      ReduxService.changeBounderyOutside(length)
      _length = length
    }
  })
}
function mapReduxToVuex() {
  let _length = 0
  ReduxStore.subscribe(() => {
    const { todos } = ReduxStore.getState()
    const length = todos.items.length
    if (length !== _length) {
      VuexService.changeBounderyOutside(length)
      _length = length
    }
  })
}

function runService(service: AbstractService) {
  timerService(service)
}

runService(ReduxService)
runService(VuexService)
mapVuexToRedux()
mapReduxToVuex()
