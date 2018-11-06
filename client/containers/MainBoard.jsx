// @flow

import React, { PureComponent } from 'react';

const styles = {
  placement: {
    display: 'flex',
    width: '100%',
    height: '100%',
    alignItems: 'flex-start',
    justifyContent: 'flex-start',
    flexDirection: 'column',
    position: 'relative',
    backgroundColor: '#000',
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
            TAAAAA
          </div>
        </main>
      </div>
    );
  }
}

export default MainBoard;
