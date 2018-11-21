// @flow

import React from 'react';
import radium from 'radium';

const styles = {
  sectionWrapper: {
    width: '100%',
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    '@media (max-width: 1250px)': {
      alignItems: 'flex-start',
      justifyContent: 'flex-start',
      padding: '0 24px 0 0',
    },
    '@media (max-width: 767px)': {
      padding: 0,
      margin: '0 16px 0 0',
    },
  },
  dateTitle: {
    fontSize: 48,
    fontWeight: 600,
    color: '#2fa3c4',
    margin: '-12px 0 0 0',
    '@media (max-width: 1250px)': {
      margin: '0 0 24px 0',
    },
  },
  eventWrapper: {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'flex-start',
    justifyContent: 'center',
    borderWidth: '1px 0 0 0',
    borderStyle: 'solid',
    borderColor: '#398297',
    padding: '48px 0 36px 0',
    '@media (max-width: 1250px)': {
      border: 0,
      flexDirection: 'column',
      alignItems: 'flex-start',
      justifyContent: 'flex-start',
      padding: 0,
    },
  },
  underLine: {
    borderWidth: '1px 0',
    borderStyle: 'solid',
    borderColor: '#398297',
    '@media (max-width: 1250px)': {
      border: 0,
    },
  },
  eventImage: {
    width: 320,
    height: 210,
    margin: '0 40px',
    '@media (max-width: 1250px)': {
      width: 600,
      height: 393,
      margin: 0,
    },
    '@media (max-width: 767px)': {
      width: 320,
      height: 210,
      margin: '0 16px 0 0',
    },
  },
  eventContentWrapper: {
    width: 560,
    '@media (max-width: 767px)': {
      width: 320,
    },
  },
  contentTitle: {
    fontSize: 20,
    fontWeight: 600,
    letterSpacing: 1.4,
    color: '#fff',
    margin: '0 0 16px 0',
    '@media (max-width: 1250px)': {
      margin: '24px 0 16px 0',
    },
    '@media (max-width: 767px)': {
      margin: '24px 0 24px 0',
    },
  },
};

function EventItem({
  date,
  image,
  contentTitle,
  content,
  underLine,
}: {
  date: string,
  image: string,
  contentTitle: string,
  content: Funtion,
  underLine: boolean,
}) {
  return (
    <div style={styles.sectionWrapper}>
      <div style={[styles.eventWrapper, underLine && styles.underLine]}>
        <h2 style={styles.dateTitle}>{date}</h2>
        <img src={image} alt="event" style={styles.eventImage} />
        <div style={styles.eventContentWrapper}>
          <h2 style={styles.contentTitle}>{contentTitle}</h2>
          {content()}
        </div>
      </div>
    </div>
  );
}

export default radium(EventItem);
