// @flow

import React from 'react';
import FieldImage from './elements/FieldImage.jsx';
import place1 from '../static/images/place-01.png';
import place2 from '../static/images/place-02.png';
import place3 from '../static/images/place-03.png';
import place4 from '../static/images/place-04.png';

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
    fontSize: 36,
    fontWeight: 600,
    letterSpacing: 1.5,
    color: '#2fa3c4',
    margin: '80px 0 48px 0',
  },
  imagesWrapper: {
    width: '100%',
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'flex-start',
    alignItems: 'center',
  },
};

function FieldSection() {
  return (
    <div id="field" style={styles.wrapper}>
      <h2 style={styles.title}>場地介紹</h2>
      <div style={styles.imagesWrapper}>
        <FieldImage
          isBig
          title="五星級繩索訓練場地"
          content="瀚登小將繩索訓練中心已通過TRAA 台灣繩索技術協會審查，成為TRAA核可的繩索技術訓練中心。現場有模擬塔讓學員攀登，以及模擬建築物外牆施作地形，劇場貓道作業模擬等，讓外場工作環境可以融入至訓練場練習。"
          image={place1} />
      </div>
      <div style={styles.imagesWrapper}>
        <FieldImage
          title="學科教室"
          content="容納20人的上課空間，有專業的投影設備及大螢幕電視，將學科教材清晰呈現給上課學員。"
          image={place2} />
        <FieldImage
          title="繩索舞蹈區"
          content="垂直平滑牆面與地面，讓學員可盡情發揮動作伸展， 無論垂直擺盪、牆面跳躍翻滾，都能滿足想挑戰及超越的你來此學習。"
          image={place3} />
        <FieldImage
          title="休息會客室"
          image={place4} />
      </div>
    </div>
  );
}

export default FieldSection;
