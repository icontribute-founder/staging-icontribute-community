import React, { useEffect } from 'react';
import ReactGA from 'react-ga';

import MainBlock from '../components/volunteers/MainBlock/MainBlock';
import WCYDBubbleContainer from '../components/volunteers/WCYDBubbleContainer/WCYDBubbleContainer';
import ConnectBlock from '../components/volunteers/ConnectBlock/ConnectBlock';
import TestimonialsBlock from '../components/volunteers/TestimonialsBlock/TestimonialsBlock';

const VolunteersScreen = () => {
  useEffect(() => {
    document.title = 'iContribute - Volunteers';
    ReactGA.pageview(window.location.hash.substring(1)); // substring excludes the hash "#"
  }, []);

  return (
    <div>
      <MainBlock />
      <WCYDBubbleContainer />
      <ConnectBlock />
      <TestimonialsBlock />
    </div>
  );
};

export default VolunteersScreen;
