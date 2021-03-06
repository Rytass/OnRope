// @flow

import React, { PureComponent } from 'react';
import radium from 'radium';
import marker from '../static/images/map-pin.png';

const styles = {
  wrapper: {
    width: '100%',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'flex-start',
    alignItems: 'center',
    backgroundColor: '#212121',
    padding: '32px 0 0 0',
  },
  title: {
    fontSize: 36,
    fontWeight: 600,
    letterSpacing: 1.5,
    color: '#2fa3c4',
    margin: '48px 0',
  },
  subtitle: {
    fontSize: 28,
    fontWeight: 600,
    letterSpacing: 2,
    color: '#fff',
    margin: 0,
    '@media (max-width: 767px)': {
      textAlign: 'center',
      margin: '0 24px',
    },
  },
  map: {
    width: '100%',
    height: 567,
    margin: '56px 0 0 0',
    '@media (max-width: 374px)': {
      height: 500,
    },
  },
  infoWrapper: {
    width: '100%',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'flex-start',
    alignItems: 'center',
    padding: '56px 0',
    backgroundImage: 'linear-gradient(102deg, #5cd0e4, #2fa3c4)',
    '@media (max-width: 1050px)': {
      padding: '48px 0 16px 0',
    },
  },
  infoTitle: {
    fontSize: 28,
    fontWeight: 600,
    letterSpacing: 2,
    color: '#1b4550',
    margin: 0,
  },
  infoSubtitle: {
    fontSize: 16,
    lineHeight: 1.5,
    letterSpacing: 1.1,
    color: '#1b4550',
    margin: '16px 0',
    '@media (max-width: 1050px)': {
      margin: '16px 0 8px 0',
    },
  },
  trafficWrapper: {
    display: 'flex',
    flexDirection: 'row',
    padding: '32px 0 0 0',
    flexWrap: 'wrap',
    '@media (max-width: 1050px)': {
      justifyContent: 'center',
      padding: 0,
    },
  },
  trafficBlock: {
    width: 420,
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'flex-start',
    justifyContent: 'flex-start',
    margin: '0 19px',
    '@media (max-width: 1390px)': {
      width: 312,
      margin: 16,
    },
    '@media (max-width: 767px)': {
      width: 304,
      margin: '8px 0',
    },
  },
  trafficTitle: {
    fontSize: 14,
    fontWeight: 600,
    lineHeight: '24px',
    letterSpacing: 1,
    color: '#1b4550',
    margin: 0,
  },
  trafficContent: {
    fontSize: 14,
    lineHeight: '24px',
    letterSpacing: 0.7,
    color: '#1b4550',
    margin: 0,
    wordBreak: 'break-all',
  },
  sapceBlock: {
    '@media (max-width: 1050px) and (min-width: 768px)': {
      width: 312,
      margin: 16,
    },
    '@media (max-width: 767px)': {
      width: 304,
      margin: '8px 0',
    },
  },
};

class MapSection extends PureComponent {
  componentDidMount() {
    if (typeof google === 'undefined') {
      window.onGoolgeMapsLoadedCallbacks.push(() => this.renderMap());
    } else {
      this.renderMap();
    }
  }

  renderMap() {
    this.map = new google.maps.Map(document.getElementById('map'), {
      center: { lat: 25.0432476, lng: 121.4275332 },
      zoom: 17,
    });

    this.marker = new google.maps.Marker({
      position: new google.maps.LatLng(25.0432476, 121.4275332),
      icon: marker,
      map: this.map,
    });
  }

  render() {
    return (
      <div id="place" style={styles.wrapper}>
        <h2 style={styles.title}>場地位置</h2>
        <h2 style={styles.subtitle}>新北最亮眼最舒適的繩索訓練中心</h2>
        <div style={styles.map} id="map" />
        <div style={styles.infoWrapper}>
          <h2 style={styles.infoTitle}>泰鼎小將有限公司</h2>
          <h2 style={styles.infoSubtitle}>新北市泰山區中央路5巷32-1號</h2>
          <div style={styles.trafficWrapper}>
            <div style={styles.trafficBlock}>
              <p style={styles.trafficTitle}>免費接駁車</p>
              <p style={styles.trafficContent}>台北車站北三門至 泰山明志國小下車後步行五分鐘可到達</p>
              <a
                href="https://www.taishan.ntpc.gov.tw/archive/file/明志線F216.png"
                style={styles.trafficContent}
                target="_blank"
                rel="noopener noreferrer">
                <span>接駁車時刻表</span>
              </a>
            </div>
            <div style={styles.trafficBlock}>
              <p style={styles.trafficTitle}>捷運中和新蘆線</p>
              <p style={styles.trafficContent}>丹鳳站 出口1 轉乘下列公車至 明志國小站，步行五分鐘可到達</p>
              <p style={styles.trafficContent}>637 /638/797/801/880/883/1501/1503</p>
            </div>
            <div style={styles.trafficBlock}>
              <p style={styles.trafficTitle}>機場捷運線</p>
              <p style={styles.trafficContent}>泰山貴和站 轉乘下列公車至 明志國小站，步行五分鐘可到達</p>
              <p style={styles.trafficContent}>
                637/638/797/798/801/858/880/883/898/1501/1503/F211
              </p>
            </div>
            <div style={styles.sapceBlock} />
          </div>
        </div>
      </div>
    );
  }
}

export default radium(MapSection);
