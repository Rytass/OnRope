// @flow

import React from 'react';
import radium from 'radium';
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
    '@media (max-width: 1100px)': {
      flexDirection: 'column',
    },
    '@media (max-width: 767px)': {
      padding: '52px 0 64px 0',
    },
  },
  infoWrapper: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'center',
    '@media (max-width: 767px)': {
      flexDirection: 'column',
      justifyContent: 'center',
      alignItems: 'center',
    },
  },
  image: {
    width: 267,
    height: 200,
    '@media (max-width: 1100px)': {
      margin: '0 12px',
    },
    '@media (max-width: 767px)': {
      margin: '12px 0',
    },
  },
  main: {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    padding: '0 97px',
    '@media (max-width: 1100px)': {
      display: 'none',
    },
  },
  rwdMain: {
    display: 'none',
    '@media (max-width: 1100px)': {
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      justifyContent: 'center',
      padding: '80px 0 0 0',
    },
    '@media (max-width: 767px)': {
      padding: '28px 0 0 0',
    },
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
    <div id="connection" style={styles.wrapper}>
      <div style={styles.infoWrapper}>
        <img src={connection1} alt="connection" style={styles.image} />
        <div style={styles.main}>
          <div style={styles.textWrapper}>
            <p style={styles.text}>教練到你家</p>
            <p style={styles.text}>裝備一起ＧＯ</p>
            <p style={styles.text}>繩索技術教學客製專案</p>
          </div>
          <Button
            text="與我聯繫"
            onClick={() => window.open('mailto:ohmyrope@gmail.com')}
            isHigher />
        </div>
        <img src={connection2} alt="connection" style={styles.image} />
      </div>
      <div style={styles.rwdMain}>
        <div style={styles.textWrapper}>
          <p style={styles.text}>教練到你家</p>
          <p style={styles.text}>裝備一起ＧＯ</p>
          <p style={styles.text}>繩索技術教學客製專案</p>
        </div>
        <Button
          text="與我聯繫"
          onClick={() => window.open('mailto:ohmyrope@gmail.com')}
          isHigher />
      </div>
    </div>
  );
}

export default radium(ConnectionSection);
