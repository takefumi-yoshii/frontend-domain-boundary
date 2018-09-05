import { toDateLabel } from '../helpers/date'

// ______________________________________________________
//
// @ TimerModel State

interface TimerBaseST {
  dateLabel: string
}
const TimerBaseModel = (injects?: Partial<TimerBaseST>) => ({
  dateLabel: '',
  ...injects
})

// ______________________________________________________
//
// @ TimerModel UseCases

function getDateLabel(dateLabel: string): string {
  return `current time: ${dateLabel}`
}
const TimerBaseUC = {
  getDateLabel
}

// ______________________________________________________
//
// @ TimerModel Mutations

function tick(state: TimerBaseST, date: Date): void {
  state.dateLabel = toDateLabel(date)
}
const TimerBaseMT = {
  tick
}

// ______________________________________________________
//
// @ export

interface TimerST extends TimerBaseST {}
const TimerModel = TimerBaseModel
const TimerUC = TimerBaseUC
const TimerMT = TimerBaseMT

export { TimerBaseST, TimerBaseModel, TimerBaseUC, TimerBaseMT }
export { TimerST, TimerModel, TimerUC, TimerMT }
