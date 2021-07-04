import React from 'react';
import blank_profile from '../../../images/team/blank_profile.png';

import './ProfileCard.css';

const ProfileCard = ({ teamMember, setIsModalOpen, setCurrentTeamMember }) => {
  const handleClick = () => {
    setCurrentTeamMember(teamMember);
    setIsModalOpen(true);
  };

  return (
    <div className="ProfileCard">
      <img
        style={{ opacity: teamMember.isAlumni ? '0.2' : '1' }}
        className="ProfileCard-Pic"
        src={teamMember.profilePicture ? teamMember.profilePicture.url : blank_profile}
        alt={`${teamMember.fullName}'s profile pic`}
        onClick={handleClick}
      />
      <p className="ProfileCard-Name">{teamMember.fullName}</p>
      <p className="ProfileCard-Role">{teamMember.role}</p>
      {teamMember.isAlumni ? <p className="ProfileCard-Alumni">(alumni)</p> : null}
    </div>
  );
};

export default ProfileCard;
