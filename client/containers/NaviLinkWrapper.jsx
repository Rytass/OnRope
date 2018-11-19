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
          targetHeight={0}
          isActived={scrollY >= 0 && scrollY < 600} />
        <NaviButton
          text="創立緣由"
          targetHeight={600}
          isActived={scrollY >= 600 && scrollY < 1040} />
        <NaviButton
          text="課程介紹"
          targetHeight={1040}
          isActived={scrollY >= 1040 && scrollY < 4390} />
        <NaviButton
          text="繩索垂直舞蹈"
          targetHeight={4390}
          isActived={scrollY >= 4390 && scrollY < 5980} />
        <NaviButton
          text="場地介紹"
          targetHeight={5980}
          isActived={scrollY >= 5980 && scrollY < 7353} />
        <NaviButton
          text="裝備介紹&代購商品"
          targetHeight={7353}
          isActived={scrollY >= 7353 && scrollY < 9809} />
        <NaviButton
          text="教練介紹"
          targetHeight={9809}
          isActived={scrollY >= 9809 && scrollY < 11737} />
        <NaviButton
          text="事件回顧"
          targetHeight={11737}
          isActived={scrollY >= 11737 && scrollY < 13221} />
        <NaviButton
          text="到府教學"
          targetHeight={13221}
          isActived={scrollY >= 13221 && scrollY < 13590} />
        <NaviButton
          text="場地位置"
          targetHeight={13590}
          isActived={scrollY >= 13590} />
      </div>
    );
  }
}

export default radium(NaviLinkWrapper);
