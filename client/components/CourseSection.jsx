// @flow

import React from 'react';
import TextImage from './elements/TextImage.jsx';
import classPhoto1 from '../static/images/class-photo-01.png';
import classPhoto2 from '../static/images/class-photo-02.png';
import classPhoto3 from '../static/images/class-photo-03.png';

const styles = {
  wrapper: {
    width: '100%',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'flex-start',
    alignItems: 'center',
  },
  title: {
    fontSize: 32,
    fontWeight: 600,
    lineHeight: 1,
    letterSpacing: 2,
    color: 'rgba(255, 255, 255, 0.92)',
    margin: '64px 0 56px 0',
  },
  imagesWrapper: {
    width: '100%',
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'flex-start',
    alignItems: 'center',
  },
  image: {
    height: 347,
  },
};

function CourseSection() {
  return (
    <div style={styles.wrapper}>
      <h2 style={styles.title}>課程介紹</h2>
      <div style={styles.imagesWrapper}>
        <TextImage
          hasBackground
          title="工程施作"
          image={classPhoto1}
          imageStyle={styles.image} />
        <TextImage
          hasBackground
          title="外牆相關工作"
          image={classPhoto2}
          imageStyle={styles.image} />
        <TextImage
          hasBackground
          title="燈光舞台音響架設"
          image={classPhoto3}
          imageStyle={styles.image} />
      </div>
    </div>
  );
}

export default CourseSection;
