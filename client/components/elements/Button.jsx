// @flow

import React from 'react';
import radium from 'radium';

const styles = {
  wrapper: {
    width: 320,
    height: 48,
    borderRadius: 4,
    backgroundColor: '#4bb3d0',
  },
  highter: {
    height: 58,
  },
  thin: {
    width: 256,
  },
  link: {
    textDecoration: 'none',
  },
  buttonWrapper: {
    width: '100%',
    height: '100%',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
  },
  text: {
    fontSize: 16,
    fontWeight: 500,
    lineHeight: 1.13,
    letterSpacing: 0.9,
    color: '#fff',
  },
};

function Button({
  url,
  text,
  isHigher,
  isThin,
}: {
  url: string,
  text: string,
  isHigher: boolean,
  isThin: boolean,
}) {
  return (
    <div style={[
      styles.wrapper,
      isHigher && styles.highter,
      isThin && styles.thin,
    ]}>
      <a
        style={styles.link}
        href={url}
        rel="noopener noreferrer">
        <div style={styles.buttonWrapper}>
          <span style={styles.text}>{text}</span>
        </div>
      </a>
    </div>
  );
}

export default radium(Button);
