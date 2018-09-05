import { toDateLabel } from '../helpers/date'

// ______________________________________________________
//
// @ State

interface TimerBaseST {
  date: Date
  dateLabel: string
}
const TimerBaseModel = (injects?: Partial<TimerBaseST>) => ({
  date: new Date(),
  dateLabel: '',
  ...injects
})

// ______________________________________________________
//
// @ Mutations

function tick(state: TimerBaseST, date: Date): void {
  state.date = date
}
const TimerBaseMT = {
  tick
}

// ______________________________________________________
//
// @ export

interface TimerST extends TimerBaseST {}
const TimerModel = TimerBaseModel
const TimerMT = TimerBaseMT

export { TimerBaseST, TimerBaseModel, TimerBaseMT }
export { TimerST, TimerModel, TimerMT }
