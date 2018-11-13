// @flow

import React, { PureComponent } from 'react';
import {
  Switch,
  Route,
  Redirect,
} from 'react-router-dom';
import MainPage from './MainPage.jsx';

const styles = {
  placement: {
    display: 'flex',
    width: '100%',
    height: '100%',
    alignItems: 'flex-start',
    justifyContent: 'flex-start',
    flexDirection: 'column',
    position: 'relative',
    backgroundColor: '#1a2426',
  },
  main: {
    width: '100%',
    margin: 0,
    display: 'flex',
    alignItems: 'flex-start',
    justifyContent: 'center',
    height: '100%',
    overflowX: 'auto',
  },
  mainWrapper: {
    width: '100%',
    height: '100%',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'flex-start',
    flexDirection: 'column',
  },
};

type Props = {

};

class MainBoard extends PureComponent<Props> {
  render() {
    return (
      <div style={styles.placement}>
        <main style={styles.main}>
          <div style={styles.mainWrapper}>
            <Switch>
              <Route path="/" component={MainPage} />
              <Redirect to="/" />
            </Switch>
          </div>
        </main>
      </div>
    );
  }
}

export default MainBoard;
