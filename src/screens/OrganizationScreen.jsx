import React, { useEffect } from 'react';
import ReactGA from 'react-ga';

import MainBlock from '../components/organizations/MainBlock/MainBlock';
import HowItWorksContainer from '../components/organizations/HowItWorksContainer/HowItWorksContainer';
import '../css/OrganizationScreen.css';

const OrganizationScreen = () => {
  useEffect(() => {
    document.title = 'iContribute - Organizations';
    ReactGA.pageview(window.location.hash.substring(1)); // substring excludes the hash "#"
  }, []);

  return (
    <div className="organization-page">
      <MainBlock />
      <HowItWorksContainer />
    </div>
  );
};

export default OrganizationScreen;
