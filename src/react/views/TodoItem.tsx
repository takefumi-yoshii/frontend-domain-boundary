import * as React from 'react'
import { TodoST, TodoQR } from '../models/Todo'

// ______________________________________________________
//
// @ Types

type Props = {
  todo: TodoST
  handleClickDone: (payload: { id: string; done: boolean }) => any
}

// ______________________________________________________
//
// @ View

export default (props: Props) => (
  <div>
    <p>{TodoQR.getDateLabel(props.todo)}</p>
    <p>{props.todo.value}</p>
    {!props.todo.done && (
      <button
        onClick={() => props.handleClickDone({ id: props.todo.id, done: true })}
      >
        done
      </button>
    )}
  </div>
)
