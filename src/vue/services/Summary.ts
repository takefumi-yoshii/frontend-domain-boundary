

// ______________________________________________________
//
// @ Service

import { fork, take, select, put } from 'redux-saga/effects'
import { StoreST } from '../store'
import * as Timer from '../models/Timer'
import * as Summary from '../models/Summary'

function* mapTimer(): IterableIterator<any> {
  console.log('ddd')
  while (true) {
    yield take(Timer.mutationTypes.tick)
    console.log('tick')
    // const storeState: StoreST = yield select()
    // const date = storeState.timer.date
    // yield put(Summary.creators.setDateLabel(date))
  }
}

export function * rootSaga() {
  console.log('ddd')
  yield fork(mapTimer)
}
