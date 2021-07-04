import React from 'react';
import blank_profile from '../../../images/team/blank_profile.png';
import './ProfilePopup.css';

const ProfilePopup = ({ teamMember, mousePosition, index, delay }) => {
  const baseStyle = {
    transitionDelay: delay,
    top: `-${index * 75}px`,
    animation: `fadein ${index + 1}s`
  };

  const stylePositionedRight = {
    left: '500px',
    flexDirection: 'row',
    textAlign: 'left',
    ...baseStyle
  };

  const stylePositionedLeft = {
    right: '500px',
    flexDirection: 'row-reverse',
    textAlign: 'right',
    ...baseStyle
  };

  let style;
  if ((index % 2 === 0 && mousePosition === 'right') || (index % 2 === 1 && mousePosition === 'left')) {
    style = stylePositionedRight;
  } else {
    style = stylePositionedLeft;
  }

  return (
    <div className={`ProfilePopup`} style={style}>
      <img
        className="ProfilePopup-img"
        src={teamMember.profilePicture ? teamMember.profilePicture.url : blank_profile}
        alt={`${teamMember.fullName}'s profile pic`}
      />

      <div className="ProfilePopup-text">
        <p>
          <strong>{teamMember.fullName}</strong> <br />
          {teamMember.role}
        </p>
        <p>{teamMember.education}</p>
      </div>
    </div>
  );
};

export default ProfilePopup;
