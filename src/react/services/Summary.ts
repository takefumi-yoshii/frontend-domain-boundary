import { fork, take, select, put } from 'redux-saga/effects'
import { StoreST, Timer, Summary } from '../store'

// ______________________________________________________
//
// @ Service

function* mapTimer(): IterableIterator<any> {
  while (true) {
    yield take(Timer.types.tick)
    const storeState: StoreST = yield select()
    const date = storeState.timer.date
    yield put(Summary.creators.setDateLabel(date))
  }
}

export function * rootSaga() {
  yield fork(mapTimer)
}
