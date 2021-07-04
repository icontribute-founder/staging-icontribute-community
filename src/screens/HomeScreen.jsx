import React, { useEffect } from 'react';
import ReactGA from 'react-ga';

import MainBlock from '../components/home/MainBlock/MainBlock';
import DemoBlock from '../components/home/DemoBlock/DemoBlock';
import PhotoBlockContainer from '../components/home/PhotoBlockContainer/PhotoBlockContainer';
import PartnerBlock from '../components/home/PartnerBlock/PartnersBlock';
import VideoBlock from '../components/home/VideoBlock/VideoBlock';
import FAQBlock from '../components/home/FAQBlock/FAQBlock';

import { useMediaQuery } from 'react-responsive';
import { MOBILE_SCREEN_SIZE } from '../constants/MediaQueries';

const HomeScreen = () => {
  const isMobile = useMediaQuery({ maxWidth: MOBILE_SCREEN_SIZE });
  useEffect(() => {
    document.title = 'iContribute - Home';
    ReactGA.pageview(window.location.hash.substring(1)); // substring excludes the hash "#"
  }, []);

  return (
    <div>
      <MainBlock />
      {isMobile ? null : <PhotoBlockContainer />}
      <DemoBlock />
      <PartnerBlock />
      {isMobile ? <VideoBlock /> : null}
      <FAQBlock />
    </div>
  );
};

export default HomeScreen;