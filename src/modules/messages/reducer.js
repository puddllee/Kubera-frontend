import {
  ADD_MESSAGE,
  REMOVE_MESSAGE
} from './actions';

const initialState = () => {
  return {
    collection: []
  };
};

export default function reducer(state=initialState(), action={}){
  switch(action.type){
    case ADD_MESSAGE:
      return {...state, collection: [...state.collection, action.payload]};
    case REMOVE_MESSAGE:
      return {...state, collection: state.collection.filter((m) => m.id !== action.payload)};
    default:
      return state;
  }
}
