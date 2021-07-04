import React from 'react';
import StripedTip from '../../StripedTip/StripedTip';
import main from '../../../images/Iphone_Macbook together.png';
import apple from '../../../images/1 25.png';
import google from '../../../images/1 26.png';
import EventCardCarousel from '../../EventCardCarousel/EventCardCarousel';
import './MainBlock.css';

import { useMediaQuery } from 'react-responsive';
import { MOBILE_SCREEN_SIZE } from '../../../constants/MediaQueries';

const MainBlock = () => {
  const isMobile = useMediaQuery({ maxWidth: MOBILE_SCREEN_SIZE });

  return (
    <div data-aos={isMobile ? '' : 'fade-up'} className="Home-MainBlock">
      <div className="Home-MainBlock-Info">
        <h1 className="Home-MainBlock-Header">Volunteering just got easier.</h1>
        <p className="Home-MainBlock-Details">
          We are making it easy to find, manage, and connect to volunteer opportunities for both students and
          organizations.
        </p>
        <a
          href="https://apps.apple.com/ca/app/icontribute/id1524895764?ign-mpt=uo%3D4"
          target="_blank"
          rel="noopener noreferrer"
          className="Home-MainBlock-AppstoreLink"
        >
          <img src={apple} alt="App Store download" />
        </a>
        <a
          href="https://play.google.com/store/apps/details?id=com.icontribute"
          target="_blank"
          rel="noopener noreferrer"
          className="Home-MainBlock-AppstoreLink"
        >
          <img src={google} alt="Google Play download" />
        </a>
        {isMobile ? (
          <div>
            <EventCardCarousel />
            <div className="Home-MainBlock-Tips">
              <StripedTip order={0} text="Easy to sign up with a few steps" />
              <StripedTip order={1} text="Free for both organizations and students" />
              <StripedTip order={2} text="Make new connections and grow your network" />
            </div>
          </div>
        ) : null}
      </div>
      {isMobile ? null : <img className="Home-MainBlock-Image" src={main} alt="iContribute phone" />}
    </div>
  );
};

export default MainBlock;
