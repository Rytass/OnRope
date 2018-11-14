// @flow

import React from 'react';
import radium from 'radium';
import Button from './elements/Button.jsx';
import classPhoto4 from '../static/images/class-photo-04.png';
import classPhoto5 from '../static/images/class-photo-05.png';
import classPhoto6 from '../static/images/class-photo-06.png';

const styles = {
  introductionSection: {
    width: '100%',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'flex-start',
    alignItems: 'center',
    backgroundColor: '#273539',
    padding: '8px 0',
  },
  courseItem: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'flex-start',
    padding: '48px 0',
  },
  border: {
    borderWidth: '1px 0 0 0',
    borderStyle: 'solid',
    borderColor: '#398297',
  },
  image: {
    width: 600,
    height: 350,
  },
  imageMarginRight: {
    margin: '0 60px 0 0',
  },
  imageMarginBottom: {
    margin: '0 0 32px 0',
  },
  imageInfoWrapper: {
    width: 600,
    display: 'flex',
    alignSelf: 'stretch',
    flexDirection: 'column',
    justifyContent: 'flex-start',
    alignItems: 'flex-start',
    margin: '0 60px 0 0',
  },
  introInfoWrapper: {
    width: 600,
    display: 'flex',
    alignSelf: 'stretch',
    flexDirection: 'column',
    justifyContent: 'flex-start',
    alignItems: 'flex-start',
  },
  introInfoTitle: {
    fontSize: 24,
    fontWeight: 600,
    lineHeight: 1.5,
    letterSpacing: 2,
    color: 'rgba(255, 255, 255, 0.92)',
    margin: '0 0 10px 0',
  },
  smallContent: {
    fontSize: 14,
    lineHeight: 2,
    letterSpacing: 1.2,
    color: 'rgba(255, 255, 255, 0.87)',
    margin: 0,
  },
  content: {
    fontSize: 16,
    lineHeight: 1.75,
    letterSpacing: 1,
    color: 'rgba(255, 255, 255, 0.87)',
    margin: 0,
  },
  optionTitle: {
    fontSize: 16,
    fontWeight: 600,
    lineHeight: 1.75,
    letterSpacing: 1,
    color: '#4bb3d0',
  },
  infoWrapper: {
    flex: 1,
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'flex-end',
    alignItems: 'flex-start',
    margin: '66px 0 0 0',
  },
  infoTitle: {
    fontSize: 16,
    letterSpacing: 1,
    lineHeight: 1,
    color: '#fff',
    margin: 0,
  },
  priceWrapper: {
    margin: '8px 0 12px 0',
  },
  infoText: {
    fontSize: 20,
    fontWeight: 900,
    lineHeight: '30px',
    letterSpacing: 0,
    color: '#66fae4',
    margin: 0,
  },
};

