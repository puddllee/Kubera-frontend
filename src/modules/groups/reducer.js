import {
  GET_GROUPS,
  GET_GROUPS_SUCCESS,
  GET_GROUPS_FAILURE
} from './actions';


const initialState = () => {
  return {
    loading: {
      groups: true
    },
    groups: []
  };
};

export default function reducer(state=initialState(), action={}){
  switch(action.type){
    case GET_GROUPS:
      return {...state, loading: {...state.loading, groups: true}};
    case GET_GROUPS_SUCCESS:
      return {...state, loading: {...state.loading, groups: false}, groups: action.payload};
    case GET_GROUPS_FAILURE:
      return {...state, loading: {...state.loading, groups: false}};
    default:
      return state
  }
}
