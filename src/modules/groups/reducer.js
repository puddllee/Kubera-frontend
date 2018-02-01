import {
  GET_GROUPS,
  GET_GROUPS_SUCCESS,
  GET_GROUPS_FAILURE,
  GET_GROUP,
  GET_GROUP_SUCCESS,
  GET_GROUP_FAILURE
} from './actions';


const initialState = () => {
  return {
    loading: {
      groups: true,
      group: true
    },
    groups: [],
    group: null
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
    case GET_GROUP:
      return {...state, loading: {...state.loading, group: true}};
    case GET_GROUP_SUCCESS:
      return {...state, loading: {...state.loading, group: false}, group: action.payload};
    case GET_GROUP_FAILURE:
      return {...state, loading: {...state.loading, group: false}, group: null};
    default:
      return state
  }
}
