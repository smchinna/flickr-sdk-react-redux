import {combineReducers} from 'redux';
import {connectRouter} from 'connected-react-router';

import groupReducer from './groupReducer';

export default (history) => combineReducers({
  router: connectRouter(history),
  group: groupReducer
});