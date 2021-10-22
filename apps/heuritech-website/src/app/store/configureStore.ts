import * as history from 'history';
import { applyMiddleware, createStore } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension/developmentOnly';

import { routerMiddleware } from 'connected-react-router';
import thunk from 'redux-thunk';

import { createRootReducer } from './reducers';

export const browserHistory = history.createBrowserHistory();

export default function configureStore() {
  return createStore(
    createRootReducer(browserHistory),
    composeWithDevTools(
      applyMiddleware(thunk, routerMiddleware(browserHistory))
    )
  );
}
