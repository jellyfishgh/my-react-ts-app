import { EnthusiasmAction } from '../actions'
import { StoreState } from '../types/index'
import {
  INCREMENT_ENTHUSIASM,
  DECREMENT_ENTHUSIASM,
  COUNT_CLICK
} from '../constants/index'

export function enthusiasm(
  state: StoreState,
  action: EnthusiasmAction
): StoreState {
  switch (action.type) {
    case INCREMENT_ENTHUSIASM:
      return { ...state, enthusiasmLevel: state.enthusiasmLevel + 1 }
    case DECREMENT_ENTHUSIASM:
      return {
        ...state,
        enthusiasmLevel: Math.max(1, state.enthusiasmLevel - 1)
      }
    case COUNT_CLICK:
      return { ...state, count: state.count + 1 }
    default:
      return state
  }
}
