import React from 'react';
import linkedin from '../../images/icons/linkedin-brands.svg';
import tiktok from '../../images/icons/tiktok-brands.svg';
import instagram from '../../images/icons/instagram-brands.svg';
import './SocialMediaBar.css';

function SocialMediaBar() {
  return (
    <div className="SocialMediaBar">
      <a
        href="https://www.linkedin.com/company/icontribute/"
        target="_blank"
        rel="noopener noreferrer"
        className="SocialMediaBar-Link"
      >
        <img src={linkedin} alt="linkedin" className="SocialMediaBar-Icon" />
      </a>
      <a
        href="https://www.tiktok.com/@icontribute"
        target="_blank"
        rel="noopener noreferrer"
        className="SocialMediaBar-Link"
      >
        <img src={tiktok} alt="tiktok" className="SocialMediaBar-Icon" />
      </a>
      <a
        href="https://www.instagram.com/icontribute.community/"
        target="_blank"
        rel="noopener noreferrer"
        className="SocialMediaBar-Link"
      >
        <img src={instagram} alt="instagram" className="SocialMediaBar-Icon" />
      </a>
    </div>
  );
}

export default SocialMediaBar;
