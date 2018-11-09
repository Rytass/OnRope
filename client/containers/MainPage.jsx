// @flow

import React, { PureComponent } from 'react';
import Header from '../components/Header.jsx';
import CourseIntroduction from './CourseIntroduction.jsx';

const styles = {
  wrapper: {
    width: '100%',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'flex-start',
    justifyContent: 'flex-start',
  },
  landingSection1: {
    width: '100%',
    height: '520px',
    display: 'flex',
    flexDirection: 'row',
    padding: '0 32px',
    backgroundColor: '#615840',
  },
  bannerTitleWrapper: {
    display: 'flex',
    flex: 1,
    flexDirection: 'column',
    margin: '256px 0 56px 77px',
    flexgrow: 1,
  },
  bannerTitle: {
    fontSize: 48,
    color: '#fff',
    fontWeight: 'bold',
    margin: 0,
    letterSpacing: 1,
  },
  sideBarWrapper: {
    width: '134px',
    height: '423px',
    display: 'flex',
    flexDirection: 'column',
    margin: '23px 0 74px 0',
  },
  itemWrapper: {
    width: '100%',
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'flex-end',
    alignItems: 'center',
    margin: '0 0 12px 0',
  },
  itemActived: {
    fontSize: 12,
    color: '#F2F2F2',
    fontWeight: 'bold',
    letterSpacing: 1,
  },
  itemDefault: {
    fontSize: 12,
    color: '#fff',
    opacity: 0.38,
    fontWeight: 'bold',
  },
  circleActived: {
    width: 8,
    height: 8,
    margin: '0 0 0 12px',
    borderRadius: '50%',
    backgroundColor: '#fff',
  },
  circleDefault: {
    width: 8,
    height: 8,
    margin: '0 0 0 12px',
    borderRadius: '50%',
    backgroundColor: '#fff',
    opacity: 0.37,
  },
  landingSection2: {
    width: '100%',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#5CD0E4',
  },
  reasonWrapper: {
    maxWidth: 600,
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
    margin: '76px 0',

  },
  reasonTitle: {
    fontSize: 32,
    fontWeight: 900,
    letterSpacing: 2,
    lineHeight: '32px',
    color: '#1B4550',
    margin: '0 0 32px 0',
  },
  reasonContent: {
    fontSize: 16,
    fontWeight: 'light',
    letterSpacing: 0.8,
    lineHeight: '24px',
    color: '#354B51',
    maxHeight: 362,
  },
};

type Props = {

}

class MainPage extends PureComponent<Props> {
  render() {
    return (
      <div style={styles.wrapper}>
        <Header />
        <div style={styles.landingSection1}>
          <div style={styles.bannerTitleWrapper}>
            <p style={styles.bannerTitle}>
            不管你是誰
            </p>
            <p style={styles.bannerTitle}>
            創造卓越的自己
            </p>
          </div>
          <div style={styles.sideBarWrapper}>
            <div style={styles.itemWrapper}>
              <p style={styles.itemActived}>首頁</p>
              <div style={styles.circleActived} />
            </div>
            <div style={styles.itemWrapper}>
              <p style={styles.itemDefault}>創立緣由</p>
              <div style={styles.circleDefault} />
            </div>
            <div style={styles.itemWrapper}>
              <p style={styles.itemDefault}>課程介紹</p>
              <div style={styles.circleDefault} />
            </div>
            <div style={styles.itemWrapper}>
              <p style={styles.itemDefault}>繩索垂直舞蹈</p>
              <div style={styles.circleDefault} />
            </div>
            <div style={styles.itemWrapper}>
              <p style={styles.itemDefault}>場地介紹</p>
              <div style={styles.circleDefault} />
            </div>
            <div style={styles.itemWrapper}>
              <p style={styles.itemDefault}>裝備介紹＆代購商品</p>
              <div style={styles.circleDefault} />
            </div>
            <div style={styles.itemWrapper}>
              <p style={styles.itemDefault}>教練介紹</p>
              <div style={styles.circleDefault} />
            </div>
            <div style={styles.itemWrapper}>
              <p style={styles.itemDefault}>事件回顧</p>
              <div style={styles.circleDefault} />
            </div>
            <div style={styles.itemWrapper}>
              <p style={styles.itemDefault}>到府教學</p>
              <div style={styles.circleDefault} />
            </div>
            <div style={styles.itemWrapper}>
              <p style={styles.itemDefault}>場地位置</p>
              <div style={styles.circleDefault} />
            </div>
          </div>
        </div>
        <div style={styles.landingSection2}>
          <div style={styles.reasonWrapper}>
            <span style={styles.reasonTitle}>
            創立緣由
            </span>
            <span style={styles.reasonContent}>
              一群具有工業繩索證照背景的夥伴們，對繩索技術抱持無比的熱愛。
              靠著繩索技術吃飯的同時，也希望藉由繩索訓練，提升國內繩索作業的安全，讓每個從業朋友都可以平安順利的完成工程任務。
              除了工業繩索技術之外，希望能讓更多人認識我們，一起走入繩索的世界， 真實掌握自己無限可能的學習爆發力，
              我們有各級工業繩索證照班，也有繩索入門體驗班，還有垂直繩索舞蹈班；
              未來~ 生活不再枯燥乏味，進入繩索的世界讓生活變得有趣；工作也好，鍛鍊體能也好，好奇體驗也行，我們真摯地歡迎您，一起來瀚登小將!!
            </span>
          </div>
        </div>
        <CourseIntroduction />
      </div>
    );
  }
}

export default MainPage;
