import {
  GET_COINS,
  GET_COINS_SUCCESS,
  GET_COINS_FAILURE
} from './actions'

function initialState(){
  return {
    coinList: [],
    loading: {coinList: true}
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
    default:
      return state;
  }
}
