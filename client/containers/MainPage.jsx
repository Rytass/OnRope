// @flow

import React, { PureComponent } from 'react';
import Header from '../components/Header.jsx';
import SlideShow from '../components/SlideShow.jsx';
import ReasonSection from '../components/ReasonSection.jsx';
import CourseSection from '../components/CourseSection.jsx';
import VerticalSection from '../components/VerticalSection.jsx';
import FieldSection from '../components/FieldSection.jsx';
import EquipmentSection from '../components/EquipmentSection.jsx';
import RentSection from '../components/RentSection.jsx';
import CoachSection from '../components/CoachSection.jsx';
import EventSection from '../components/EventSection.jsx';
import ConnectionSection from '../components/ConnectionSection.jsx';
import MapSection from '../components/MapSection.jsx';
import Footer from '../components/Footer.jsx';
import NaviLinkWrapper from './NaviLinkWrapper.jsx';

const styles = {
  wrapper: {
    width: '100%',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'flex-start',
    justifyContent: 'flex-start',
  },
  sectionWrapper: {
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
        <div id="header" style={styles.sectionWrapper}>
          <Header />
          <SlideShow />
        </div>
        <ReasonSection />
        <CourseSection />
        <div id="vertical" style={styles.sectionWrapper}>
          <VerticalSection />
        </div>
        <FieldSection />
        <div id="equip" style={styles.sectionWrapper}>
          <EquipmentSection />
          <RentSection />
        </div>
        <CoachSection />
        <EventSection />
        <ConnectionSection />
        <MapSection />
        <Footer />
        <NaviLinkWrapper />
      </div>
    );
  }
}

export default MainPage;
