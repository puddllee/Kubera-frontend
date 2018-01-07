export const GET_COINS = 'coins/GET_COINS';
export const GET_COINS_SUCCESS = 'coins/GET_COINS_SUCCESS';
export const GET_COINS_FAILURE = 'coins/GET_COINS_FAILURE';
export const GET_COIN_HISTORY = 'coins/GET_COIN_HISTORY';
export const GET_COIN_HISTORY_SUCCESS = 'coins/GET_COIN_HISTORY_SUCCESS';
export const GET_COIN_HISTORY_FAILURE = 'coins/GET_COIN_HISTORY_FAILURE';

export function getCoins(){
  return (dispatch) => {
    dispatch({
      types: [GET_COINS, GET_COINS_SUCCESS, GET_COINS_FAILURE],
      promise: (client) => {
        return client.get(`/api/v1/coins`)
          .then((resp)=>{
            dispatch(getCoinHistory(resp[0].symbol));
            return resp;
          })
      }
    })
  }
}

export function getCoinHistory(symbol){
  return (dispatch) => {
    dispatch({
      types: [GET_COIN_HISTORY, GET_COIN_HISTORY_SUCCESS, GET_COIN_HISTORY_FAILURE],
      promise: (client) => {
        return client.get(`/api/v1/coins/${symbol}/hist/`)
      }
    })
  }
}
