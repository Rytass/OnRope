// @flow

import React from 'react';
import radium from 'radium';

const styles = {
  wrapper: {
    flex: 1,
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundSize: 'cover',
    backgroundPosition: 'center',
    backgroundRepeat: 'no-repeat',
    position: 'relative',
  },
  title: {
    fontSize: 32,
    fontWeight: 600,
    lineHeight: 1.06,
    letterSpacing: 1.3,
    color: '#fff',
    zIndex: 10,
    '@media (max-width: 1023px) and (min-width: 480px)': {
      fontSize: 24,
      letterSpacing: 1,
    },
  },
  blackBackground: {
    width: '100%',
    height: '100%',
    backgroundColor: 'rgba(0, 0, 0, 0.3)',
    position: 'absolute',
    top: 0,
    rigth: 0,
    zIndex: 9,
  },
};

function TextImage({
  title,
  image,
  imageStyle,
  hasBackground,
}: {
  title: string,
  image: string,
  imageStyle: {},
  hasBackground: boolean,
}) {
  return (
    <div
      style={[
        styles.wrapper,
        { backgroundImage: `url(${image})` },
        imageStyle,
      ]}>
      {hasBackground ? (
        <div style={styles.blackBackground} />
      ) : null}
      <p style={styles.title}>{title}</p>
    </div>
  );
}

export default radium(TextImage);
