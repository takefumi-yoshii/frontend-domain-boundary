import * as React from 'react'
import styled from 'styled-components'
import { MapState, MapDispatch, OwnProps } from './TodosContainer'

// ______________________________________________________
//
// @ Types

interface Props extends MapState, MapDispatch, OwnProps {
  className?: string
  children?: React.ReactChild
}

// ______________________________________________________
//
// @ View

const View = (props: Props) => (
  <div className={props.className}>
    <h1>{props.name}</h1>
    <p className="dateLabel">{props.dateLabel}</p>
    <p>{props.todosCountStatusLabel}</p>
    <p>{props.bounderyOutsideCountLabel}</p>
    <p>
      <button onClick={() => props.handleClickToggle()}>
        {props.toggleVisibleItemsBtnLabel}
      </button>
    </p>
    {props.form()}
    {props.items()}
  </div>
)

// ______________________________________________________
//
// @ StyledView

export default styled(View)`
  padding: 20px;
  border-radius: 5px;
  border: 2px solid;
  background-color: ${props => props.bgColor};
  > h1 {
    margin-bottom: 10px;
    font-size: 20px;
    font-weight: bolder;
  }
  > p {
    margin: 5px;
    font-size: 12px;
  }
`
