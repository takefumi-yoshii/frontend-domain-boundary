import * as React from 'react'
import styled from 'styled-components'
import { TodoST, TodoQR } from '../models/Todo'

// ______________________________________________________
//
// @ Types

type Props = {
  todo: TodoST
  handleClickDone: (payload: { id: string; done: boolean }) => any
  className?: string
}

// ______________________________________________________
//
// @ View

const View = (props: Props) => (
  <li className={props.className}>
    <p className="button">
      <button
        onClick={() => props.handleClickDone({ id: props.todo.id, done: true })}
        disabled={props.todo.done}
      >
        done
      </button>
    </p>
    <p className="value">{props.todo.value}</p>
    <p className="dateLabel">{TodoQR.getDateLabel(props.todo)}</p>
  </li>
)

// ______________________________________________________
//
// @ StyledView

export default styled(View)`
  display: flex;
  justify-content: space-around;
  color: ${props => (props.todo.done ? '#eee' : '#000')};
  > .button {
    margin: 0;
  }
  > .value {
    flex: 1 0 auto;
    margin: 0 0 0 10px;
  }
  > .dateLabel {
    margin: 0;
  }
`
