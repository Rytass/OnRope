// @flow

import React from 'react';
import Avatar from './elements/Avatar.jsx';
import avatar2 from '../static/images/avatar-02.png';

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
  },
  sectionWrapper: {
    width: '100%',
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
  },
  main: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'flex-start',
    justifyContent: 'center',
    borderWidth: '1px 0',
    borderStyle: 'solid',
    borderColor: '#398297',
  },
  contentText: {
    fontSize: 14,
    lineHeight: '24px',
    letterSpacing: 1,
    color: 'rgba(255, 255, 255, 0.87)',
    margin: 0,
  },
};

function CoachSection() {
  return (
    <div style={styles.wrapper}>
      <h2 style={styles.title}>教練介紹</h2>
      <div style={styles.sectionWrapper}>
        <div style={styles.main}>
          <Avatar
            avatar={avatar2}
            name="黃元君"
            position="資深教練"
            experience={() => (
              <div>
                <p style={styles.contentText}>2011-2015 亞陞國際繩索技術服務 教育訓練</p>
                <p style={styles.contentText}>2016-目前-就職於千里達企業有限公司   安全經理</p>
                <p style={styles.contentText}>2018-目前 TAIA臺灣廣告工程職業安全促進會第一屆理事兼教育訓練召集人</p>
              </div>
            )}
            license={() => (
              <div>
                <p style={styles.contentText}>IRATA L3, 填縫系防水施工技術士，建築物外牆安全檢查人員</p>
              </div>
            )} />
        </div>
      </div>
    </div>
  );
}

export default CoachSection;
