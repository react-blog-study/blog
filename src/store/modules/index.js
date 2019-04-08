import { combineReducers } from 'redux';
import base from './base';
import auth from './auth';
import user from './user';
import profile from './profile';
import settings from './settings';
import { penderReducer } from 'redux-pender';

export default combineReducers({
  base,
  auth,
  user,
  settings,
  profile,
  pender: penderReducer,
});
