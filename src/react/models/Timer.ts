import { createSelector } from 'reselect'
import { wrapImmer } from 'redux-aggregate-immer'
import {
  TimerBaseST,
  TimerBaseModel,
  TimerBaseUC,
  TimerBaseMT
} from '../../models/TimerBase'

// ______________________________________________________
//
// @ Todos State

export interface TimerST extends TimerBaseST {}
export const TimerModel = TimerBaseModel

// ______________________________________________________
//
// @ Todos Queries

const selectors = {
  dateLabel: (state: TimerST) => state.dateLabel
}
export const TimerQR = {
  getDateLabel: createSelector([selectors.dateLabel], TimerBaseUC.getDateLabel)
}

// ______________________________________________________
//
// @ Todos Mutations

export const TimerMT = wrapImmer(TimerBaseMT)
