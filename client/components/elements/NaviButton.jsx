// @flow

import React, { PureComponent } from 'react';
import radium from 'radium';

const styles = {
  itemWrapper: {
    width: '100%',
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'flex-end',
    alignItems: 'center',
    margin: '0 0 24px 0',
    cursor: 'pointer',
  },
  itemActived: {
    color: '#F2F2F2',
    opacity: 1,
  },
  itemDefault: {
    fontSize: 12,
    fontWeight: 500,
    letterSpacing: 1,
    color: '#fff',
    opacity: 0.38,
    margin: 0,
  },
  circleActived: {
    opacity: 1,
  },
  circleDefault: {
    width: 8,
    height: 8,
    margin: '0 0 0 12px',
    borderRadius: '50%',
    backgroundColor: '#fff',
    opacity: 0.38,
  },
};

class NaviButton extends PureComponent<Props> {
  constructor(props) {
    super(props);

    this.state = {
      isActived: props.elementId === 'header' && props.scrollY === 0,
    };
  }

  componentDidUpdate(prevProps) {
    const {
      scrollY,
      elementId,
    } = this.props;

    if (prevProps.scrollY !== scrollY) {
      const element = document.getElementById(elementId);
      if (element) {
        const targetTop = element.offsetTop;
        const targetHeight = element.offsetHeight;

        if (scrollY >= targetTop && scrollY < (targetHeight + targetTop)) {
          this.setState({ isActived: true });
        } else {
          this.setState({ isActived: false });
        }
      }
    }
  }

  scroll() {
    const {
      elementId,
    } = this.props;

    const element = document.getElementById(elementId);
    const targetHeight = element.offsetTop;

    window.scrollTo(0, targetHeight);
  }

  render() {
    const {
      text,
    } = this.props;

    const {
      isActived,
    } = this.state;

    return (
      <div style={styles.itemWrapper} onClick={() => this.scroll()}>
        <p style={[
          styles.itemDefault,
          isActived && styles.itemActived,
        ]}>
          {text}
        </p>
        <div style={[
          styles.circleDefault,
          isActived && styles.circleActived,
        ]} />
      </div>
    );
  }
}

export default radium(NaviButton);
