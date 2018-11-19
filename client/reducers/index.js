// @flow

import { combineReducers } from 'redux';
import { routerReducer } from 'react-router-redux';
import Equipment from './Equipment.js';

export default combineReducers({
  Equipment,
  routing: routerReducer,
});
