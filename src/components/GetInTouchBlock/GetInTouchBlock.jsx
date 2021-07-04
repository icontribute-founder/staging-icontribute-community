import React from 'react';
import chatBubble from '../../images/bubbles.png';
import './GetInTouchBlock.css';

const GetInTouchBlock = () => {
  return (
    <div data-aos="fade-up" className="GetInTouchBlock">
      <img src={chatBubble} alt="chat bubble" className="GetInTouchBlock-Image" />
      <h1 className="GetInTouchBlock-Header">GET IN TOUCH WITH US</h1>
      <h2 className="GetInTouchBlock-Subheader">Feel free to reach out to us. We are happy to help.</h2>
      <a href="mailto:icontribute.founder@gmail.com" className="hollow-yellow">
        CONTACT
      </a>
    </div>
  );
};

export default GetInTouchBlock;
