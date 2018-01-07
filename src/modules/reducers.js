import {combineReducers} from 'redux';
import {routerReducer} from 'react-router-redux';
import {default as auth} from 'modules/auth/reducer';

export default combineReducers({
  routing: routerReducer,
  auth
});
