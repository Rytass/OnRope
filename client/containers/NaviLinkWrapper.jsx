// @flow

import React, { PureComponent } from 'react';
import radium from 'radium';
import NaviButton from '../components/elements/NaviButton.jsx';

const styles = {
  wrapper: {
    position: 'fixed',
    top: 103,
    right: 32,
    backgroundColor: 'transparent',
    zIndex: 999,
    pointerEvents: 'auto',
  },
};

class NaviLinkWrapper extends PureComponent {
  render() {
    return (
      <div style={styles.wrapper}>
        <NaviButton text="首頁" isActived />
        <NaviButton text="創立緣由" isActived={false} />
        <NaviButton text="課程介紹" isActived={false} />
        <NaviButton text="繩索垂直舞蹈" isActived={false} />
        <NaviButton text="場地介紹" isActived={false} />
        <NaviButton text="裝備介紹&代購商品" isActived={false} />
        <NaviButton text="代購商品" isActived={false} />
        <NaviButton text="教練介紹" isActived={false} />
        <NaviButton text="事件回顧" isActived={false} />
        <NaviButton text="到府教學" isActived={false} />
        <NaviButton text="場地位置" isActived={false} />
      </div>
    );
  }
}

export default radium(NaviLinkWrapper);
