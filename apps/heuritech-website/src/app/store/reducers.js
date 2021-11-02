import { combineReducers } from 'redux';
import { connectRouter } from 'connected-react-router';

import { trendsReducer } from '../modules/trends/trends.reducer';

export const createRootReducer = (history) =>
  combineReducers({
    router: connectRouter(history),
    trends: trendsReducer
  });
