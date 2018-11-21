// @flow

import React from 'react';
import radium from 'radium';
import logoText from '../static/images/header-logo-a.png';
import logoEng from '../static/images/header-logo-c.png';
import logo from '../static/images/header-logo-b.png';

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
    zIndex: 10,
    '@media (max-width: 479px)': {
      padding: '0 12px',
    },
  },
  logoText: {
    width: 111,
    height: 40,
    backgroundImage: `url(${logoText})`,
    backgroundSize: '111px 40px',
    '@media (max-width: 479px)': {
      width: 86,
      height: 30,
      backgroundSize: '86px 30px',
    },
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
    bottom: -26,
    left: 0,
    borderLeft: '84px solid transparent',
    borderRight: '84px solid transparent',
    borderTop: '26px solid #343534',
    '@media (max-width: 374px)': {
      borderLeft: '60px solid transparent',
      borderRight: '60px solid transparent',
    },
  },
  logoSquare: {
    width: 168,
    height: 95,
    backgroundColor: '#343534',
    position: 'absolute',
    display: 'flex',
    justifyContent: 'center',
    '@media (max-width: 374px)': {
      width: 120,
    },
  },
  logo: {
    width: 92,
    height: 88,
    margin: '16px 0 0 0',
    backgroundImage: `url(${logo})`,
    backgroundSize: '92px 88px',
    position: 'absolute',
  },
  logoEngWrapper: {
    width: 111,
    height: 32,
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'flex-end',
    alignItems: 'center',
    '@media (max-width: 479px)': {
      width: 86,
    },
  },
  logoEng: {
    width: 79,
    height: 32,
    backgroundImage: `url(${logoEng})`,
    backgroundSize: '79px 32px',
    '@media (max-width: 479px)': {
      width: 59,
      height: 24,
      backgroundSize: '59px 24px',
    },
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
      <div style={styles.logoEngWrapper}>
        <div style={styles.logoEng} />
      </div>
    </header>
  );
}

export default radium(Header);
