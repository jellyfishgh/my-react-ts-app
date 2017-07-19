import * as React from 'react'
import { Provider } from 'react-redux'
import { createStore } from 'redux'

import { enthusiasm } from './store/reducers/index'
import { StoreState } from './store/types/index'

import App from './containers/App'

const store = createStore<StoreState>(enthusiasm, {
  enthusiasmLevel: 1,
  languageName: 'TypeScript',
  count: 0
})

export default () => {
  return (
    <Provider store={store}>
      <App />
    </Provider>
  )
}
