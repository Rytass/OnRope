// @flow

import React from 'react';
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
    position: 'relative',
  },
  vedioWrapper: {
    width: 600,
    height: 338,
    backgroundColor: '#fff',
    margin: '0 60px 0 0',
  },
  nightInfoWrapper: {
    display: 'flex',
    alignSelf: 'stretch',
    flexDirection: 'column',
    justifyContent: 'flex-start',
    alignItems: 'flex-start',
  },
  title: {
    fontSize: 24,
    fontWeight: 600,
    lineHeight: 1.5,
    letterSpacing: 2,
    color: 'rgba(255, 255, 255, 0.92)',
    margin: '0 0 10px 0',
  },
  subtitle: {
    fontSize: 16,
    lineHeight: 1.75,
    fontWeight: 300,
    letterSpacing: 1,
    color: 'rgba(255, 255, 255, 0.87)',
    margin: 0,
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
    top: 88,
    right: 60,
  },
};

function NightSection() {
  return (
    <div style={styles.nightSection}>
      <div style={styles.vedioWrapper}>
        vedio
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
          <Button text="立即報名" url="https://www.google.com" isThin />
        </div>
      </div>
      <div style={styles.image} />
    </div>
  );
}

export default NightSection;
