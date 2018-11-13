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

function EventSection() {
  return (
    <div style={styles.wrapper}>
      <h2 style={styles.title}>事件回顧</h2>
    </div>
  );
}

export default EventSection;
