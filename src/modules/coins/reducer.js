import {
  GET_COINS,
  GET_COINS_SUCCESS,
  GET_COINS_FAILURE,
  GET_COIN_HISTORY,
  GET_COIN_HISTORY_SUCCESS,
  GET_COIN_HISTORY_FAILURE,
  SET_SELECTED_COIN_SYMBOLS
} from './actions'

function initialState(){
  return {
    coinList: [],
    loading: {coinList: true, coinHistory: true},
    histories: {},
    selectedCoinSymbols: [],
  }
}

export default function reducer(state=initialState(), action={}){
  switch (action.type){
    case GET_COINS:
      return {
        ...state,
        loading: {...state.loading, coinList: true}
      };
    case GET_COINS_SUCCESS:
      return {
        ...state,
        loading: {...state.loading, coinList: false},
        coinList: action.payload
      };
    case GET_COINS_FAILURE:
      return {
        ...state,
        loading: {...state.loading, coinList: false}
      };
    case GET_COIN_HISTORY:
      return {
        ...state,
        loading: {...state.loading, coinHistory: true}
      };
    case GET_COIN_HISTORY_SUCCESS:
      const histories = {...state.histories};
      histories[action.payload.symbol] = action.payload.data;
      return {
        ...state,
        loading: {...state.loading, coinHistory: false},
        histories
      };
    case GET_COIN_HISTORY_FAILURE:
      return {
        ...state,
        loading: {...state.loading, coinHistory: false}
      };
    case SET_SELECTED_COIN_SYMBOLS:
      return {
        ...state,
        selectedCoinSymbols: action.payload
      };
    default:
      return state;
  }
}
