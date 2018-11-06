// @flow

import React from 'react';
import { Route } from 'react-router-dom';
import { Switch } from 'react-router';
import debug from 'debug';
import { hot } from 'react-hot-loader';
import { StyleRoot } from 'radium';
import { Provider } from 'react-redux';
import { ConnectedRouter } from 'react-router-redux';

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
  history,
}: any) {
  return (
    <Provider store={store}>
      <StyleRoot style={styles.root}>
        <ConnectedRouter history={history}>
          <Switch>
            <Route component={MainBoard} />
          </Switch>
        </ConnectedRouter>
      </StyleRoot>
    </Provider>
  );
}

export default hot(module)(App);
