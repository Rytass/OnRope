// @flow

import React from 'react';
import { MemoryRouter } from 'react-router';
import {
  Switch,
  Route,
} from 'react-router-dom';
import debug from 'debug';
import { hot } from 'react-hot-loader';
import { StyleRoot } from 'radium';
import { Provider } from 'react-redux';

// Containers
import MainBoard from './containers/MainBoard.jsx';

// Debug mode
if (process.env.NODE_ENV !== 'production') {
  debug.enable('OnRope:*');
}

const styles = {
  root: {
    width: '100%',
    height: '100%',
    display: 'block',
    position: 'relative',
  },
};

function App({
  store,
}: any) {
  return (
    <Provider store={store}>
      <MemoryRouter>
        <StyleRoot style={styles.root}>
          <Switch>
            <Route path="/" component={MainBoard} />
          </Switch>
        </StyleRoot>
      </MemoryRouter>
    </Provider>
  );
}

export default hot(module)(App);
