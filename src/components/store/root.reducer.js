/**
 * Configure root reducer
 */
import { combineReducers } from 'redux'

import wineReducer from './wine/wine.reducer'

const rootReducer = combineReducers({
    wineReducer
})

export default rootReducer
