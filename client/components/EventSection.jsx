// @flow

import React from 'react';
import EventItem from './elements/EventItem.jsx';
import event1 from '../static/images/event-01.png';
import event2 from '../static/images/event-02.png';
import event3 from '../static/images/event-03.png';

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
    margin: '20px 0',
  },
  eventContentText: {
    fontSize: 14,
    lineHeight: 1.71,
    letterSpacing: 1,
    color: 'rgba(255, 255, 255, 0.87)',
    margin: 0,
  },
  linkWrapper: {
    padding: '20px 0 0 0',
  },
  linkText: {
    fontSize: 14,
    lineHeight: 1.71,
    letterSpacing: 1,
    color: '#2fa3c4',
    margin: '0 20px 0 0',
  },
};

function EventSection() {
  return (
    <div style={styles.wrapper}>
      <h2 style={styles.title}>事件回顧</h2>
      <EventItem
        date="2018.6"
        image={event1}
        contentTitle="繩索救援大賽-新竹消防隊亞洲第一"
        content={() => (
          <div>
            <p style={styles.eventContentText}>參加2018Grimpday搜救比賽是來自世界各國共36個隊伍，拚搏三天最後拿下世界第九名成績，亞洲第一。台灣連續參賽五年，曾經的倒數第一名到今天，各個消防員搜救人員因自己的學習與興趣，自己掏腰包自己買裝備每個月努力推演練習終究在第五年得到佳績，在充滿兇悍有力的歐洲消防團體中，從一開始不期待入榜到現在和國際救援技術接軌同步帶回台灣，從陌生到熟悉，彼此擁抱和交換國旗與隊服，值得驕傲的是台灣真的做到了。</p>
            <p style={styles.eventContentText}>參赛人員名單</p>
            <p style={styles.eventContentText}>隊長陸瑞璽</p>
            <p style={styles.eventContentText}>岩角手黃鎮昌</p>
            <p style={styles.eventContentText}>技術評核員朱將輔</p>
            <p style={styles.eventContentText}>攻擊手李家銘</p>
            <p style={styles.eventContentText}>拖拉手兼醫療專員游坤哲</p>
            <p style={styles.eventContentText}>拖拉手呂君豪</p>
            <p style={styles.eventContentText}>模擬傷患許嘉瑤</p>
            <div style={styles.linkWrapper}>
              <a href="https://www.google.com" style={styles.linkText}>
                <span>相關報導一</span>
              </a>
              <a href="https://www.google.com" style={styles.linkText}>
                <span>相關報導二</span>
              </a>
            </div>
          </div>
        )} />
    </div>
  );
}

export default EventSection;
