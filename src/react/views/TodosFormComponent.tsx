import * as React from 'react'
import { MapState, MapDispatch } from './TodosFormContainer'

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
  <form
    onSubmit={e => {
      e.preventDefault()
      props.handleSubmit()
    }}
  >
    <input
      type="text"
      value={props.inputValue}
      onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
        props.handleInputChange(e.target.value)
      }
    />
    <button>addTodo</button>
  </form>
)
