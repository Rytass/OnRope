// @flow

import React, { PureComponent } from 'react';

const styles = {
  wrapper: {
    height: 750,
    padding: 8,
    width: '100%',
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'flex-start',
    justifyContent: 'flex-start',
    position: 'relative',
  },
};

type Props = {

}

class MainPage extends PureComponent<Props> {
  render() {
    return (
      <div style={styles.wrapper}>
        1233
      </div>
    );
  }
}

export default MainPage;
