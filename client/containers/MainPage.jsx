// @flow

import React, { PureComponent } from 'react';
import Header from '../components/Header.jsx';
import SlideShow from '../components/SlideShow.jsx';
import ReasonSection from '../components/ReasonSection.jsx';
import CourseSection from '../components/CourseSection.jsx';
import FieldSection from '../components/FieldSection.jsx';
import EquipmentSection from '../components/EquipmentSection.jsx';

const styles = {
  wrapper: {
    width: '100%',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'flex-start',
    justifyContent: 'flex-start',
  },
};

type Props = {

}

class MainPage extends PureComponent<Props> {
  render() {
    return (
      <div style={styles.wrapper}>
        <Header />
        <SlideShow />
        <ReasonSection />
        <CourseSection />
        <FieldSection />
        <EquipmentSection />
      </div>
    );
  }
}

export default MainPage;
