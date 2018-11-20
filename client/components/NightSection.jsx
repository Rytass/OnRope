// @flow

import React from 'react';
import radium from 'radium';
import Button from './elements/Button.jsx';
import night from '../static/images/icon-night.png';

const styles = {
  nightSection: {
    width: '100%',
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'flex-start',
    backgroundColor: '#000',
    padding: '88px 0',
    '@media (max-width: 1200px)': {
      flexDirection: 'column',
      padding: '0 0 56px 0',
    },
    '@media (max-width: 767px)': {
      flexDirection: 'column',
      padding: '0 0 48px 0',
    },
  },
  vedioWrapper: {
    width: 600,
    height: 338,
    margin: '0 60px 0 0',
    '@media (max-width: 1200px)': {
      width: '100%',
      height: 433,
      margin: 0,
    },
    '@media (max-width: 767px)': {
      width: '100%',
      height: 338,
      margin: 0,
    },
    '@media (max-width: 479px)': {
      width: '100%',
      height: 211,
      margin: 0,
    },
  },
  iframe: {
    border: 0,
    width: '100%',
    height: '100%',
  },
  nightInfoWrapper: {
    display: 'flex',
    alignSelf: 'stretch',
    flexDirection: 'column',
    justifyContent: 'flex-start',
    alignItems: 'flex-start',
    position: 'relative',
    '@media (max-width: 1200px)': {
      alignItems: 'center',
    },
  },
  title: {
    fontSize: 24,
    fontWeight: 600,
    lineHeight: 1.5,
    letterSpacing: 2,
    color: 'rgba(255, 255, 255, 0.92)',
    margin: '0 0 10px 0',
    '@media (max-width: 1200px)': {
      width: 600,
      margin: '40px 0 10px 0',
    },
    '@media (max-width: 767px)': {
      width: 327,
      margin: '24px 0 10px 0',
    },
  },
  subtitle: {
    fontSize: 16,
    lineHeight: 1.75,
    fontWeight: 300,
    letterSpacing: 1,
    color: 'rgba(255, 255, 255, 0.87)',
    margin: 0,
    '@media (max-width: 1200px)': {
      width: 600,
      margin: '0 0 16px 0',
    },
    '@media (max-width: 767px)': {
      width: 327,
      margin: '0 0 40px 0',
    },
  },
  infoWrapper: {
    flex: 1,
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'flex-end',
    alignItems: 'flex-start',
  },
  infoTitle: {
    fontSize: 16,
    letterSpacing: 1,
    lineHeight: 1,
    color: '#fff',
    margin: 0,
  },
  priceWrapper: {
    margin: '8px 0 12px 0',
  },
  infoText: {
    fontSize: 20,
    fontWeight: 900,
    lineHeight: '30px',
    letterSpacing: 0,
    color: '#66fae4',
    margin: 0,
  },
  image: {
    width: 191,
    height: 190,
    backgroundSize: 'cover',
    backgroundPosition: 'center',
    backgroundRepeat: 'no-repeat',
    backgroundImage: `url(${night})`,
    position: 'absolute',
    top: 0,
    right: 0,
    '@media (max-width: 1200px)': {
      top: 42,
      right: 40,
    },
    '@media (max-width: 479px)': {
      top: 32,
      right: 32,
    },
  },
};

function NightSection() {
  return (
    <div style={styles.nightSection}>
      <div style={styles.vedioWrapper}>
        <iframe
          style={styles.iframe}
          title="video"
          frameBorder={0}
          src="https://youtu.be/cGmmHX9dRmU" />
      </div>
      <div style={styles.nightInfoWrapper}>
        <h2 style={styles.title}>TRAA一級繩索技術證照夜間班開課了</h2>
        <p style={styles.subtitle}>取得證照不必請假被扣薪，只要拚晚上一樣可以學習並考取證照！</p>
        <div style={styles.infoWrapper}>
          <p style={styles.infoTitle}>夜間課程收費 (平日1900~2300)</p>
          <div style={styles.priceWrapper}>
            <p style={styles.infoText}>NT$9,000元</p>
            <p style={styles.infoText}>7堂 / 共計28小時</p>
          </div>
          <Button text="立即報名" url="https://reurl.cc/pmRx8" isThin />
          <div style={styles.image} />
        </div>
      </div>
    </div>
  );
}

export default radium(NightSection);
