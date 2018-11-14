// @flow

import React from 'react';
import radium from 'radium';

const styles = {
  wrapper: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'flex-start',
    alignItems: 'flex-start',
  },
  avatarWrapper: {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'flex-start',
    alignItems: 'center',
  },
  avatar: {
    width: 180,
    height: 180,
  },
  name: {
    fontSize: 30,
    lineHeight: 1.33,
    letterSpacing: 1,
    color: '#fff',
    maring: '35px 0 20px 0',
  },
  position: {
    fontSize: 18,
    fontWeight: 600,
    lineHeight: 2.22,
    letterSpacing: 1,
    color: '#4bb3d0',
    margin: 0,
  },
  infoWrapper: {
    width: 288,
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'flex-start',
    alignItems: 'flex-start',
    margin: '0 0 0 40px',
  },
  infoTitle: {
    fontSize: 14,
    lineHeight: '24px',
    letterSpacing: 1,
    color: '#fff',
    margin: 0,
  },
  infoContentWrapper: {
    margin: '0 0 24px 0',
  },
};

function Avatar({
  avatar,
  name,
  position,
  experience,
  license,
}: {
  avatar: string,
  name: string,
  position: string,
  experience: Function,
  license: Function,
}) {
  return (
    <div style={styles.wrapper}>
      <div style={styles.avatarWrapper}>
        <img src={avatar} alt="avatar" style={styles.avatar} />
        <p style={styles.name}>{name}</p>
        <p style={styles.position}>{position}</p>
      </div>
      <div style={styles.infoWrapper}>
        <div style={styles.infoContentWrapper}>
          <p style={styles.infoTitle}>經歷</p>
          {experience()}
        </div>
        <div>
          <p style={styles.infoTitle}>相關證照</p>
          {license()}
        </div>
      </div>
    </div>
  );
}

export default radium(Avatar);
