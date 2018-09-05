import * as React from 'react'
import { Store } from 'redux'
import { Provider } from 'react-redux'
import { StoreST } from '../store'
import { TodosContainer } from './TodosContainer'
import { TodosFormContainer } from './TodosFormContainer'
import { TodosItemsContainer } from './TodosItemsContainer'
import { SummaryContainer } from './SummaryContainer'
import styled from 'styled-components'

// ______________________________________________________

export class AppProvider extends React.Component<
  { store: Store<StoreST> },
  never
> {
  render() {
    return (
      <Provider store={this.props.store}>
        <StyledView>
          <TodosContainer
            items={() => <TodosItemsContainer />}
            form={() => <TodosFormContainer />}
          />
          <SummaryContainer />
        </StyledView>
      </Provider>
    )
  }
}

const StyledView = styled.div`
  padding: 10px;
  box-sizing: border-box;
  > * {
    margin-bottom: 10px;
  }
`
