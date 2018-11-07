import {
  WINE_ACTIONS
} from './wine.actions'
import defaultWineState from './wine'

function wineReducer(state = defaultWineState, action) {
  switch (action.type) {
    case WINE_ACTIONS.STORE_WINE:
      return { ...state,
        wines: action.wines,
        selectedWines:action.wines
      }
    case WINE_ACTIONS.CHECK_FILTER:
    const newSelectedCheckFilter= [...state.selectedFilter,action.value]
      return {
        ...state,
        selectedFilter: newSelectedCheckFilter,
        selectedWines: state.wines.filter(item =>{
          console.log("ITEM _________",item)
          if(newSelectedCheckFilter.includes(item.price_range) || newSelectedCheckFilter.length===0){
            return true;
          }else{
            return false;
          }
        })
      }
      case WINE_ACTIONS.UNCHECK_FILTER:
      const newSelectedFilter= state.selectedFilter.filter(item =>{
        if(item=action.value) {
          return false;
        }else{
          return true;
        }
      })
      return {
        ...state,
        selectedFilter: newSelectedFilter,
        selectedWines: state.wines.filter(item =>{
          if(newSelectedFilter.includes(item.price_range)|| newSelectedFilter.length===0){
            return true;
          }else{
            return false;
          }
        })
      }
    default:
      return state
  }
}

export default wineReducer