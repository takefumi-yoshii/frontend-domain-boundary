import { createSelector } from 'reselect'
import { wrapImmer } from 'redux-aggregate-immer'
import {
  SummaryST,
  SummaryModel,
  SummaryUC,
  SummaryBaseMT
} from '../../models/SummaryBase'

// ______________________________________________________
//
// @ Queries

const selectors = {
  dateLabel: (state: SummaryST) => state.dateLabel,
  bounderyOutsideName: (state: SummaryST) => state.bounderyOutsideName,
  bounderyOutsideCount: (state: SummaryST) => state.bounderyOutsideCount
}
const SummaryQR = {
  getBounderyOutsideCountLabel: createSelector(
    [selectors.bounderyOutsideName, selectors.bounderyOutsideCount],
    SummaryUC.getBounderyOutsideCountLabel
  ),
  getDateLabel: createSelector(
    [selectors.dateLabel],
    SummaryUC.getDateLabel
  )
}

// ______________________________________________________
//
// @ Mutations

const SummaryMT = wrapImmer(SummaryBaseMT)

// ______________________________________________________
//
// @ export

export { SummaryST, SummaryModel, SummaryQR, SummaryMT }
