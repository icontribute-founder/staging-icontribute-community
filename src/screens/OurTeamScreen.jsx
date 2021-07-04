import React, { useEffect, useState } from 'react';
import ReactGA from 'react-ga';

import MainBlock from '../components/ourteam/MainBlock/MainBlock';
import AcrossGlobeBlock from '../components/ourteam/AcrossGlobeBlock/AcrossGlobeBlock';
import TeamBlock from '../components/ourteam/TeamBlock/TeamBlock';
import TeamCallBlock from '../components/ourteam/TeamCallBlock/TeamCallBlock';

import fetchTeam from '../queries/TeamMembers';

const OurTeamScreen = () => {
  const [ teamMembers, setTeamMembers ] = useState([]);
  const [ teamLocations, setTeamLocations ] = useState([]);
  useEffect(() => {
    document.title = 'iContribute - Our Team';
    ReactGA.pageview(window.location.hash.substring(1)); // substring excludes the hash "#"
  }, []);

  useEffect(() => {
    fetchTeam(setTeamMembers, setTeamLocations);
  }, []);

  return (
    <div className="ourteam-page">
      <MainBlock />
      <AcrossGlobeBlock teamLocations={teamLocations} />
      <TeamBlock teamMembers={teamMembers} />
      <TeamCallBlock />
    </div>
  );
};

export default OurTeamScreen;
