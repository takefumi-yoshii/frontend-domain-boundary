import * as React from 'react'
import { connect } from 'react-redux'
import { StoreST } from '../store'
import { TodosQR } from '../models/Todos'
import { SummaryQR } from '../models/Summary'
import SummaryComponent from './SummaryComponent'

// ______________________________________________________
//
// @ Types

export type MapState = {
  dateLabel: string
  todosCountStatusLabel: string
  bounderyOutsideCountLabel: string
}

// ______________________________________________________
//
// @ Container

const mapState = (store: StoreST): MapState => ({
  todosCountStatusLabel: TodosQR.getTodosCountStatusLabel(store.todos),
  dateLabel: SummaryQR.getDateLabel(store.summary),
  bounderyOutsideCountLabel: SummaryQR.getBounderyOutsideCountLabel(store.summary)
})
export const SummaryContainer = connect(
  mapState
)(SummaryComponent)
