// @flow

import React, { Fragment } from 'react';
import radium from 'radium';
import Button from './elements/Button.jsx';
import classPhoto from '../static/images/class-photo-07.png';

const styles = {
  wrapper: {
    width: '100%',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#2d2d2d',
    padding: '100px 0 52px 0',
    '@media (max-width: 1023px)': {
      padding: '0 0 40px 0',
    },
  },
  imageBackground: {
    width: 920,
    height: 500,
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundSize: 'cover',
    backgroundPosition: 'center',
    backgroundRepeat: 'no-repeat',
    backgroundImage: `url(${classPhoto})`,
    '@media (max-width: 1023px)': {
      width: '100%',
      height: 417,
    },
    '@media (max-width: 767px)': {
      height: 300,
    },
    '@media (max-width: 479px)': {
      height: 203,
    },
  },
  title: {
    fontSize: 48,
    fontWeight: 600,
    letterSpacing: 6.7,
    color: '#fff',
    '@media (max-width: 767px)': {
      fontSize: 36,
      letterSpacing: 5,
    },
  },
  textWrapper: {
    width: 920,
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    margin: '48px 0 0 0',
    '@media (max-width: 1023px) and (min-width: 768px)': {
      margin: '40px 0 0 0',
      width: 600,
    },
    '@media (max-width: 767px) and (min-width: 375px)': {
      margin: '40px 0 0 0',
      width: 327,
    },
    '@media (max-width: 374px)': {
      margin: '40px 0 0 0',
      width: 307,
    },
  },
  text: {
    fontSize: 16,
    fontWeight: 300,
    lineHeight: 1.75,
    letterSpacing: 1,
    color: 'rgba(255, 255, 255, 0.87)',
    margin: 0,
    '@media (max-width: 1023px)': {
      textAlign: 'center',
    },
  },
  introductionSection: {
    width: '100%',
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'flex-start',
    backgroundColor: '#273539',
    padding: '64px 0',
    '@media (max-width: 1300px)': {
      flexDirection: 'column',
      justifyContent: 'flex-start',
      alignItems: 'center',
      padding: '0 0 40px 0',
    },
    '@media (max-width: 767px)': {
      padding: '0 0 48px 0',
    },
  },
  vedioWrapper: {
    width: 600,
    height: 338,
    margin: '0 60px 0 0',
    '@media (max-width: 1300px)': {
      width: '100%',
      height: 433,
      margin: '0 0 40px 0',
    },
    '@media (max-width: 767px)': {
      height: 317,
    },
    '@media (max-width: 479px)': {
      height: 211,
    },
  },
  iframe: {
    border: 0,
    width: '100%',
    height: '100%',
  },
  introInfoWrapper: {
    width: 600,
    display: 'flex',
    alignSelf: 'stretch',
    flexDirection: 'column',
    justifyContent: 'flex-start',
    alignItems: 'flex-start',
    '@media (max-width: 1300px)': {
      margin: '0 auto',
      alignItems: 'center',
    },
    '@media (max-width: 767px) and (min-width: 375px)': {
      margin: '0 auto',
      alignItems: 'center',
      width: 327,
    },
    '@media (max-width: 374px)': {
      width: 307,
      margin: '0 auto',
      alignItems: 'center',
    },
  },
  introInfoTitle: {
    fontSize: 24,
    fontWeight: 600,
    lineHeight: 1.5,
    letterSpacing: 2,
    color: 'rgba(255, 255, 255, 0.92)',
    margin: '0 0 10px 0',
    '@media (max-width: 1300px)': {
      fontSize: 28,
    },
    '@media (max-width: 767px)': {
      fontSize: 20,
      letterSpacing: 1.4,
    },
  },
  content: {
    fontSize: 16,
    lineHeight: 1.75,
    fontWeight: 300,
    letterSpacing: 1,
    color: 'rgba(255, 255, 255, 0.87)',
    margin: '0 0 32px 0',
    '@media (max-width: 1300px)': {
      margin: '0 0 40px 0',
    },
    '@media (max-width: 767px)': {
      textAlign: 'center',
      letterSpacing: 0.7,
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
};

function VerticalSection() {
  return (
    <Fragment>
      <div style={styles.wrapper}>
        <div style={styles.imageBackground}>
          <p style={styles.title}>繩索垂直舞蹈</p>
        </div>
        <div style={styles.textWrapper}>
          <p style={styles.text}>垂直舞蹈是什麼呢?</p>
          <p style={styles.text}>垂直舞蹈(Vertical Dance)是一種非常令人興奮的新舞蹈形式。</p>
          <p style={styles.text}>我們穿著攀岩裝備來跳這種舞，包括了繩索，運動吊帶，以及繩索下降器等等。</p>
          <p style={styles.text}>這些裝備能夠確保你不會從高空墜落，即使在空中全身放鬆，手腳都放空，全身上下都不出任何力氣，也不會因此而墜落。</p>
          <p style={styles.text}>所以不同於風險較高的特技表演，這是一種超級安全的高空舞蹈。</p>
          <p style={styles.text}>人們可以懸掛在各種不同的垂直表面上跳舞，像是劇場內/建築物的外牆/甚至是野外環境的岩壁上。</p>
          <p style={styles.text}>全世界目前還沒有非常多這樣的垂直舞蹈演出團體，幾個比較有名的包括美國/西班牙/義大利/威爾斯，</p>
          <p style={styles.text}>而其中最為知名就是美國舞團Bandaloop。</p>
        </div>
      </div>
      <div style={styles.introductionSection}>
        <div style={styles.vedioWrapper}>
          <iframe
            style={styles.iframe}
            title="video"
            frameBorder={0}
            src="https://youtu.be/CqCAcZu0R1c" />
        </div>
        <div style={styles.introInfoWrapper}>
          <h2 style={styles.introInfoTitle}>本中心是目前台灣唯一擁有專門垂直舞蹈的教室，最專業的空間，最安全的環境</h2>
          <p style={styles.content}>
            朱將輔老師曾與知名環境組織(綠色和平)共同合作一場關於海洋塑膠垃圾問題的高空演出，從編舞到訓練，十幾名志願義工於2017年初在台北環保署12層樓的大樓外牆，跳了一場長達十幾分鐘的高空舞蹈，美國舞團Bandaloop的舞者也在此次演出中協助訓練，這是有史以來台灣人首次做了這樣的演出，也是我們首次與Bandaloop建立了友誼與連結。(在重大事件裡有連結)
          </p>
          <p style={styles.content}>
            接下來的一年多，朱老師也三度遠赴美國參加Bandaloop的舞蹈工作坊，將更多垂直舞蹈的經驗帶回台灣。Oh My Rope！瀚登小將的垂直舞蹈老師朱將輔，同時擁有台灣/英國/美國的工業繩索技術三級證照，也是目前台灣繩索技術協會唯一的女性教練及考官，這樣的背景讓她永遠會把"安全"擺在第一。
          </p>
          <div style={styles.infoWrapper}>
            <p style={styles.infoTitle}>課程收費</p>
            <div style={styles.priceWrapper}>
              <p style={styles.infoText}>NT$18,000元</p>
              <p style={styles.infoText}>4週 / 共計16小時</p>
            </div>
            <Button text="立即報名" url="http://t.cn/ReQCgvg" isThin />
          </div>
        </div>
      </div>
    </Fragment>
  );
}

export default radium(VerticalSection);
