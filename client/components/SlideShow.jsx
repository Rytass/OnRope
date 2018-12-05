// @flow

import React, { PureComponent } from 'react';
import radium from 'radium';
import slideshow1 from '../static/images/slide-show-01.png';
import slideshow2 from '../static/images/slide-show-02.png';
import slideshow3 from '../static/images/slide-show-03.jpg';

const CHANGE_TIME = 5000;

const slideshows = [slideshow1, slideshow2, slideshow3];

const styles = {
  wrapper: {
    width: '100%',
    position: 'relative',
  },
  cover: {
    width: '100%',
    height: 520,
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundSize: 'cover',
    backgroundPosition: 'center',
    backgroundRepeat: 'no-repeat',
    '@media (max-width: 479px)': {
      height: 509,
    },
  },
  statusDotWrapper: {
    width: '100%',
    position: 'absolute',
    bottom: 24,
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
  },
  statusDot: {
    width: 8,
    height: 8,
    borderRadius: 4,
    backgroundColor: '#1b4550',
    margin: '0 4px',
  },
  statusDotActived: {
    backgroundColor: '#4bb3d0',
  },
  textWrapper: {
    position: 'absolute',
    left: 209,
    bottom: 130,
    '@media (max-width: 1023px) and (min-width: 480px)': {
      left: 32,
    },
    '@media (max-width: 479px)': {
      left: 24,
    },
    '@media (max-width: 374px)': {
      left: 12,
    },
  },
  text: {
    fontSize: 48,
    fontWeight: 500,
    letterSpacing: 1,
    color: '#fff',
    margin: 0,
    textShadow: '0 0 12px rgba(0, 0, 0, 0.7)',
    '@media (max-width: 479px)': {
      fontSize: 36,
      letterSpacing: 0.8,
    },
  },
};

class SlideShow extends PureComponent {
  state = {
    showHomeCoverIndex: 0,
  }

  componentDidMount() {
    this.intervalId = setInterval(() => this.pushSlideShow(), CHANGE_TIME);
  }

  componentWillUnmount() {
    clearInterval(this.intervalId);
  }

  pushSlideShow() {
    const {
      showHomeCoverIndex,
    } = this.state;

    if (showHomeCoverIndex !== slideshows.length - 1) {
      this.setState({ showHomeCoverIndex: showHomeCoverIndex + 1 });
    } else {
      this.setState({ showHomeCoverIndex: 0 });
    }
  }

  render() {
    const {
      showHomeCoverIndex,
    } = this.state;

    const targetSlideshow = slideshows[showHomeCoverIndex];

    return (
      <div style={styles.wrapper}>
        <div
          style={[
            styles.cover,
            { backgroundImage: `url(${targetSlideshow})` },
          ]} />
        <div style={styles.statusDotWrapper}>
          {slideshows.map((item, index) => (
            <div
              key={item}
              style={[
                styles.statusDot,
                index === showHomeCoverIndex && styles.statusDotActived,
              ]} />
          ))}
        </div>
        <div style={styles.textWrapper}>
          <p style={styles.text}>不管你是誰</p>
          <p style={styles.text}>超越卓越的自己</p>
        </div>
      </div>
    );
  }
}

export default radium(SlideShow);
