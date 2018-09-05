import * as React from 'react'
import { render } from 'react-dom'
import { store } from './store'
import { AppProvider } from './views/AppProvider'

// ______________________________________________________

export function renderReact() {
  render(<AppProvider store={store} />, document.getElementById('react'))
}
