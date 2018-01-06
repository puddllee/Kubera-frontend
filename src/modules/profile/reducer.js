import {
  GET_PROFILE,
  GET_PROFILE_SUCCESS,
  GET_PROFILE_FAILURE
} from './actions'

const initialState = () => {
  return {
    name: '',
    loading: {profile: true},
    error: null,
  }
};

export default function reducer(state=initialState(), action={}) {
  switch (action.type) {
    case GET_PROFILE:
      return {...state, loading: {...state.loading, profile: true}};
    case GET_PROFILE_SUCCESS:
      return {...state,  ...action.payload, loading: {...state.loading, profile: false}};
    case GET_PROFILE_FAILURE:
      return {...state, error: {...action.payload}, loading: {...state.loading, profile: false}};
    default:
      return state;
  }
}
