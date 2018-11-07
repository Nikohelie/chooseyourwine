import WineApi from '../../service/WineApi'

export const WINE_ACTIONS = {
    STORE_WINE: 'WINE_ACTIONS/STORE_WINE',
    FILTER_WINE:'WINE_ACTIONS/FILTER_WINE'
  }


export const getAllWinesAction = () => (
  (dispatch) => {
    WineApi.getAllWines().then((wines) => {
      dispatch({
        type: WINE_ACTIONS.STORE_WINE,
        wines
      })
    })
  }
)
