// @flow

import React from 'react';
import logo from '../static/images/header-logo-b.png';
import fbIcon from '../static/images/icon-32-facebook.png';
import atIcon from '../static/images/icon-32-line-at.png';
import qrcodeDaytime from '../static/images/qrcode-daytime.png';
import qrcodeNighttime from '../static/images/qrcode-nighttime.png';

const styles = {
  wrppaer: {
    width: '100%',
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#1b4550',
    padding: '56px 0 42px 0',
  },
  logo: {
    width: 119,
    height: 113,
    margin: '0 17px',
  },
  companyBlock: {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'flex-start',
    alignItems: 'flex-start',
    margin: '0 35px',
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
  },
  addressBlock: {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'flex-start',
    alignItems: 'flex-start',
    margin: '0 25px',
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
    margin: '0 102px 0 25px',
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
  qrcodeBlock: {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'flex-start',
    alignItems: 'center',
    margin: '0 20px',
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
      <img src={logo} alt="logo" style={styles.logo} />
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
            href="https://www.google.com"
            style={styles.fbLink}
            target="_blank"
            rel="noopener noreferrer">
            <img src={fbIcon} alt="facebook-icon" style={styles.icon} />
          </a>
          <a
            href="https://www.google.com"
            target="_blank"
            rel="noopener noreferrer">
            <img src={atIcon} alt="at-icon" style={styles.icon} />
          </a>
        </div>
      </div>
      <div style={styles.qrcodeBlock}>
        <img src={qrcodeDaytime} alt="qrcode-daytime" style={styles.qrcode} />
        <span style={styles.qrcodeText}>日間部報名表單</span>
      </div>
      <div style={styles.qrcodeBlock}>
        <img src={qrcodeNighttime} alt="qrcode-nighttime" style={styles.qrcode} />
        <span style={styles.qrcodeText}>夜間部報名表單</span>
      </div>
    </div>
  );
}

export default Footer;
