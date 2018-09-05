import { createSelector } from 'reselect'
import { wrapImmer } from 'redux-aggregate-immer'
import {
  TimerST,
  TimerModel,
  TimerUC,
  TimerBaseMT
} from '../../models/TimerBase'

// ______________________________________________________
//
// @ Todos Queries

const selectors = {
  dateLabel: (state: TimerST) => state.dateLabel
}
const TimerQR = {
  getDateLabel: createSelector([selectors.dateLabel], TimerUC.getDateLabel)
}

// ______________________________________________________
//
// @ Todos Mutations

const TimerMT = wrapImmer(TimerBaseMT)

// ______________________________________________________
//
// @ export

export { TimerST, TimerModel, TimerQR, TimerMT }
