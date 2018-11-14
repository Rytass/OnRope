// @flow

import React from 'react';
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
  },
  title: {
    fontSize: 48,
    fontWeight: 600,
    letterSpacing: 6.7,
    color: '#fff',
  },
  textWrapper: {
    width: 920,
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    margin: '48px 0 0 0',
  },
  text: {
    fontSize: 16,
    lineHeight: 1.75,
    letterSpacing: 1,
    color: 'rgba(255, 255, 255, 0.87)',
    margin: 0,
  },
};

function VerticalSection() {
  return (
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
  );
}

export default VerticalSection;
