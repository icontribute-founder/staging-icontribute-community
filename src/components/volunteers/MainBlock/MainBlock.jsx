import React from 'react';
import apple from '../../../images/1 25.png';
import google from '../../../images/1 26.png';
import './MainBlock.css';

const MainBlock = () => {
  return (
    <div data-aos="fade-up" className="Volunteers-MainBlock">
      <div className="Volunteers-MainBlock-Info">
        <h1 className="Volunteers-MainBlock-Header">Find volunteer events effortlessly.</h1>
        <p className="Volunteers-MainBlock-Details">
          It is easy to get started with us here. After creating an account with us, you will be able to browse from a
          variety of volunteer events.
        </p>
        <a
          href="https://apps.apple.com/ca/app/icontribute/id1524895764?ign-mpt=uo%3D4"
          target="_blank"
          rel="noopener noreferrer"
          className="Volunteers-MainBlock-AppstoreLink"
        >
          <img src={apple} alt="App Store download" />
        </a>
        <a
          href="https://play.google.com/store/apps/details?id=com.icontribute"
          target="_blank"
          rel="noopener noreferrer"
          className="Volunteers-MainBlock-AppstoreLink"
        >
          <img src={google} alt="Google Play download" />
        </a>
      </div>
      <iframe
        className="Volunteers-MainBlock-Video"
        data-aos="fade-up"
        title="iContribute launch video"
        src="https://drive.google.com/file/d/1tj2jsvMgDrHY7MHLsTzh0Qf7kaLlK-Rv/preview"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
        frameBorder="0"
        width="500"
        height="300"
      />
    </div>
  );
};

export default MainBlock;
