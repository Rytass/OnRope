// @flow

import React from 'react';
import radium from 'radium';
import logo from '../static/images/header-logo-b.png';
import fbIcon from '../static/images/icon-32-facebook.png';
import atIcon from '../static/images/icon-32-line-at.png';
import qrcodeDaytime from '../static/images/qrcode-daytime.png';
import qrcodeNighttime from '../static/images/qrcode-nighttime.png';

const styles = {
  wrppaer: {
    width: '100%',
    maxWidth: 1440,
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#1b4550',
    padding: '56px 44px 42px 64px',
    margin: '0 auto',
    '@media (max-width: 1390px)': {
      padding: '56px 4px 42px 24px',
    },
    '@media (max-width: 1250px)': {
      flexDirection: 'column',
      alignItems: 'center',
    },
    '@media (max-width: 767px)': {
      flexDirection: 'column',
      alignItems: 'center',
      padding: '69px 36px 24px 36px',
    },
    '@media (max-width: 374px)': {
      flexDirection: 'column',
      alignItems: 'center',
      padding: '69px 12px 24px 12px',
    },
  },
  footerWrapper: {
    flex: 1,
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    '@media (max-width: 767px)': {
      flexDirection: 'column',
      alignItems: 'center',
    },
  },
  logo: {
    width: 119,
    height: 113,
    margin: '0 52px 0 0',
    '@media (max-width: 1250px)': {
      margin: 0,
    },
    '@media (max-width: 767px)': {
      margin: '0 0 32px 0',
    },
  },
  infoWrapper: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: '0 100px 0 0',
    '@media (min-width: 1251px)': {
      flex: 1,
    },
    '@media (max-width: 1390px)': {
      padding: '0 50px 0 0',
    },
    '@media (max-width: 1250px)': {
      flexDirection: 'column',
      alignItems: 'flex-start',
      padding: '0 50px 0 40px',
    },
    '@media (max-width: 767px)': {
      flexDirection: 'column',
      alignItems: 'flex-start',
      padding: 0,
    },
  },
  companyBlock: {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'flex-start',
    alignItems: 'flex-start',
    '@media (max-width: 1250px)': {
      margin: '0 0 28px 0',
    },
    '@media (max-width: 767px)': {
      margin: '0 0 20px 0',
    },
  },
  compantTitle: {
    fontSize: 18,
    fontWeight: 600,
    letterSpacing: 1.3,
    color: '#fff',
    margin: '0 0 2px 0',
  },
  compantSubtitle: {
    fontSize: 16,
    fontWeight: 600,
    color: '#fff',
    margin: '0 0 6px 0',
  },
  companyContent: {
    fontSize: 14,
    fontWeight: 300,
    lineHeight: 1.71,
    letterSpacing: 1,
    color: 'rgba(255, 255, 255, 0.87)',
    margin: '2px 0',
  },
  copyright: {
    fontSize: 14,
    fontWeight: 300,
    lineHeight: 1.71,
    letterSpacing: 1,
    color: 'rgba(255, 255, 255, 0.87)',
    margin: '20px 0 0 0',
    '@media (max-width: 1250px)': {
      display: 'none',
    },
  },
  rwdCopyright: {
    display: 'none',
    '@media (max-width: 1250px)': {
      display: 'block',
      fontSize: 14,
      fontWeight: 300,
      lineHeight: 1.71,
      letterSpacing: 1,
      color: 'rgba(255, 255, 255, 0.87)',
      margin: '20px 0 0 0',
    },
  },
  addressBlock: {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'flex-start',
    alignItems: 'flex-start',
    '@media (max-width: 1250px)': {
      margin: '0 0 28px 0',
    },
    '@media (max-width: 767px)': {
      margin: '0 0 20px 0',
    },
  },
  addressTitle: {
    fontSize: 18,
    fontWeight: 600,
    letterSpacing: 1.3,
    color: '#fff',
    margin: '6px 0',
  },
  addressContent: {
    fontSize: 14,
    fontWeight: 300,
    lineHeight: 1.71,
    letterSpacing: 1,
    color: 'rgba(255, 255, 255, 0.87)',
    margin: 0,
  },
  linkBlock: {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'flex-start',
    alignItems: 'flex-start',
  },
  linkTitle: {
    fontSize: 18,
    fontWeight: 600,
    letterSpacing: 1.3,
    color: '#fff',
    margin: '0 0 16px 0',
  },
  icon: {
    width: 32,
    height: 32,
  },
  fbLink: {
    margin: '0 40px 0 0',
  },
  qrcodeWrapper: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'flex-end',
    alignItems: 'center',
    '@media (max-width: 1250px)': {
      flexDirection: 'column',
    },
    '@media (max-width: 767px)': {
      display: 'none',
    },
  },
  qrcodeBlock: {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'flex-start',
    alignItems: 'center',
    margin: '0 20px',
    '@media (max-width: 1250px)': {
      margin: 0,
    },
  },
  qrcodeBlockRwdMargin: {
    '@media (max-width: 1250px)': {
      margin: '0 0 32px 0',
    },
  },
  qrcode: {
    width: 120,
    height: 120,
    margin: '0 0 16px 0',
  },
  qrcodeText: {
    fontSize: 14,
    letterSpacing: 1,
    color: '#fff',
  },
};

function Footer() {
  return (
    <div style={styles.wrppaer}>
      <div style={styles.footerWrapper}>
        <img src={logo} alt="logo" style={styles.logo} />
        <div style={styles.infoWrapper}>
          <div style={styles.companyBlock}>
            <p style={styles.compantTitle}>瀚登小將有限公司</p>
            <p style={styles.compantSubtitle}>Oh my rope CO., LTD</p>
            <p style={styles.companyContent}>地址：臺北市南港區興中路44巷16號4樓</p>
            <p style={styles.companyContent}>電話：(02)2783-9604</p>
            <p style={styles.copyright}>© Oh my rope training centre 2018</p>
          </div>
          <div style={styles.addressBlock}>
            <p style={styles.addressTitle}>繩索技術訓練中心</p>
            <p style={styles.addressContent}>地址：新北市泰山區中央路5巷32-1號</p>
            <p style={styles.addressContent}>電話：(02)2902-0376</p>
          </div>
          <div style={styles.linkBlock}>
            <span style={styles.linkTitle}>社群連結</span>
            <div>
              <a
                href="https://www.facebook.com/Oh-My-Rope瀚登小將繩索訓練中心-2082857378646335/"
                style={styles.fbLink}
                target="_blank"
                rel="noopener noreferrer">
                <img src={fbIcon} alt="facebook-icon" style={styles.icon} />
              </a>
              <a
                href="line://home/public/main?id=dhd6008w"
                target="_blank"
                rel="noopener noreferrer">
                <img src={atIcon} alt="at-icon" style={styles.icon} />
              </a>
            </div>
          </div>
        </div>
        <div style={styles.qrcodeWrapper}>
          <div style={[styles.qrcodeBlock, styles.qrcodeBlockRwdMargin]}>
            <img src={qrcodeDaytime} alt="qrcode-daytime" style={styles.qrcode} />
            <span style={styles.qrcodeText}>日間部報名表單</span>
          </div>
          <div style={styles.qrcodeBlock}>
            <img src={qrcodeNighttime} alt="qrcode-nighttime" style={styles.qrcode} />
            <span style={styles.qrcodeText}>夜間部報名表單</span>
          </div>
        </div>
      </div>
      <p style={styles.rwdCopyright}>© Oh my rope training centre 2018</p>
    </div>
  );
}

export default radium(Footer);
