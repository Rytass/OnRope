// @flow

import React from 'react';
import radium from 'radium';
import EquipmentImage from './elements/EquipmentImage.jsx';
import EquipmentModal from '../containers/EquipmentModal.jsx';
import equipment1 from '../static/images/equipment-01-1.jpg';
import equipment2 from '../static/images/equipment-02.jpg';
import equipment3 from '../static/images/equipment-03-1.jpg';
import equipment4 from '../static/images/equipment-04.jpg';
import equipment5 from '../static/images/equipment-05-1.jpg';
import equipment6 from '../static/images/equipment-06.jpg';
import equipment7 from '../static/images/equipment-07.jpg';
import equipment8 from '../static/images/equipment-08.jpg';
import equipment9 from '../static/images/equipment-09.jpg';
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
    '@media (max-width: 1200px)': {
      margin: '48px 0',
    },
    '@media (max-width: 374px)': {
      fontSize: 30,
    },
  },
  subtitle: {
    fontSize: 28,
    fontWeight: 600,
    letterSpacing: 2,
    color: '#fff',
    margin: '0 0 24px 0',
    '@media (max-width: 374px)': {
      fontSize: 24,
    },
  },
  equipsWrapper: {
    '@media (max-width: 1200px)': {
      width: '100%',
      display: 'flex',
      overflowX: 'scroll',
      padding: '0 12px',
    },
  },
  imagesWrapper: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'center',
    margin: '0 0 56px 0',
    '@media (max-width: 1200px)': {
      margin: '0 0 48px 0',
    },
    '@media (max-width: 479px)': {
      margin: '0 0 24px 0',
    },
  },
  footer: {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'flex-start',
    alignItems: 'center',
    padding: '16px 0 64px 0',
    '@media (max-width: 1200px)': {
      padding: '16px 0 60px 0',
    },
    '@media (max-width: 479px)': {
      padding: '16px 0 48px 0',
    },
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
      <div style={styles.equipsWrapper}>
        <div style={styles.imagesWrapper}>
          <EquipmentImage
            text="RESCUE PRO 2.0全身式吊帶"
            index={0}
            image={equipment1} />
          <EquipmentImage
            text="ASAP LOCK移動防墜器(具上鎖功能)"
            index={4}
            image={equipment2} />
          <EquipmentImage
            text="EN FORCER後備裝備"
            index={5}
            image={equipment3} />
          <EquipmentImage
            text="勢能吸收器&可調式腳踏圈(腳帶環)"
            index={7}
            image={equipment4} />
          <EquipmentImage
            text="手握式上升器"
            index={8}
            image={equipment5} />
        </div>
        <div style={styles.imagesWrapper}>
          <EquipmentImage
            text="80cm牛尾繩 SKYLOTEC X-TREM DYNAMIK 11mm 動力繩,符合EN892"
            index={10}
            image={equipment6} />
          <EquipmentImage
            text="OVAL SCREW手動上鎖鉤環"
            index={11}
            image={equipment7} />
          <EquipmentImage
            text="DOUBLE-O TRI 自動上鎖鉤環"
            index={12}
            image={equipment8} />
          <EquipmentImage
            text="Lory PRO 堅固強大的多功能下降器，最大下降荷重225公斤。具防恐慌及自動上鎖功能，是您繩索作業最佳利器。"
            index={13}
            image={equipment9} />
          <EquipmentImage
            text="PRO SLING短掛"
            index={14}
            image={equipment10} />
        </div>
      </div>
      <div style={styles.footer}>
        <span style={styles.footerText}>以上商品泰鼎皆有代購</span>
        <span style={styles.footerText}>上課詢問/電話詢問02-2902-0376</span>
      </div>
      <EquipmentModal />
    </div>
  );
}

export default radium(EquipmentSection);
