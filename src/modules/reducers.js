import {combineReducers} from 'redux';
import {routerReducer} from 'react-router-redux';
import {default as profile} from 'modules/profile/reducer';

export default combineReducers({
  routing: routerReducer,
  profile
});
