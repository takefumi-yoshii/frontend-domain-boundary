import { wrapImmer } from 'redux-aggregate-immer'
import {
  TimerST,
  TimerModel,
  TimerBaseMT
} from '../../models/TimerBase'

// ______________________________________________________
//
// @ Mutations

const TimerMT = wrapImmer(TimerBaseMT)

// ______________________________________________________
//
// @ export

export { TimerST, TimerModel, TimerMT }
