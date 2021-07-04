import React from 'react';
import InteractiveMap from '../InteractiveMap/InteractiveMap';
import './AcrossGlobeBlock.css';

const AcrossGlobeBlock = ({ teamLocations }) => {
  return (
    <div data-aos="fade-up" className="AcrossGlobeBlock">
      <h1 className="AcrossGlobeBlock-header">From Across The Continent</h1>
      <h2 className="AcrossGlobeBlock-subheader">
        Our team is located in multiple areas around the world. We have collaborated endlessly to bring our app to you.
      </h2>
      <InteractiveMap teamLocations={teamLocations} />
    </div>
  );
};

export default AcrossGlobeBlock;
