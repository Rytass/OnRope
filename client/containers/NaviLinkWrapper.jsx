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
          scrollY={scrollY} />
        <NaviButton
          text="創立緣由"
          elementId="reason"
          scrollY={scrollY} />
        <NaviButton
          text="課程介紹"
          elementId="course"
          scrollY={scrollY} />
        <NaviButton
          text="繩索垂直舞蹈"
          elementId="vertical"
          scrollY={scrollY} />
        <NaviButton
          text="場地介紹"
          elementId="field"
          scrollY={scrollY} />
        <NaviButton
          text="裝備介紹&代購商品"
          elementId="equip"
          scrollY={scrollY} />
        <NaviButton
          text="教練介紹"
          elementId="coach"
          scrollY={scrollY} />
        <NaviButton
          text="事件回顧"
          elementId="event"
          scrollY={scrollY} />
        <NaviButton
          text="到府教學"
          elementId="connection"
          scrollY={scrollY} />
        <NaviButton
          text="場地位置"
          elementId="place"
          scrollY={scrollY} />
      </div>
    );
  }
}

export default radium(NaviLinkWrapper);
