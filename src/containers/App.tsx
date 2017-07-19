import { connect, Dispatch } from 'react-redux'
import App from '../components/AppCom/App'
import { StoreState } from '../store/types/'
import * as actions from '../store/actions/'

export function mapStateToProps({ enthusiasmLevel, languageName, count }: StoreState) {
  return {
    count,
    enthusiasmLevel,
    name: languageName
  }
}

export function mapDispatchToProps(
  dispatch: Dispatch<actions.EnthusiasmAction>
) {
  return {
    onIncrement: () => dispatch(actions.incrementEnthusiasm()),
    onDecrement: () => dispatch(actions.decrementEnthusiasm()),
    onCount: () => dispatch(actions.countClick())
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(App)
