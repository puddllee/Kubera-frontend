import { routes } from 'shared/apiRoutes';

export const GET_COINS = 'coins/GET_COINS';
export const GET_COINS_SUCCESS = 'coins/GET_COINS_SUCCESS';
export const GET_COINS_FAILURE = 'coins/GET_COINS_FAILURE';
export const GET_COIN_HISTORY = 'coins/GET_COIN_HISTORY';
export const GET_COIN_HISTORY_SUCCESS = 'coins/GET_COIN_HISTORY_SUCCESS';
export const GET_COIN_HISTORY_FAILURE = 'coins/GET_COIN_HISTORY_FAILURE';
export const SET_SELECTED_COIN_SYMBOLS = 'coins/SET_SELECTED_COIN_SYMBOLS';

export function getCoins() {
  return dispatch => {
    dispatch({
      types: [GET_COINS, GET_COINS_SUCCESS, GET_COINS_FAILURE],
      promise: client => {
        return client.get(routes.coins.allCoins()).then(resp => {
          dispatch(getCoinHistory(resp[0].symbol));
          return resp;
        });
      }
    });
  };
}

export function getCoinHistory(symbol) {
  return (dispatch, getState) => {
    // Only get the coin history if it does not yet exist in memory
    if (!getState().coins.histories[symbol]) {
      dispatch({
        types: [
          GET_COIN_HISTORY,
          GET_COIN_HISTORY_SUCCESS,
          GET_COIN_HISTORY_FAILURE
        ],
        promise: client => {
          // https://github.com/CoinCapDev/CoinCap.io#history1daycoin
          const freq = '30day'; // 1, 7, 30, 90, 180, 365
          return client.get(routes.coins.coinHistory(freq, symbol));
        }
      });
    }
  };
}

export function toggleCoinSelect(symbol) {
  return (dispatch, getState) => {
    const coins = getState().coins;
    const { selectedCoinSymbols } = coins;

    if (selectedCoinSymbols.includes(symbol)) {
      dispatch({
        type: SET_SELECTED_COIN_SYMBOLS,
        payload: selectedCoinSymbols.filter(s => s !== symbol)
      });
    } else {
      dispatch({
        type: SET_SELECTED_COIN_SYMBOLS,
        payload: [...selectedCoinSymbols, symbol]
      });
    }
  };
}
