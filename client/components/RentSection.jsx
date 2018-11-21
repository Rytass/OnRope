// @flex

import React from 'react';
import radium from 'radium';
import Button from './elements/Button.jsx';
import fieldImage from '../static/images/eq-photo-01.png';
import productImage from '../static/images/product-01.png';

const styles = {
  wrapper: {
    width: '100%',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'flex-start',
    alignItems: 'center',
    backgroundColor: '#212121',
  },
  title: {
    fontSize: 24,
    fontWeight: 600,
    lineHeight: 1,
    letterSpacing: 2,
    color: 'rgba(255, 255, 255, 0.92)',
    margin: '80px 0 48px 0',
    '@media (max-width: 767px)': {
      fontSize: 28,
      margin: '48px 0 24px 0',
    },
  },
  rentWrapper: {
    width: '100%',
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'flex-start',
    '@media (max-width: 1300px)': {
      flexDirection: 'column',
      justifyContent: 'flex-start',
      alignItems: 'center',
    },
  },
  fieldImage: {
    width: 600,
    height: 380,
    margin: '0 60px 0 0',
    '@media (max-width: 1300px)': {
      margin: '0 0 40px 0',
    },
    '@media (max-width: 767px)': {
      width: '100%',
      height: 290,
      margin: '0 0 25px 0',
    },
    '@media (max-width: 479px)': {
      width: '100%',
      height: 211,
      margin: '0 0 25px 0',
    },
  },
  rentContentWrapper: {
    width: 600,
    '@media (max-width: 767px) and (min-width: 375px)': {
      width: 327,
    },
    '@media (max-width: 374px)': {
      width: 307,
    },
  },
  contentText: {
    fontSize: 16,
    fontWeight: 300,
    lineHeight: '28px',
    letterSpacing: 1,
    color: 'rgba(255, 255, 255, 0.87)',
    margin: 0,
  },
  rentContent: {
    fontSize: 16,
    fontWeight: 300,
    lineHeight: '28px',
    letterSpacing: 1,
    color: 'rgba(255, 255, 255, 0.87)',
    margin: '26px 0 0 0',
  },
  blueText: {
    fontSize: 16,
    fontWeight: 600,
    lineHeight: '28px',
    letterSpacing: 1,
    color: '#45b3d2',
  },
  rentBtnWrapper: {
    width: '100%',
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    padding: '48px 0 0 0',
    '@media (max-width: 1300px)': {
      padding: '40px 0 0 0',
    },
  },
  rentHintText: {
    fontSize: 14,
    lineHeight: 1.71,
    letterSpacing: 1,
    color: '#fff',
    margin: '0 0 12px 0',
  },
  productWrapper: {
    width: '100%',
    display: 'flex',
    flexDirection: 'row',
    padding: '120px 0',
    justifyContent: 'center',
    alignItems: 'flex-start',
    '@media (max-width: 767px)': {
      flexDirection: 'column',
      justifyContent: 'flex-start',
      alignItems: 'center',
      padding: '80px 0',
    },
  },
  productImage: {
    width: 400,
    height: 400,
    margin: '0 40px 0 0',
    '@media (max-width: 1300px)': {
      width: 375,
      height: 375,
      margin: '0 24px 0 0',
    },
    '@media (max-width: 767px)': {
      width: 375,
      height: 375,
      margin: 0,
    },
    '@media (max-width: 374px)': {
      width: 320,
      height: 320,
      margin: 0,
    },
  },
  productContentWrapper: {
    width: 408,
    alignSelf: 'stretch',
    display: 'flex',
    flexDirection: 'column',
    '@media (min-width: 1301px)': {
      width: 321,
    },
    '@media (max-width: 767px) and (min-width: 375px)': {
      width: 327,
      margin: '0 auto',
    },
    '@media (max-width: 374px)': {
      width: 307,
      margin: '0 auto',
    },
  },
  productTitle: {
    fontSize: 28,
    fontWeight: 600,
    letterSpacing: 2,
    color: '#fff',
    margin: '0 0 24px 0',
    '@media (max-width: 767px)': {
      margin: '24px 0',
    },
  },
  productContent: {
    fontSize: 14,
    fontWeight: 300,
    lineHeight: '24px',
    letterSpacing: 1,
    color: 'rgba(255, 255, 255, 0.87)',
    margin: 0,
  },
  productBtnWrapper: {
    flex: 1,
    display: 'flex',
    alignItems: 'flex-end',
    '@media (max-width: 767px)': {
      margin: '32px 0 0 0',
    },
  },
};

function RentSection() {
  return (
    <div style={styles.wrapper}>
      <h2 style={styles.title}>場地租用申請</h2>
      <div style={styles.rentWrapper}>
        <img src={fieldImage} alt="field" style={styles.fieldImage} />
        <div style={styles.rentContentWrapper}>
          <p style={styles.contentText}>
            <span style={styles.blueText}>說明:</span>
            租借場地如欲使用裝備(現場內使用)
          </p>
          <p style={styles.contentText}>
            <span style={styles.blueText}>場租計算方式:</span>
            以人計算，採現場收費
          </p>
          <p style={styles.contentText}>
            全天 8:00-17:00，500/人
          </p>
          <p style={styles.contentText}>
            半天 8:00-12:00或13:00-17:00，250/人
          </p>
          <p style={styles.rentContent}>可使用場內現有繩索及表列之裝備(不使用也可以)，也包含享有場內的保險，場內有多組垂直繩索懸掛，並非淨空的場地，所以如需使用淨空的場地，請自行拆除原本的繩索及使用完後復歸回原本的樣子(需在租借時間內完成)。學科教室及廚房並沒有開放使用，但可使用浴室及會客間的沙發桌椅，場地租借前需事先完成填寫此表單，當日早上由管理員點交給使用人員，結束時也由管理員照表檢查清點並收回。如有裝備遺失或功能損壞需負賠償責任，可自行賠償一模一樣的裝備或是照價賠償 ! 場地與裝備的維護及使用需要彼此互相尊重，非常感謝您的體諒。</p>
        </div>
      </div>
      <div style={styles.rentBtnWrapper}>
        <div>
          <p style={styles.rentHintText}>如欲租借請預先填單確認數量</p>
          <Button text="預填租用表單" url="http://t.cn/RFx5dRh" />
        </div>
      </div>
      <div style={styles.productWrapper}>
        <img src={productImage} alt="product" style={styles.productImage} />
        <div style={styles.productContentWrapper}>
          <h2 style={styles.productTitle}>繩索保護套</h2>
          <p style={styles.productContent}>產品特色:厚布/魔鬼氈黏到不行/耐用指數超高/可捲起好收納</p>
          <p style={styles.productContent}>繩索保護套買十送一 </p>
          <p style={styles.productContent}>郵寄運費如下：</p>
          <p style={styles.productContent}>20條以內➡100元</p>
          <p style={styles.productContent}>21~40條➡150元</p>
          <p style={styles.productContent}>40條以上➡200元</p>
          <div style={styles.productBtnWrapper}>
            <Button text="前往訂購" url="http://t.cn/ReQN5sm " isHigher />
          </div>
        </div>
      </div>
    </div>
  );
}

export default radium(RentSection);
