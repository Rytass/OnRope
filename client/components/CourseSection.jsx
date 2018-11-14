// @flow

import React from 'react';
import TextImage from './elements/TextImage.jsx';
import Button from './elements/Button.jsx';
import classPhoto1 from '../static/images/class-photo-01.png';
import classPhoto2 from '../static/images/class-photo-02.png';
import classPhoto3 from '../static/images/class-photo-03.png';
import CourseContentSection from './CourseContentSection.jsx';
import NightSection from './NightSection.jsx';
import VerticalSection from './VerticalSection.jsx';

const styles = {
  wrapper: {
    width: '100%',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'flex-start',
    alignItems: 'center',
  },
  title: {
    fontSize: 32,
    fontWeight: 600,
    lineHeight: 1,
    letterSpacing: 2,
    color: 'rgba(255, 255, 255, 0.92)',
    margin: '64px 0 56px 0',
  },
  imagesWrapper: {
    width: '100%',
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'flex-start',
    alignItems: 'center',
  },
  image: {
    height: 347,
  },
  infoWrapper: {
    width: 600,
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'flex-start',
    alignItems: 'center',
    padding: '66px 0 56px 0',
  },
  infoTitle: {
    fontSize: 24,
    fontWeight: 600,
    lineHeight: 1,
    letterSpacing: 2,
    color: 'rgba(255, 255, 255, 0.92)',
    margin: '0 0 16px 0',
  },
  infoContent: {
    fontSize: 16,
    lineHeight: 1.5,
    letterSpacing: 0.8,
    fontWeight: 300,
    textAlign: 'center',
    color: 'rgba(255, 255, 255, 0.87)',
    margin: '0 0 24px 0',
  },
  linkWrapper: {
    flex: 1,
    width: '100%',
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'flex-end',
    padding: '32px 0 0 0',
  },
  priceInfoWrapper: {
    margin: '0 0 12px 0',
  },
  priceText: {
    fontSize: 20,
    fontWeight: 900,
    lineHeight: 1,
    color: '#66fae4',
    margin: '0 12px 0 0',
  },
  priceTitle: {
    fontSize: 16,
    lineHeight: 1,
    letterSpacing: 1,
    color: 'rgba(255, 255, 255, 0.92)',
    margin: '0 0 12px 0',
  },
  priceHint: {
    fontSize: 14,
    lineHeight: 1,
    letterSpacing: 1,
    color: 'rgba(255, 255, 255, 0.87)',
    margin: 0,
  },
  discountText: {
    fontSize: 14,
    lineHeight: 1.57,
    letterSpacing: 1,
    color: 'rgba(255, 255, 255, 0.87)',
    margin: 0,
  },
};

function CourseSection() {
  return (
    <div style={styles.wrapper}>
      <h2 style={styles.title}>課程介紹</h2>
      <div style={styles.imagesWrapper}>
        <TextImage
          hasBackground
          title="工程施作"
          image={classPhoto1}
          imageStyle={styles.image} />
        <TextImage
          hasBackground
          title="外牆相關工作"
          image={classPhoto2}
          imageStyle={styles.image} />
        <TextImage
          hasBackground
          title="燈光舞台音響架設"
          image={classPhoto3}
          imageStyle={styles.image} />
      </div>
      <div style={styles.infoWrapper}>
        <h2 style={styles.infoTitle}>TRAA 台灣繩索技術協會證照班</h2>
        <p style={styles.infoContent}>參照國外工業繩索各級訓練內容。包括繩索技術相關知識及技能。每個級別都須經過知識及技術評核後取得證照，評核比照TRAA證照規範。取證後，個人資料均會上交給TRAA(台灣繩索技術協會)。由TRAA造冊後交台北市勞檢處備查。</p>
        <p style={styles.infoContent}>一級課程內容 : 學科理論課程、個人保護裝備與繩結、上升下降轉換、微距上升與微距下降、繩索轉換、通過中途固定點、通過偏離點、通過繩結、低固定點、輔助攀登、工作吊板、開收繩索、架設固定點、墜落摯停裝備、掛接式拯救一名處於高空中的傷患。</p>
        <div style={styles.linkWrapper}>
          <div>
            <div style={styles.priceInfoWrapper}>
              <p style={styles.priceTitle}>日間課程收費</p>
              <p style={styles.priceHint}>
                <span style={styles.priceText}>NT$14,000元</span>
                (不包含證照費)
              </p>
            </div>
            <Button text="個人報名" url="https://www.google.com" isThin />
          </div>
          <div>
            <div style={styles.priceInfoWrapper}>
              <p style={styles.discountText}>(三人同行打8折)</p>
              <p style={styles.discountText}>(五人同行打7折)</p>
              <p style={styles.discountText}>(十人同行6.5折)</p>
            </div>
            <Button text="團體報名" url="https://www.google.com" isThin />
          </div>
        </div>
      </div>
      <CourseContentSection />
      <NightSection />
      <VerticalSection />
    </div>
  );
}

export default CourseSection;
