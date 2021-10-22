import { combineReducers } from 'redux';
import { connectRouter } from 'connected-react-router';
import { BrowserHistory } from 'history';

import { trendsReducer } from '../modules/trends/trends.reducer';

export const createRootReducer = (history: BrowserHistory) =>
  combineReducers({
    router: connectRouter(history),
    trends: trendsReducer
  });
