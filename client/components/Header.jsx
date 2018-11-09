// @flow

import React from 'react';
import logoText from '../static/images/logoText.png';
import logoEng from '../static/images/logoEng.png';
import logo from '../static/images/logo.png';

const styles = {
  wrapper: {
    width: '100%',
    height: 80,
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'flex-start',
    alignItems: 'center',
    padding: '0 32px',
    backgroundColor: '#343534',
  },
  logoText: {
    width: 111,
    height: 40,
    backgroundImage: `url(${logoText})`,
    backgroundSize: '111px 40px',
  },
  logoWrapper: {
    display: 'flex',
    justifyContent: 'center',
    flexGrow: '1',
  },
  logoOpacityWrapper: {
    width: 92,
    height: 107,
    display: 'flex',
    justifyContent: 'center',
    margin: '16px 0 0 0',
    position: 'relative',
  },
  logoTriangle: {
    width: 0,
    height: 0,
    position: 'absolute',
    bottom: -33,
    left: 0,
    borderLeft: '84px solid transparent',
    borderRight: '84px solid transparent',
    borderTop: '33px solid #343534',
  },
  logoSquare: {
    width: 168,
    height: 95,
    backgroundColor: '#343534',
    position: 'absolute',
    display: 'flex',
    justifyContent: 'center',
  },
  logo: {
    width: 92,
    height: 88,
    margin: '16px 0 0 0',
    backgroundImage: `url(${logo})`,
    backgroundSize: '92px 88px',
    position: 'absolute',
  },
  logoEng: {
    width: '79px',
    height: '32px',
    backgroundImage: `url(${logoEng})`,
    backgroundSize: '79px 32px',
  },
};

function Header() {
  return (
    <header style={styles.wrapper}>
      <div style={styles.logoText} />
      <div style={styles.logoWrapper}>
        <div style={styles.logoOpacityWrapper}>
          <div style={styles.logoSquare}>
            <div style={styles.logoTriangle} />
            <div style={styles.logo} />
          </div>
        </div>
      </div>
      <div style={styles.logoEng} />
    </header>
  );
}

export default Header;
