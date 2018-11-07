/**
 * Configure redux store
 */
import { applyMiddleware, createStore } from 'redux'
import thunk from 'redux-thunk'
import { composeWithDevTools } from 'redux-devtools-extension'

import defaultRootState from './root'
import rootReducer from './root.reducer'

const store = createStore(
  rootReducer,
  defaultRootState,
  composeWithDevTools(applyMiddleware(thunk))
)

export default store