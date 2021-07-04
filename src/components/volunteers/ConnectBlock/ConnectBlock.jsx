import React from 'react';
import phone from '../../../images/icons/Phone.png';
import email from '../../../images/email.png';
import './ConnectBlock.css';

const ConnectBlock = () => {
  return (
    <div data-aos="fade-up" className="connect-container">
      <div className="connect-wrapper">
        <div className="connect-header">
          <h1>Connect with organizations at the tips of your fingers</h1>
          <p>You apply to the event, and we immediately draft an email for you to reach out to the organization.</p>
        </div>
        <img id="connect-icon" src={phone} alt="phone icon" />
      </div>
      <img id="connect-email" src={email} alt="example email" />
    </div>
  );
};

export default ConnectBlock;
