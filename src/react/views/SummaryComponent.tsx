import * as React from 'react'
import styled from 'styled-components'
import { MapState } from './SummaryContainer'

// ______________________________________________________
//
// @ Types

interface Props extends MapState {
  className?: string
  children?: React.ReactChild
}

// ______________________________________________________
//
// @ View

const View = (props: Props) => (
  <div className={props.className}>
    <p>{props.dateLabel}</p>
    <p>{props.todosCountStatusLabel}</p>
    <p>{props.bounderyOutsideCountLabel}</p>
  </div>
)

// ______________________________________________________
//
// @ StyledView

export default styled(View)`
  padding: 20px;
  border-radius: 5px;
  border: 2px solid;
  > p {
    margin: 5px;
    font-size: 12px;
  }
`
