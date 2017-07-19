import * as React from 'react'
import * as ReactDOM from 'react-dom'
import App, { Props } from './App'

const props: Props = {
  count: 1,
  name: 'js',
  enthusiasmLevel: 5
}

it('renders without crashing', () => {
  const div = document.createElement('div')
  ReactDOM.render(<App {...props} />, div)
})
