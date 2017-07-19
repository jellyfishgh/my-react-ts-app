import * as React from 'react'
import './App.css'
const logo = require('./logo.svg')

import Hello from '../HelloCom/Hello'

export interface Props {
  count: number,
  name: string
  enthusiasmLevel: number
  onCount?: () => void
  onIncrement?: () => void
  onDecrement?: () => void
}

export default function App({ name, enthusiasmLevel = 1, onCount, count, onIncrement, onDecrement }: Props) {
  return (
    <div className="App">
      <div className="header">
        <img src={logo} className="logo" alt="logo" />
        <h2>Welcome to React</h2>
      </div>
      <p className="intro">
        To get started, edit <code>src/App.tsx</code> and save to reload.
      </p>
      <code>{count}</code>
      <div>
        <button onClick={onDecrement}>-</button>
        <button onClick={onIncrement}>+</button>
      </div>
      <Hello name={name} enthusiasmLevel={enthusiasmLevel} onCount={onCount}/>
    </div>
  )
}
