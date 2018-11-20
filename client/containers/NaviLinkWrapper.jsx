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
    '@media (max-width: 479px)': {
      display: 'none',
    },
  },
};

class NaviLinkWrapper extends PureComponent {
  state = {
    scrollY: 0,
  }

  componentDidMount() {
    window.addEventListener('scroll', () => {
      this.setState({ scrollY: window.pageYOffset });
    });
  }

  render() {
    const {
      scrollY,
    } = this.state;

    return (
      <div style={styles.wrapper}>
        <NaviButton
          text="首頁"
          elementId="header"
          isActived={scrollY >= 0 && scrollY < 600} />
        <NaviButton
          text="創立緣由"
          elementId="reason"
          isActived={scrollY >= 600 && scrollY < 1040} />
        <NaviButton
          text="課程介紹"
          elementId="course"
          isActived={scrollY >= 1040 && scrollY < 4390} />
        <NaviButton
          text="繩索垂直舞蹈"
          elementId="vertical"
          isActived={scrollY >= 4390 && scrollY < 5980} />
        <NaviButton
          text="場地介紹"
          elementId="field"
          isActived={scrollY >= 5980 && scrollY < 7353} />
        <NaviButton
          text="裝備介紹&代購商品"
          elementId="equip"
          isActived={scrollY >= 7353 && scrollY < 9809} />
        <NaviButton
          text="教練介紹"
          elementId="coach"
          isActived={scrollY >= 9809 && scrollY < 11737} />
        <NaviButton
          text="事件回顧"
          elementId="event"
          isActived={scrollY >= 11737 && scrollY < 13221} />
        <NaviButton
          text="到府教學"
          elementId="connection"
          isActived={scrollY >= 13221 && scrollY < 13590} />
        <NaviButton
          text="場地位置"
          elementId="place"
          isActived={scrollY >= 13590} />
      </div>
    );
  }
}

export default radium(NaviLinkWrapper);
