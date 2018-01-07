import {
  GET_COINS,
  GET_COINS_SUCCESS,
  GET_COINS_FAILURE,
  GET_COIN_HISTORY,
  GET_COIN_HISTORY_SUCCESS,
  GET_COIN_HISTORY_FAILURE
} from './actions'

function initialState(){
  return {
    coinList: [],
    loading: {coinList: true},
    histories: {},
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
      }
    default:
      return state;
  }
}
