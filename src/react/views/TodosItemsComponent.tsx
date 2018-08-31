import * as React from 'react'
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

export default (props: Props) => (
  <>
    {props.items.map(todo => (
      <TodoItem
        key={todo.id}
        todo={todo}
        handleClickDone={props.handleClickDone}
      />
    ))}
  </>
)
