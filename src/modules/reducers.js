import {combineReducers} from 'redux';
import {routerReducer} from 'react-router-redux';
import {reducer as form} from 'redux-form';
import {default as auth} from 'modules/auth/reducer';
import {default as coins} from 'modules/coins/reducer';
import {default as messages} from 'modules/messages/reducer';
import {default as groups} from 'modules/groups/reducer';

export default combineReducers({
  routing: routerReducer,
  form,
  auth,
  coins,
  messages,
  groups
});
