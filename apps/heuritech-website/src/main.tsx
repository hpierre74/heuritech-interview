import { ThemeProvider } from '@mui/material';
import { StrictMode } from 'react';
import * as ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { ConnectedRouter } from 'connected-react-router';

import configureStore, { browserHistory } from './app/store/configureStore';

import App from './app/app';
import { theme } from './app/styles/theme';

const store = configureStore();

ReactDOM.render(
  <StrictMode>
    <ThemeProvider theme={theme}>
      <Provider store={store}>
        <ConnectedRouter history={browserHistory}>
          <App />
        </ConnectedRouter>
      </Provider>
    </ThemeProvider>
  </StrictMode>,
  document.getElementById('root')
);
