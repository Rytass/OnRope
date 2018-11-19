// @flow

import React, { PureComponent } from 'react';
import radium from 'radium';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { closeEquipModal } from '../actions/Equipment.js';
import equipment1 from '../static/images/equipment-01.png';
import equipment2 from '../static/images/equipment-02.png';
import equipment3 from '../static/images/equipment-03.png';
import equipment4 from '../static/images/equipment-04.png';
import equipment5 from '../static/images/equipment-05.png';
import equipment6 from '../static/images/equipment-06.png';
import equipment7 from '../static/images/equipment-07.png';
import equipment8 from '../static/images/equipment-08.png';
import equipment9 from '../static/images/equipment-09.png';
import equipment10 from '../static/images/equipment-10.png';
import cancelIcon from '../static/images/icon-24-cancel.png';
import leftIcon from '../static/images/icon-48-arrow-left-bk.png';
import rightIcon from '../static/images/icon-48-arrow-right-bk.png';

const styles = {
  wrapper: {
    position: 'fixed',
    top: 0,
    left: 0,
    width: '100%',
    height: '100%',
    backgroundColor: 'rgba(0, 0, 0, 0.6)',
    zIndex: 9999,
    opacity: 0,
    pointerEvents: 'none',
  },
  shown: {
    opacity: 1,
    pointerEvents: 'auto',
  },
  container: {
    width: '100%',
    height: '100%',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  },
  imageWrapper: {
    height: 420,
    width: 420,
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    backgroundSize: 'cover',
    backgroundPosition: 'center',
    backgroundRepeat: 'no-repeat',
    position: 'relative',
  },
  arrowButton: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    padding: 0,
    border: 0,
    outline: 0,
    backgroundColor: 'transparent',
    cursor: 'pointer',
  },
  arrowIcon: {
    width: 48,
    height: 48,
  },
  cancelButton: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    padding: 0,
    border: 0,
    outline: 0,
    backgroundColor: 'transparent',
    cursor: 'pointer',
    position: 'absolute',
    top: 0,
    right: -43,
  },
  cancelIcon: {
    width: 22,
    height: 22,
  },
};

class EquipmentModal extends PureComponent<Props> {
  static EQUIPMENTS = [
    equipment1,
    equipment2,
    equipment3,
    equipment4,
    equipment5,
    equipment6,
    equipment7,
    equipment8,
    equipment9,
    equipment10,
  ];

  static getDerivedStateFromProps({
    index,
  }, {
    currentIndex,
  }) {
    if (index !== currentIndex && isNaN(currentIndex) && !isNaN(index)) {
      return {
        currentIndex: index,
      };
    }

    if (index !== currentIndex && !isNaN(currentIndex) && isNaN(index)) {
      return {
        currentIndex: index,
      };
    }

    return null;
  }

  constructor(props) {
    super(props);

    this.state = {
      currentIndex: props.index,
    };
  }

  previous() {
    const {
      currentIndex,
    } = this.state;

    if (currentIndex !== 0) {
      this.setState({ currentIndex: currentIndex - 1 });
    }
  }

  next() {
    const {
      currentIndex,
    } = this.state;

    if (currentIndex !== 9) {
      this.setState({ currentIndex: currentIndex + 1 });
    }
  }

  render() {
    const {
      currentIndex,
    } = this.state;

    const {
      closeModal,
    } = this.props;

    return (
      <div
        style={[
          styles.wrapper,
          !isNaN(currentIndex) && styles.shown,
        ]}>
        <div style={styles.container}>
          <div
            style={[
              styles.imageWrapper,
              { backgroundImage: `url(${EquipmentModal.EQUIPMENTS[currentIndex]})` },
            ]}>
            <button type="button" style={styles.arrowButton} onClick={() => this.previous()}>
              <img src={leftIcon} alt="left-arrow" style={styles.arrowIcon} />
            </button>
            <button type="button" style={styles.arrowButton} onClick={() => this.next()}>
              <img src={rightIcon} alt="right-arrow" style={styles.arrowIcon} />
            </button>
            <button type="button" style={styles.cancelButton} onClick={() => closeModal()}>
              <img src={cancelIcon} alt="cancel" style={styles.cancelIcon} />
            </button>
          </div>
        </div>
      </div>
    );
  }
}

const reduxHook = connect(
  state => ({
    index: state.Equipment.index,
  }),
  dispatch => bindActionCreators({
    closeModal: () => closeEquipModal(),
  }, dispatch)
);

export default reduxHook(radium(EquipmentModal));
