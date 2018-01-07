import {combineReducers} from 'redux';
import {routerReducer} from 'react-router-redux';
import {default as auth} from 'modules/auth/reducer';
import {default as messages} from 'modules/messages/reducer';

export default combineReducers({
  routing: routerReducer,
  auth,
  messages
});
