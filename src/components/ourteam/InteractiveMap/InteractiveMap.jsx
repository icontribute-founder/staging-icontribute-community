import React, { useState } from 'react';
import { TransitionGroup, CSSTransition } from 'react-transition-group';
import Globe from '../Globe/Globe';
import ProfilePopup from '../ProfilePopup/ProfilePopup';
import './InteractiveMap.css';

const InteractiveMap = ({ teamLocations }) => {
  const [ peopleOfHoveredLocation, setPeopleOfHoveredLocation ] = useState([]);
  const [ mousePosition, setMousePosition ] = useState('right');

  return (
    <div className="InteractiveMap">
      <Globe
        teamLocations={teamLocations}
        setPeopleOfHoveredLocation={setPeopleOfHoveredLocation}
        setMousePosition={setMousePosition}
      />
      {/* zIndex = -1 is NEEDED or else a bug happens when hovering over dots on the globe */}
      <div className="InteractiveMap-Popups" style={{ zIndex: '-1' }}>
        <TransitionGroup>
          {peopleOfHoveredLocation.map((person, idx) => {
            const delay = `${idx * 30}ms`;
            const className =
              (idx % 2 === 0 && mousePosition === 'right') || (idx % 2 === 1 && mousePosition === 'left')
                ? 'ProfilePopup-transition-right'
                : 'ProfilePopup-transition-left';
            return (
              <CSSTransition key={idx} timeout={400} classNames={className}>
                <ProfilePopup index={idx} teamMember={person} mousePosition={mousePosition} delay={delay} />
              </CSSTransition>
            );
          })}
        </TransitionGroup>
      </div>
    </div>
  );
};

export default InteractiveMap;
