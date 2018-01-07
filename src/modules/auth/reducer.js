import {
  GET_TOKEN,
  GET_TOKEN_SUCCESS,
  GET_TOKEN_FAILURE,
  GET_PROFILE,
  GET_PROFILE_SUCCESS,
  GET_PROFILE_FAILURE
} from './actions'

const initialState = () => {
  return {
    token: '',
    loading: {token: true, profile: true},
    profile: {}
  };
};


export default function reducer(state=initialState(), action={}){
  switch (action.type) {
    case GET_TOKEN:
      return {...state, loading: {...state.loading, token: true}};
    case GET_TOKEN_SUCCESS:
      return {...state, loading: {...state.loading, token: false}, token: action.payload.access_token};
    case GET_TOKEN_FAILURE:
      return {...state, loading: {...state.loading, token: false}};
    case GET_PROFILE:
      return {...state, loading: {...state.loading, profile: true}};
    case GET_PROFILE_SUCCESS:
      return {...state,  profile: action.payload, loading: {...state.loading, profile: false}};
    case GET_PROFILE_FAILURE:
      return {...state, loading: {...state.loading, profile: false}};
    default:
      return state;
  }
}
