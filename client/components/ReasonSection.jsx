// @flow

import React from 'react';
import radium from 'radium';

const styles = {
  wrapper: {
    width: '100%',
    backgroundImage: 'linear-gradient(107deg, #5cd0e4, #2fa3c4)',
    display: 'flex',
    justifyContent: 'center',
    padding: '76px 0',
    '@media (max-width: 767px) and (min-width: 480px)': {
      padding: '48px 0',
    },
    '@media (max-width: 479px)': {
      padding: '48px 0',
    },
  },
  textBlock: {
    width: 600,
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    '@media (max-width: 767px) and (min-width: 480px)': {
      width: 400,
    },
    '@media (max-width: 479px)': {
      width: 327,
    },
    '@media (max-width: 374px)': {
      width: 307,
    },
  },
  title: {
    fontSize: 32,
    fontWeight: 600,
    lineHeight: 1,
    letterSpacing: 2,
    textAlign: 'center',
    color: '#1b4550',
    margin: '0 0 32px 0',
  },
  text: {
    fontSize: 16,
    lineHeight: 1.5,
    letterSpacing: 0.8,
    textAlign: 'center',
    color: '#354b51',
    margin: '4px 0',
  },
};

function ReasonSection() {
  return (
    <div id="reason" style={styles.wrapper}>
      <div style={styles.textBlock}>
        <h2 style={styles.title}>創立緣由</h2>
        <p style={styles.text}>一群具有工業繩索證照背景的夥伴們，對繩索技術抱持無比的熱愛。</p>
        <p style={styles.text}>靠著繩索技術吃飯的同時，也希望藉由繩索訓練，提升國內繩索作業的安全，讓每個從業朋友都可以平安順利的完成工程任務。</p>
        <p style={styles.text}>
          除了工業繩索技術之外，希望能讓更多人認識我們，一起走入繩索的世界， 真實掌握自己無限可能的學習爆發力，我們有各級工業繩索證照班，也有繩索入門體驗班，還有垂直繩索舞蹈班；
        </p>
        <p style={styles.text}>未來~ 生活不再枯燥乏味，進入繩索的世界讓生活變得有趣；工作也好，鍛鍊體能也好，好奇體驗也行，我們真摯地歡迎您，一起來泰鼎小將!!</p>
      </div>
    </div>
  );
}

export default radium(ReasonSection);
