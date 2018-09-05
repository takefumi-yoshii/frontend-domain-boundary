import { toDateLabel } from '../helpers/date'

// ______________________________________________________
//
// @ State

interface SummaryBaseST  {
  dateLabel: string
  bounderyOutsideName: string
  bounderyOutsideCount: number
  
}
const SummaryBaseModel = (injects?: Partial<SummaryBaseST>) => ({
  dateLabel: '',
  bounderyOutsideName: 'unknown',
  bounderyOutsideCount: 0,
  ...injects
})

// ______________________________________________________
//
// @ UseCases

function getDateLabel(dateLabel: string): string {
  return `current time: ${dateLabel}`
}
function getBounderyOutsideCountLabel(
  bounderyOutsideName: string,
  bounderyOutsideCount: number
): string {
  return `${bounderyOutsideName} count is ${bounderyOutsideCount}.`
}
const SummaryBaseUC = {
  getDateLabel,
  getBounderyOutsideCountLabel
}

// ______________________________________________________
//
// @ Mutations

function setDateLabel(state: SummaryBaseST, date: Date) {
  state.dateLabel = toDateLabel(date)
}
function setBounderyOutsideCount(state: SummaryBaseST, amount: number) {
  state.bounderyOutsideCount = amount
}
const SummaryBaseMT = {
  setDateLabel,
  setBounderyOutsideCount
}

// ______________________________________________________
//
// @ export

interface SummaryST extends SummaryBaseST {}
const SummaryModel = SummaryBaseModel
const SummaryUC = SummaryBaseUC
const SummaryMT = SummaryBaseMT

export { SummaryBaseST, SummaryBaseModel, SummaryBaseUC, SummaryBaseMT }
export { SummaryST, SummaryModel, SummaryUC, SummaryMT }
