// @flow

import React from 'react';
import radium from 'radium';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { showEquipModal } from '../../actions/Equipment.js';

const styles = {
  wrapper: {
    width: 210,
    margin: '0 12px',
    cursor: 'pointer',
    ':hover': {
      opacity: 0.9,
    },
  },
  image: {
    width: 210,
    height: 210,
  },
  text: {
    textAlign: 'center',
    fontWeight: 300,
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
  index,
  setIndex,
}: {
  image: string,
  text: string,
  index: number,
  setIndex: Function,
}) {
  return (
    <div style={styles.wrapper} onClick={() => setIndex(index)}>
      <img src={image} alt="equipment" style={styles.image} />
      <p style={styles.text}>{text}</p>
    </div>
  );
}

const reduxHook = connect(
  () => ({

  }),
  dispatch => bindActionCreators({
    setIndex: index => showEquipModal(index),
  }, dispatch)
);

export default reduxHook(radium(EquipmentImage));
