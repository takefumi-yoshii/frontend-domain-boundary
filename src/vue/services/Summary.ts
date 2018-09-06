import { store } from '../store'
import * as Timer from '../models/Timer'
import * as Summary from '../models/Summary'

// ______________________________________________________
//
// @ Service

function waitAction(type: string, _store = store) {
  return new Promise(resolve => {
    const unsubscribe = _store.subscribe(action => {
      if(action.type === type) {
        unsubscribe()
        resolve(action)
      }
    })
  })
}
async function mapTimer(_store = store) {
  while (true) {
    await waitAction(Timer.mutationTypes.tick)
    const date = _store.state.timer.date
    Summary.commits.setDateLabel(date)
  }
}
function runService(_store = store) {
  mapTimer(_store)
}

export { runService }
