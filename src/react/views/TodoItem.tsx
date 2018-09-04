import * as React from 'react'
import styled from 'styled-components'

// ______________________________________________________
//
// @ Types

type Props = {
  id: string
  value: string | null
  done: boolean
  dateLabel: string
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
        onClick={() => props.handleClickDone({ id: props.id, done: true })}
        disabled={props.done}
      >
        done
      </button>
    </p>
    <p className="value">{props.value}</p>
    <p className="dateLabel">{props.dateLabel}</p>
  </li>
)

// ______________________________________________________
//
// @ StyledView

export default styled(View)`
  display: flex;
  justify-content: space-around;
  color: ${props => (props.done ? '#eee' : '#000')};
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
