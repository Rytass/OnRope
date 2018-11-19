// @flow

import React, { PureComponent } from 'react';
import radium from 'radium';

const styles = {
  wrapper: {
    flex: 1,
    height: 600,
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundSize: 'cover',
    backgroundPosition: 'center',
    backgroundRepeat: 'no-repeat',
    position: 'relative',
    padding: '0 34px',
  },
  bigPadding: {
    padding: '0 357px',
  },
  textWrapper: {
    display: 'flex',
    alignSelf: 'stretch',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    position: 'relative',
    pointerEvents: 'none',
  },
  title: {
    fontSize: 28,
    fontWeight: 600,
    letterSpacing: 2,
    color: '#fff',
    zIndex: 10,
  },
  content: {
    margin: '22px 0 0 0',
    fontSize: 16,
    lineHeight: 1.75,
    letterSpacing: 1,
    color: '#fff',
    textAlign: 'center',
    zIndex: 10,
  },
  absoluteContent: {
    position: 'absolute',
    top: 62,
  },
  blackBackground: {
    width: '100%',
    height: '100%',
    backgroundColor: 'rgba(0, 0, 0, 0.6)',
    position: 'absolute',
    pointerEvents: 'none',
    top: 0,
    rigth: 0,
    zIndex: 9,
  },
};

type Props = {
  title: string,
  image: string,
  content: string,
  isBig: boolean,
}

class FieldImage extends PureComponent<Props> {
  constructor(props) {
    super(props);

    this.state = {
      isHovered: false,
    };
  }

  render() {
    const {
      title,
      image,
      content,
      isBig,
    } = this.props;

    const {
      isHovered,
    } = this.state;

    return (
      <div
        onMouseOver={() => this.setState({ isHovered: true })}
        onMouseOut={() => this.setState({ isHovered: false })}
        style={[
          styles.wrapper,
          { backgroundImage: `url(${image})` },
          isBig && styles.bigPadding,
        ]}>
        {isHovered ? <div style={styles.blackBackground} /> : null}
        <div style={styles.textWrapper}>
          <p style={styles.title}>{title}</p>
          {isHovered ? (
            <p
              style={[
                styles.content,
                !isBig && styles.absoluteContent,
              ]}>
              {content}
            </p>
          ) : null}
        </div>
      </div>
    );
  }
}

export default radium(FieldImage);
