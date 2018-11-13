// @flow

import React from 'react';
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
    top: 0,
    rigth: 0,
    zIndex: 9,
  },
};

function TextImage({
  title,
  image,
  content,
  isBig,
}: {
  title: string,
  image: string,
  content: string,
  isBig: boolean,
}) {
  return (
    <div
      style={[
        styles.wrapper,
        { backgroundImage: `url(${image})` },
        isBig && styles.bigPadding,
      ]}>
      <div style={styles.blackBackground} />
      <div style={styles.textWrapper}>
        <p style={styles.title}>{title}</p>
        <p
          style={[
            styles.content,
            !isBig && styles.absoluteContent,
          ]}>
          {content}
        </p>
      </div>
    </div>
  );
}

export default radium(TextImage);
