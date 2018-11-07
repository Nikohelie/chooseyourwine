import { WINE_ACTIONS } from './wine.actions'
import defaultWineState from './wine'

function wineReducer(state = defaultWineState, action) {
  switch (action.type) {
  case WINE_ACTIONS.STORE_WINE:
    return { ...state, wines: action.wines }
  case WINE_ACTIONS.FILTER_WINE:
    return Object.assign({}, state,
            {selectedFilter: action.value});
  default:
    return state
  }
}

export default wineReducer
