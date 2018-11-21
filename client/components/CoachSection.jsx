// @flow

import React from 'react';
import radium from 'radium';
import Avatar from './elements/Avatar.jsx';
import avatar1 from '../static/images/avatar-01.png';
import avatar2 from '../static/images/avatar-02.png';
import avatar3 from '../static/images/avatar-03.png';
import avatar4 from '../static/images/avatar-04.png';
import avatar5 from '../static/images/avatar-05.png';
import avatar6 from '../static/images/avatar-06.png';
import avatar7 from '../static/images/avatar-07.png';

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
    '@media (max-width: 1250px)': {
      margin: '22px 0',
    },
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
    margin: '0 0 20px 0',
    padding: '0 70px 36px 70px',
    '@media (max-width: 1250px)': {
      padding: '0 22px 12px 22px',
    },
    '@media (max-width: 767px)': {
      padding: '24px 12px',
    },
  },
  coachWrapper: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'flex-start',
    padding: '52px 0 32px 0',
    borderWidth: '0 0 1px 0',
    borderStyle: 'solid',
    borderColor: '#398297',
    width: '100%',
    margin: '0 0 124px 0',
    '@media (max-width: 1250px)': {
      flexDirection: 'column',
      alignItems: 'center',
      padding: '48px 0 132px 0',
      margin: '0 0 28px 0',
    },
    '@media (max-width: 767px)': {
      padding: '24px 0 28px 0',
      margin: '0 0 24px 0',
    },
  },
  coachAvatarWrapper: {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'flex-start',
    alignItems: 'center',
    margin: '0 18px 0 0',
    '@media (max-width: 1250px)': {
      margin: 0,
    },
  },
  avatar: {
    width: 293,
    height: 293,
  },
  name: {
    fontSize: 30,
    lineHeight: 1.33,
    letterSpacing: 1,
    color: '#fff',
    maring: '42px 0 21px 0',
    '@media (max-width: 1250px)': {
      maring: '35px 0 21px 0',
    },
  },
  position: {
    fontSize: 18,
    fontWeight: 600,
    lineHeight: 2.22,
    letterSpacing: 1,
    color: '#4bb3d0',
    margin: 0,
  },
  infoBigWrapper: {
    display: 'flex',
    '@media (max-width: 1250px)': {
      padding: '24px 0 0 0',
    },
    '@media (max-width: 767px)': {
      flexDirection: 'column',
    },
  },
  infoWrapper: {
    width: 304,
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'flex-start',
    alignItems: 'flex-start',
  },
  infoWrapperMargin: {
    margin: '0 76px 0 0',
    '@media (max-width: 1250px)': {
      margin: '0 48px 0 0',
    },
    '@media (max-width: 767px)': {
      margin: 0,
    },
  },
  infoTitle: {
    fontSize: 14,
    lineHeight: '24px',
    letterSpacing: 1,
    color: '#fff',
    margin: 0,
  },
  infoContentWrapper: {
    margin: '0 0 24px 0',
  },
  contentText: {
    fontSize: 14,
    fontWeight: 300,
    lineHeight: '24px',
    letterSpacing: 1,
    color: 'rgba(255, 255, 255, 0.87)',
    margin: 0,
  },
  avatarWrapper: {
    width: 1070,
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
    padding: '28px 0',
    '@media (max-width: 1250px)': {
      width: 656,
    },
    '@media (max-width: 767px)': {
      flexDirection: 'column',
      width: 304,
      padding: 0,
    },
  },
};

