import axios from 'axios';
import Constants from '../../Constants';

const WineApi = {
    getAllWines() {
      return new Promise(resolve => {
        axios.get(Constants.PRODUCTS_URL).then(res => {
          resolve(res.data)
        })
      })
    },
    // getWineFiltered(wine, filter) {
    //   return new Promise(resolve => {
    //     axios.get(Constants.PRODUCTS_URL).then(res => {
    //       resolve(res.data)
    //     })
    //   })
    // }
}

export default WineApi;