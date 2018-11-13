// @flow

import React, { PureComponent } from 'react';
import Header from '../components/Header.jsx';
import SlideShow from '../components/SlideShow.jsx';
import ReasonSection from '../components/ReasonSection.jsx';

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
        <SlideShow />
        <ReasonSection />
      </div>
    );
  }
}

export default MainPage;
