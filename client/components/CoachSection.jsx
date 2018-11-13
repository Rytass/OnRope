// @flow

import React from 'react';

const styles = {
  wrapper: {
    width: '100%',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'flex-start',
    alignItems: 'center',
    backgroundColor: '#212121',
  },
  title: {
    fontSize: 36,
    fontWeight: 600,
    letterSpacing: 1.5,
    color: '#2fa3c4',
  },
};

function CoachSection() {
  return (
    <div style={styles.wrapper}>
      <h2 style={styles.title}>教練介紹</h2>
    </div>
  );
}

export default CoachSection;
