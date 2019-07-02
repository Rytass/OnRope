// @flow

import React from 'react';
import radium from 'radium';
import TextImage from './elements/TextImage.jsx';
import Button from './elements/Button.jsx';
import classPhoto1 from '../static/images/class-photo-01.png';
import classPhoto2 from '../static/images/class-photo-02.png';
import classPhoto3 from '../static/images/class-photo-03.png';
import CourseContentSection from './CourseContentSection.jsx';
import NightSection from './NightSection.jsx';

const styles = {
  wrapper: {
    width: '100%',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'flex-start',
    alignItems: 'center',
    backgroundColor: '#1a2426',
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
    '@media (max-width: 767px)': {
      flexDirection: 'column',
    },
  },
  image: {
    height: 347,
    '@media (max-width: 1023px) and (min-width: 480px)': {
      height: 185,
    },
    '@media (max-width: 767px) and (min-width: 480px)': {
      width: '100%',
      height: 300,
    },
    '@media (max-width: 479px)': {
      width: '100%',
      height: 275,
    },
  },
  infoWrapper: {
    width: 600,
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'flex-start',
    alignItems: 'center',
    padding: '66px 0 56px 0',
    '@media (max-width: 767px) and (min-width: 480px)': {
      padding: '20px 0 56px 0',
      width: 420,
    },
    '@media (max-width: 479px)': {
      padding: '20px 0 56px 0',
      width: 327,
    },
    '@media (max-width: 374px)': {
      padding: '20px 0 56px 0',
      width: 307,
    },
  },
  infoTitle: {
    fontSize: 24,
    fontWeight: 600,
    lineHeight: 1,
    letterSpacing: 2,
    color: 'rgba(255, 255, 255, 0.92)',
    margin: '0 0 16px 0',
    '@media (max-width: 767px) and (min-width: 480px)': {
      fontSize: 20,
      margin: '0 0 8px 0',
    },
    '@media (max-width: 479px)': {
      fontSize: 20,
      margin: '0 0 8px 0',
    },
    '@media (max-width: 374px)': {
      letterSpacing: 1,
      margin: '0 0 8px 0',
    },
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
    width: 816,
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'flex-end',
    padding: '32px 0 0 0',
    '@media (max-width: 1023px) and (min-width: 480px)': {
      padding: '32px 0 0 0',
    },
    '@media (max-width: 874px) and (min-width: 480px)': {
      width: '100%',
      flexDirection: 'column',
      alignItems: 'center',
      padding: 0,
    },
    '@media (max-width: 479px)': {
      width: '100%',
      flexDirection: 'column',
      alignItems: 'center',
      padding: 0,
    },
  },
  infoBlock: {
    '@media (max-width: 874px) and (min-width: 480px)': {
      margin: '24px 0 0 0',
    },
    '@media (max-width: 479px)': {
      margin: '24px 0 0 0',
    },
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
  discountBigText: {
    fontSize: 16,
    lineHeight: 1,
    letterSpacing: 1,
    color: 'rgba(255, 255, 255, 0.92)',
    margin: '0 0 10px 0',
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
    <div id="course" style={styles.wrapper}>
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
              <p style={styles.priceTitle}>日間課程</p>
            </div>
            <Button text="報名" url="http://t.cn/RFIgZmd " isThin />
          </div>
          <div style={styles.infoBlock}>
            <div style={styles.priceInfoWrapper}>
              <p style={styles.priceTitle}>夜間課程</p>
            </div>
            <Button text="報名" url="https://reurl.cc/pmRx8" isThin />
          </div>
        </div>
      </div>
      <CourseContentSection />
      <NightSection />
    </div>
  );
}

export default radium(CourseSection);
