// @flow

import React from 'react';
import radium from 'radium';

const styles = {
  wrapper: {
    width: 210,
  },
  image: {
    width: 210,
    height: 210,
  },
  text: {
    textAlign: 'center',
    fontSize: 16,
    lineHeight: 1.75,
    letterSpacing: 1,
    color: 'rgba(255, 255, 255, 0.87)',
    margin: '22px 0 0 0',
  },
};

function EquipmentImage({
  image,
  text,
}: {
  image: string,
  text: string,
}) {
  return (
    <div style={styles.wrapper}>
      <img src={image} alt="equipment" style={styles.image} />
      <p style={styles.text}>{text}</p>
    </div>
  );
}

export default radium(EquipmentImage);
