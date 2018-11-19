// @flow

import React from 'react';
import Button from './elements/Button.jsx';
import connection1 from '../static/images/connection-01.png';
import connection2 from '../static/images/connection-02.png';

const styles = {
  wrapper: {
    width: '100%',
    backgroundColor: '#2d2d2d',
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'center',
    padding: '80px 0 86px 0',
  },
  image: {
    width: 267,
    height: 200,
  },
  main: {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    padding: '0 97px',
  },
  textWrapper: {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    margin: '0 0 32px 0',
  },
  text: {
    fontSize: 20,
    fontWeight: 600,
    letterSpacing: 1.4,
    color: '#fff',
    margin: 0,
  },
};

function ConnectionSection() {
  return (
    <div style={styles.wrapper}>
      <img src={connection1} alt="connection" style={styles.image} />
      <div style={styles.main}>
        <div style={styles.textWrapper}>
          <p style={styles.text}>教練到你家</p>
          <p style={styles.text}>裝備一起ＧＯ</p>
          <p style={styles.text}>繩索技術教學客製專案</p>
        </div>
        <Button text="與我聯繫" url="ohmyrope@gmail.com" isHigher />
      </div>
      <img src={connection2} alt="connection" style={styles.image} />
    </div>
  );
}

export default ConnectionSection;