function CoachSection() {
  return (
    <div id="coach" style={styles.wrapper}>
      <h2 style={styles.title}>教練介紹</h2>
      <div style={styles.sectionWrapper}>
        <div style={styles.main}>
          <div style={styles.coachWrapper}>
            <div style={styles.coachAvatarWrapper}>
              <img src={avatar1} alt="avatar" style={styles.avatar} />
              <p style={styles.name}>朱將輔</p>
              <p style={styles.position}>總教練</p>
            </div>
            <div style={styles.infoBigWrapper}>
              <div style={[styles.infoWrapper, styles.infoWrapperMargin]}>
                <div style={styles.infoContentWrapper}>
                  <p style={styles.infoTitle}>工程經歷</p>
                  <p style={styles.contentText}>風力發電機保養維修工程</p>
                  <p style={styles.contentText}>電廠鍋爐煙囪及冷凝管維護保養</p>
                  <p style={styles.contentText}>桃園機場航廈高空裝置藝術保養</p>
                  <p style={styles.contentText}>美術館大型畫作高空吊掛</p>
                  <p style={styles.contentText}>國際藝術節高空舞團演出系統架設</p>
                  <p style={styles.contentText}>一般建築外牆檢測</p>
                </div>
                <div>
                  <p style={styles.infoTitle}>教學經歷</p>
                  <p style={styles.contentText}>各級繩索證照訓練官及考官</p>
                  <p style={styles.contentText}>國際風力發電機大廠Vestas外籍工程師繩索證照課程講師</p>
                  <p style={styles.contentText}>澳門中葡職業學校繩索課程受邀講師</p>
                  <p style={styles.contentText}>現任國立台灣戲曲學院高空作業證照講師</p>
                  <p style={styles.contentText}>為台灣唯一具資格核發工業繩索證照女教練</p>
                </div>
              </div>
              <div style={styles.infoWrapper}>
                <div style={styles.infoContentWrapper}>
                  <p style={styles.infoTitle}>比賽經歷</p>
                  <p style={styles.contentText}>連續五年Grimpday繩索救援大賽參賽</p>
                  <p style={styles.contentText}>連續五年"橋"台灣繩索搜救大賽之評核員及大會安全官</p>
                </div>
                <div style={styles.infoContentWrapper}>
                  <p style={styles.infoTitle}>演出經歷</p>
                  <p style={styles.contentText}>代言運動品牌於大樓外牆現場塗鴉(12層樓面)</p>
                  <p style={styles.contentText}>綠色和平海洋減塑高空舞蹈訓練編排</p>
                </div>
                <div style={styles.infoContentWrapper}>
                  <p style={styles.infoTitle}>其他</p>
                  <p style={styles.contentText}>撰寫攀登裝備各項產品中英文技術說明書</p>
                  <p style={styles.contentText}>台灣唯一具英國IRATA/美國SPRAT/台灣TRAA三級證照之女性</p>
                </div>
                <div>
                  <p style={styles.infoTitle}>其他相關證照</p>
                  <p style={styles.contentText}>建築物外牆安全檢查人員, SKYLOTEC PPE & PFPE 裝備檢查員，SKYLOTEC 米蘭基礎救援</p>
                </div>
              </div>
            </div>
          </div>
          <div style={styles.avatarWrapper}>
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
            <Avatar
              avatar={avatar3}
              name="黎  鼎"
              position="工業繩索教練/考官"
              experience={() => (
                <div>
                  <p style={styles.contentText}>2008-2015 亞陞國際工程 約聘教練</p>
                  <p style={styles.contentText}>2016-2018 CRAA 三級教練、考官</p>
                </div>
              )}
              license={() => (
                <div>
                  <p style={styles.contentText}>IRATA L3</p>
                  <p style={styles.contentText}>填縫系防水施工技術士</p>
                  <p style={styles.contentText}>吊籠操作員</p>
                  <p style={styles.contentText}>建築物外牆安全檢查人員</p>
                </div>
              )} />
          </div>
          <div style={styles.avatarWrapper}>
            <Avatar
              avatar={avatar4}
              name="李  瓖"
              position="資深教練"
              experience={() => (
                <div>
                  <p style={styles.contentText}>迅雷救援協會繩索隊</p>
                  <p style={styles.contentText}>中華民國救援協會 北區分會教練</p>
                  <p style={styles.contentText}>太魯閣國家公園 山搜救援人員</p>
                </div>
              )}
              license={() => (
                <div>
                  <p style={styles.contentText}>工業繩索 L1</p>
                </div>
              )} />
            <Avatar
              avatar={avatar5}
              name="林邦彥"
              position="資深教練"
              experience={() => (
                <div>
                  <p style={styles.contentText}>2014-目前 朱將輔教練繩索課程助教</p>
                  <p style={styles.contentText}>資深劇場人</p>
                  <p style={styles.contentText}>國內外劇場相關架設工作經驗豐富</p>
                </div>
              )}
              license={() => (
                <div>
                  <p style={styles.contentText}>SPRAT L1, TRAA L2</p>
                </div>
              )} />
          </div>
          <div style={styles.avatarWrapper}>
            <Avatar
              avatar={avatar6}
              name="偰子珩"
              position="資深教練"
              experience={() => (
                <div>
                  <p style={styles.contentText}>桃園市迅雷救援協會山域教官</p>
                  <p style={styles.contentText}>北搜教練</p>
                  <p style={styles.contentText}>太魯閣國家公園山難搜救人員</p>
                </div>
              )}
              license={() => (
                <div>
                  <p style={styles.contentText}>TRAA L2, CRAA L2</p>
                </div>
              )} />
            <Avatar
              avatar={avatar7}
              name="胡嘉豪"
              position="空中環/綢吊/舞蹈教練"
              experience={() => (
                <div>
                  <p style={styles.contentText}>HOOPS 體能訓練教練</p>
                  <p style={styles.contentText}>空中瑜伽教學</p>
                  <p style={styles.contentText}>Bungee fly 燃脂教練</p>
                </div>
              )}
              license={() => (
                <div>
                  <p style={styles.contentText}>TRAA L1</p>
                </div>
              )} />
          </div>
        </div>
      </div>
    </div>
  );
}

export default radium(CoachSection);
