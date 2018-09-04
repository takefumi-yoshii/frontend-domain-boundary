import * as React from 'react'
import styled from 'styled-components'
import TodoItem from './TodoItem'
import { MapState, MapDispatch } from './TodosItemsContainer'

// ______________________________________________________
//
// @ Types

type Props = MapState &
  MapDispatch & {
    className?: string
    children?: React.ReactChild
  }

// ______________________________________________________
//
// @ View

const View = (props: Props) => (
  <ul className={props.className}>
    {props.items.map(todo => (
      <TodoItem
        key={todo.id}
        id={todo.id}
        value={todo.value}
        done={todo.done}
        dateLabel={todo.dateLabel}
        handleClickDone={props.handleClickDone}
      />
    ))}
  </ul>
)

// ______________________________________________________
//
// @ StyledView

export default styled(View)`
  padding: 0;
  > li {
    margin-bottom: 3px;
    list-style: none;
    font-size: 12px;
  }
`