function CourseContentSection() {
  return (
    <div style={styles.introductionSection}>
      <div style={styles.courseItem}>
        <div style={styles.imageInfoWrapper}>
          <img style={[styles.image, styles.imageMarginBottom]} src={classPhoto4} alt="class" />
          <p style={styles.content}>
            <span style={styles.optionTitle}>課程天數：</span>
            1天 (09:00~17:00)
          </p>
          <p style={styles.content}>
            <span style={styles.optionTitle}>參加者資格：</span>
            滿十八歲身體健康，無其他資格限制。
          </p>
          <p style={styles.content}>
            <span style={styles.optionTitle}>課程內容包含：</span>
          </p>
          <p style={styles.content}>個人保護裝備</p>
          <p style={styles.content}>開收繩索</p>
          <p style={styles.content}>基本繩結</p>
          <p style={styles.content}>墜落摯停裝備</p>
          <p style={styles.content}>沿繩上攀與下降</p>
          <p style={styles.content}>掛接拯救一名受困在空中的傷患</p>
        </div>
        <div style={styles.introInfoWrapper}>
          <h2 style={styles.introInfoTitle}>高空繩索入門課程</h2>
          <p style={styles.smallContent}>嚴肅，緊繃，高壓，體力不堪負荷，崩潰！</p>
          <p style={styles.smallContent}>你對於繩索訓練的既定印象還是這樣的嗎？</p>
          <p style={styles.smallContent}>讓我們的高空繩索入門課程顛覆您對訓練的想像！</p>
          <p style={styles.smallContent}>有別於傳統的教學方式，輕鬆帶領各式各樣的夥伴體驗專業高空繩索，歡迎來自各個領域的您一同加入!!</p>
          <p style={styles.smallContent}>不管你對於這個訓練的需求是什麼，也許你需要靠這個技能謀生賺錢，也許你有消防或是救難背景所以需要學習這個技術，也許你準備要考正式的繩索工作證照想先來試試水溫，也許你根本不知道繩索技術是什麼，你只是好奇，也許你就單純是個很愛運動的人想來一起爬而已，也許妳的老公/男朋友是相關行業的，妳想來體驗，不管來自哪裡或是為了什麼或是沒有為什麼，</p>
          <p style={styles.smallContent}>相信一起流汗的這一天都會成為一個很棒的故事。</p>
          <div style={styles.infoWrapper}>
            <p style={styles.infoTitle}>課程收費</p>
            <div style={styles.priceWrapper}>
              <p style={styles.infoText}>NT$3,500元</p>
            </div>
            <Button text="立即報名" url="https://www.google.com" isThin />
          </div>
        </div>
      </div>
      <div style={[styles.courseItem, styles.border]}>
        <img style={[styles.image, styles.imageMarginRight]} src={classPhoto5} alt="class" />
        <div style={styles.introInfoWrapper}>
          <h2 style={styles.introInfoTitle}>各級證照同等技術課程</h2>
          <p style={styles.content}>
            <span style={styles.optionTitle}>課程天數：</span>
            4天 (09:00~17:00)
          </p>
          <p style={styles.content}>
            <span style={styles.optionTitle}>參加者資格：</span>
            滿十八歲身體健康，無其他資格限制。
          </p>
          <p style={styles.content}>
            <span style={styles.optionTitle}>課程內容：</span>
            等同於證照課程內容，扣除證照課程最後一天的考試，課程結束後沒有證照。
          </p>
          <div style={styles.infoWrapper}>
            <p style={styles.infoTitle}>課程收費</p>
            <div style={styles.priceWrapper}>
              <p style={styles.infoText}>NT$12,000元</p>
            </div>
            <Button text="立即報名" url="https://www.google.com" isThin />
          </div>
        </div>
      </div>
      <div style={[styles.courseItem, styles.border]}>
        <img style={[styles.image, styles.imageMarginRight]} src={classPhoto6} alt="class" />
        <div style={styles.introInfoWrapper}>
          <h2 style={styles.introInfoTitle}>回娘家專案複習課程(一/二級)</h2>
          <p style={styles.content}>
            <span style={styles.optionTitle}>課程天數：</span>
            4天(9:00~17:00)
          </p>
          <p style={styles.content}>
            <span style={styles.optionTitle}>參加資格：</span>
            持有TRAA或IRATA或SPRAT效期內證照正本之本人。
          </p>
          <p style={styles.content}>(參加複習課程時需帶來備查才可上課)</p>
          <p style={styles.content}>持有效期內TRAA或IRATA或SPRAT一級證照者，可報名參加一級複習課程。</p>
          <p style={styles.content}>持有效期內TRAA或IRATA或SPRAT二級證照者，可報名參加一級或二級複習課程。</p>
          <p style={styles.content}>持有效期內TRAA或IRATA或SPRAT三級證照者，可報名參加一級、二級或三級複習課程。</p>
          <p style={styles.content}>有上過將將教練授課之各級同等技術課程的學生，可報名參加該級複習課程。</p>
          <p style={styles.content}>
            <span style={styles.optionTitle}>課程內容：</span>
            各級證照課程內容。
          </p>
          <div style={styles.infoWrapper}>
            <p style={styles.infoTitle}>課程收費</p>
            <div style={styles.priceWrapper}>
              <p style={styles.infoText}>NT$3,000元</p>
            </div>
            <Button text="立即報名" url="https://www.google.com" isThin />
          </div>
        </div>
      </div>
    </div>
  );
}

export default radium(CourseContentSection);
