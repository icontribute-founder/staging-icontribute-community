import React, { useEffect } from 'react';
import Modal from 'react-modal';
import blank_profile from '../../images/team/blank_profile.png';
import './ProfileModal.css';

Modal.setAppElement('#ProfileModalDiv');

function ProfileModal({ isOpen, closeModal, teamMember }) {
  useEffect(
    () => {
      // disable scroll when the modal is open
      if (isOpen) {
        document.body.style.overflow = 'hidden';
      } else {
        document.body.style.overflow = 'unset';
      }
    },
    [ isOpen ]
  );

  const joinDate = new Date(teamMember.dateJoined);
  joinDate.setTime(joinDate.getTime() + 5 * 60 * 60 * 1000); // add 5 hours (in milliseconds) to compensate for EST timezone

  const year = joinDate.getUTCFullYear();
  const month = joinDate.getUTCMonth() + 1; // months from 1-12
  const day = joinDate.getUTCDate();
  let joinDateString = `${year} / ${month} / ${day}`;

  if (isFounder(teamMember)) {
    joinDateString = 'since the start 🙂';
  }

  return (
    <Modal
      className="ProfileModal"
      isOpen={isOpen}
      contentLabel="Profile Modal"
      onRequestClose={closeModal}
      shouldCloseOnOverlayClick
    >
      <div className="ProfileModal-Info">
        <img
          className="ProfileModal-Pic"
          src={teamMember.profilePicture ? teamMember.profilePicture.url : blank_profile}
          alt={`${teamMember.fullName}'s profile pic`}
        />
        <p className="ProfileModal-Name">{teamMember.fullName}</p>
        <p className="ProfileModal-Role">{teamMember.role}</p>
        <p className="ProfileModal-DateJoined">Joined: {joinDateString}</p>
        {isFounder(teamMember) ? null : (
          <p className="ProfileModal-Status">Status: {teamMember.isAlumni ? 'alumni 👋' : 'killing it 😎'}</p>
        )}
      </div>
      {!teamMember.narrative ? null : <p className="ProfileModal-Narrative">{teamMember.narrative}</p>}
    </Modal>
  );
}

function isFounder(teamMember) {
  return teamMember.role && teamMember.role.toLowerCase().includes('founder');
}

export default ProfileModal;
