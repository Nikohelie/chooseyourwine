import WineApi from '../../service/WineApi'

export const WINE_ACTIONS = {
    STORE_WINE: 'WINE_ACTIONS/STORE_WINE',
    UNCHECK_FILTER:'WINE_ACTIONS.UNCHECK_FILTER',
    CHECK_FILTER:'WINE_ACTIONS.CHECK_FILTER'
  }


export const getAllWinesAction = () => (
  (dispatch) => {
    WineApi.getAllWines().then((wines) => {
     // console.log(wines);
      dispatch({
        type: WINE_ACTIONS.STORE_WINE,
        wines
      })
    })
  }
)


export const checkFilter = value => (
  {
    type: WINE_ACTIONS.CHECK_FILTER,
    value
  }
)

export const unCheckFilter = value => (
  {
    type: WINE_ACTIONS.UNCHECK_FILTER,
    value
  }
)
