// @flow

import React, { PureComponent } from 'react';
import Header from '../components/Header.jsx';

const styles = {
  wrapper: {
    width: '100%',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'flex-start',
    justifyContent: 'flex-start',
  },
};

type Props = {

}

class MainPage extends PureComponent<Props> {
  render() {
    return (
      <div style={styles.wrapper}>
        <Header />
      </div>
    );
  }
}

export default MainPage;
