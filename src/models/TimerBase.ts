import { toDateLabel } from '../helpers/date'

// ______________________________________________________
//
// @ TimerModel State

export interface TimerBaseST {
  dateLabel: string
}
export const TimerBaseModel = (injects?: Partial<TimerBaseST>) => ({
  dateLabel: '',
  ...injects
})

// ______________________________________________________
//
// @ TimerModel UseCases

function getDateLabel(dateLabel: string): string {
  return `current time: ${dateLabel}`
}
export const TimerBaseUC = {
  getDateLabel
}

// ______________________________________________________
//
// @ TimerModel Mutations

function tick(state: TimerBaseST, date: Date): void {
  state.dateLabel = toDateLabel(date)
}
export const TimerBaseMT = {
  tick
}
