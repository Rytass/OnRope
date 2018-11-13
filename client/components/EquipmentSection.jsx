// @flow

import React from 'react';
import EquipmentImage from './elements/EquipmentImage.jsx';
import equipment1 from '../static/images/equipment-01.png';
import equipment2 from '../static/images/equipment-02.png';
import equipment3 from '../static/images/equipment-03.png';
import equipment4 from '../static/images/equipment-04.png';
import equipment5 from '../static/images/equipment-05.png';
import equipment6 from '../static/images/equipment-06.png';
import equipment7 from '../static/images/equipment-07.png';
import equipment8 from '../static/images/equipment-08.png';
import equipment9 from '../static/images/equipment-09.png';
import equipment10 from '../static/images/equipment-10.png';

const styles = {
  wrapper: {
    width: '100%',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'flex-start',
    alignItems: 'center',
    backgroundColor: '#2d2d2d',
  },
  title: {
    fontSize: 36,
    fontWeight: 600,
    letterSpacing: 1.5,
    color: '#2fa3c4',
    margin: '80px 0 48px 0',
  },
  subtitle: {
    fontSize: 28,
    fontWeight: 600,
    letterSpacing: 2,
    color: '#fff',
    margin: '0 0 24px 0',
  },
  imagesWrapper: {
    width: '100%',
    padding: '0 147px',
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
    margin: '0 0 56px 0',
  },
  footer: {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'flex-start',
    alignItems: 'center',
    padding: '16px 0 64px 0',
  },
  footerText: {
    fontSize: 16,
    fontWeight: 600,
    lineHeight: 2,
    color: '#fff',
  },
};

function EquipmentSection() {
  return (
    <div style={styles.wrapper}>
      <h2 style={styles.title}>裝備介紹&代購商品</h2>
      <h3 style={styles.subtitle}>工業繩索裝備</h3>
      <div style={styles.imagesWrapper}>
        <EquipmentImage
          text="RESCUE PRO 2.0全身式吊帶"
          image={equipment1} />
        <EquipmentImage
          text="ASAP LOCK移動防墜器(具上鎖功能)"
          image={equipment2} />
        <EquipmentImage
          text="EN FORCER後備裝備"
          image={equipment3} />
        <EquipmentImage
          text="勢能吸收器&可調式腳踏圈(腳帶環)"
          image={equipment4} />
        <EquipmentImage
          text="手握式上升器"
          image={equipment5} />
      </div>
      <div style={styles.imagesWrapper}>
        <EquipmentImage
          text="80cm牛尾繩 SKYLOTEC X-TREM DYNAMIK 11mm 動力繩,符合EN892"
          image={equipment6} />
        <EquipmentImage
          text="OVAL SCREW手動上鎖鉤環"
          image={equipment7} />
        <EquipmentImage
          text="DOUBLE-O TRI 自動上鎖鉤環"
          image={equipment8} />
        <EquipmentImage
          text="Lory PRO 堅固強大的多功能下降器，最大下降荷重225公斤。具防恐慌及自動上鎖功能，是您繩索作業最佳利器。"
          image={equipment9} />
        <EquipmentImage
          text="PRO SLING短掛"
          image={equipment10} />
      </div>
      <div style={styles.footer}>
        <span style={styles.footerText}>以上商品瀚登皆有代購</span>
        <span style={styles.footerText}>上課詢問/電話詢問02-2902-0376</span>
      </div>
    </div>
  );
}

export default EquipmentSection;
