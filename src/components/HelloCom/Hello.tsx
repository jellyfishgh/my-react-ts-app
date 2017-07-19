import './style.css'

import * as React from 'react'

export interface Props {
  name: string
  enthusiasmLevel: number
  onCount?: () => void
}

export default function Hello({ name, enthusiasmLevel = 1, onCount }: Props) {
  if (enthusiasmLevel <= 0) {
    throw new Error('You could be a little more enthusiastic. :D')
  }
  return (
    <div className="hello" onClick={onCount}>
      <div className="greeting">
        Hello {name + getExclamationMarks(enthusiasmLevel)}
      </div>
    </div>
  )
}

function getExclamationMarks(numChars: number) {
  return Array(numChars + 1).join('!')
}
