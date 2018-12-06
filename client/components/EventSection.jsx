// @flow

import React from 'react';
import radium from 'radium';
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
    padding: '80px 0',
    '@media (max-width: 1250px)': {
      padding: '80px 0',
    },
    '@media (max-width: 767px)': {
      padding: '80px 0 56px 0',
    },
  },
  title: {
    fontSize: 36,
    fontWeight: 600,
    letterSpacing: 1.5,
    color: '#2fa3c4',
    margin: '20px 0',
  },
  firstContent: {
    margin: '0 0 23px 0',
  },
  eventsWrapper: {
    '@media (max-width: 1250px)': {
      width: '100%',
      display: 'flex',
      flexDirection: 'row',
      overflowX: 'scroll',
      padding: '24px 24px 56px 24px',
    },
    '@media (max-width: 767px)': {
      padding: 24,
    },
  },
  eventContentText: {
    fontSize: 14,
    lineHeight: 1.71,
    letterSpacing: 1,
    fontWeight: 300,
    color: 'rgba(255, 255, 255, 0.87)',
    margin: 0,
  },
  linkWrapper: {
    padding: '20px 0 0 0',
    '@media (max-width: 1250px)': {
      padding: '24px 0 0 0',
    },
  },
  linkText: {
    fontSize: 14,
    lineHeight: 1.71,
    letterSpacing: 1,
    color: '#2fa3c4',
    margin: '0 20px 0 0',
  },
  line: {
    '@media (max-width: 1250px)': {
      alignSelf: 'stretch',
      height: 1,
      backgroundColor: '#398297',
      margin: '0 24px',
    },
  },
  rwdLine: {
    '@media (max-width: 767px)': {
      display: 'none',
    },
  },
};

function EventSection() {
  return (
    <div id="event" style={styles.wrapper}>
      <h2 style={styles.title}>事件回顧</h2>
      <div style={styles.line} />
      <div style={styles.eventsWrapper}>
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
                <a
                  href="https://www.setn.com/News.aspx?NewsID=403065"
                  style={styles.linkText}
                  target="_blank"
                  rel="noopener noreferrer">
                  <span>相關報導一</span>
                </a>
                <a
                  href="https://www.facebook.com/setnews/videos/1883954705022442/"
                  style={styles.linkText}
                  target="_blank"
                  rel="noopener noreferrer">
                  <span>相關報導二</span>
                </a>
              </div>
            </div>
          )} />
        <EventItem
          date="2017.2"
          image={event2}
          contentTitle="綠色和平(台灣)-海洋減塑繩索舞蹈"
          content={() => (
            <div>
              <div style={styles.firstContent}>
                <p style={styles.eventContentText}>這是編舞者的心情文 (來自朱小將個人FB)</p>
                <p style={styles.eventContentText}>這是心裡內在的小女孩夢想終於長大實現的一次行動</p>
                <p style={styles.eventContentText}>不再覺得自己是個什麼都做一半做不好的人</p>
                <p style={styles.eventContentText}>舞蹈/劇場技術/繩索  就算不是每樣都超會</p>
                <p style={styles.eventContentText}>也還是可以做出很多貢獻  生出一場讓很多人拍手叫好的活動</p>
              </div>
              <p style={styles.eventContentText}>在這個演出裡面所有參與的人沒有半個是真的專業領域出身，大家從一開始就是手牽著手一路跌跌撞撞的熬過來，這次在整個演出當中學會尊重每個人的專業是基本認知，但不隨便輕看別人也是一種基本禮貌，</p>
              <p style={styles.eventContentText}>這場活動擔任的是舞監及編舞老師，帶領一群根本不會跳舞還有甚至一開始連繩索也沒摸過的素人們努力下我們終究讓這場垂直表演很成功的發生了!</p>
              <div style={styles.linkWrapper}>
                <a
                  href="https://www.youtube.com/watch?v=dmCW1dTQhJ0"
                  style={styles.linkText}
                  target="_blank"
                  rel="noopener noreferrer">
                  <span>相關影片</span>
                </a>
              </div>
            </div>
          )} />
        <EventItem
          date="2017.2"
          image={event3}
          contentTitle="場外教課- 新竹三民消防繩索初級課程教學"
          underLine
          content={() => (
            <div>
              <p style={styles.eventContentText}>我們熟悉的消防體系常常為我們大眾做什麼事情呢?</p>
              <p style={styles.eventContentText}>除了救火、醫護送診之外還有很多很多</p>
              <p style={styles.eventContentText}>像是車子和人掉到山谷的救援、山難救援、貓狗動物困救，還有想自殺跳樓、跳海的的民眾</p>
              <p style={styles.eventContentText}>辛苦偉大的消防員他們跟生命很有關係，所以繩索技術與救援技術都是必備可學的。</p>
            </div>
          )} />
      </div>
      <div style={[styles.line, styles.rwdLine]} />
    </div>
  );
}

export default radium(EventSection);
