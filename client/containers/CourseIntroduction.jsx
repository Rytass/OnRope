// @flow

import React, { PureComponent } from 'react';

const styles = {
  wrapper: {
    width: '100%',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'flex-start',
    justifyContent: 'flex-start',
  },
  courseIntroductionWrapper: {
    width: '100%',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#1A2426',
  },
  courseTitleWrapper: {
    width: '100%',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    padding: '64px 24px 56px 24px',
    fontSize: 32,
    color: '#FFFFFF',
    opacity: 0.92,
    letterSpacing: 2,
    fontWeight: 900,
    backgroundColor: '#1A2426',
  },
  courseRangeWrapper: {
    width: '100%',
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'flex-start',
    justifyContent: 'flex-start',
    backgroundColor: '#fff',
  },
  coursePic: {
    width: 473,
    height: 349,
    display: 'flex',
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#4a4a4a',
  },
  titleInCoursePic: {
    fontSize: 32,
    color: '#fff',
    fontWeight: 900,
  },
  licencelessonWrapper: {
    width: '100%',
    height: 522,
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    padding: '64px 0 56px 0',
    backgroundColor: '#1A2426',
  },
  licencelessonTitle: {
    fontSize: 24,
    color: '#fff',
    opacity: 0.92,
    fontWeight: 900,
    letterSpacing: 2,
  },
  licencelessonContent: {
    width: 600,
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    fontSize: 16,
    color: '#fff',
    opacity: 0.87,
    fontWeight: 'light',
    lineHeight: '24px',
    letterSpacing: 0.8,
    margin: '16px 0 0 0',
  },
  attendDetailWrapper: {
    width: 600,
    height: 122,
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#fff',
    margin: '56px 0 0 0',
  },
};

type Props = {

}

class CourseIntroduction extends PureComponent<Props> {
  render() {
    return (
      <div style={styles.wrapper}>
        <div style={styles.courseIntroductionWrapper}>
          <div style={styles.courseTitleWrapper}>
          課程介紹
          </div>
          <div style={styles.courseRangeWrapper}>
            <div style={styles.coursePic}>
              <div style={styles.titleInCoursePic}>
              工程施作
              </div>
            </div>
            <div style={styles.coursePic}>
              <div style={styles.titleInCoursePic}>
              外牆相關工作
              </div>
            </div>
            <div style={styles.coursePic}>
              <div style={styles.titleInCoursePic}>
              燈光舞台音響架設
              </div>
            </div>
          </div>
          <div style={styles.licencelessonWrapper}>
            <div style={styles.licencelessonTitle}>
            TRAA 台灣繩索技術協會證照班
            </div>
            <div style={styles.licencelessonContent}>
            參照國外工業繩索各級訓練內容。包括繩索技術相關知識及技能。每個級別都須經過知識及技術評核後取得證照，評核比照TRAA證照規範。
            取證後，個人資料均會上交給TRAA(台灣繩索技術協會)。由TRAA造冊後交台北市勞檢處備查。
            一級課程內容 : 學科理論課程、個人保護裝備與繩結、上升下降轉換、微距上升與微距下降、繩索轉換、通過中途固定點、通過偏離點、
            通過繩結、低固定點、輔助攀登、工作吊板、開收繩索、架設固定點、墜落摯停裝備、掛接式拯救一名處於高空中的傷患。
            </div>
            <div style={styles.attendDetailWrapper} />
          </div>
        </div>
      </div>
    );
  }
}

export default CourseIntroduction;
