export const GET_COINS = 'coins/GET_COINS';
export const GET_COINS_SUCCESS = 'coins/GET_COINS_SUCCESS';
export const GET_COINS_FAILURE = 'coins/GET_COINS_FAILURE';

export function getCoins(){
  return (dispatch) => {
    dispatch({
      types: [GET_COINS, GET_COINS_SUCCESS, GET_COINS_FAILURE],
      promise: (client) => {
        return client.get(`/api/v1/coins`)
      }
    })
  }
}
