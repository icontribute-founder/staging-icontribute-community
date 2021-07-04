import React from 'react';
import iphone1 from '../../../images/iphone/iphone1.png';
import iphone2 from '../../../images/iphone/iphone2.png';
import notification from '../../../images/Frame 213.png';
import apple from '../../../images/1 25.png';
import google from '../../../images/1 26.png';
import SmallPhotoBlock from '../SmallPhotoBlock/SmallPhotoBlock';
import test2 from '../../../images/cristi-tohatan-XIBIC21QeZQ-unsplash 1.png';
import test3 from '../../../images/Frame 205.png';
import './HowItWorksContainer.css';

const photos = [
  {
    photo: test2,
    title: 'Fundraiser',
    location: 'Ottawa Community',
    date: 'Sat Jun 16, 2020',
    distance: '10.1 km'
  },
  {
    photo: test3,
    title: 'Student Volunteer',
    location: 'Ottawa Community',
    date: 'Sat Jun 17 2020',
    distance: '10.1 km'
  }
];

const HowItWorksContainer = () => {
  return (
    <div data-aos="fade-up" className="howitworks-container">
      <div className="howitworks-header">
        <h1>HOW IT WORKS</h1>
        <h2>Connect to 1000s of students in the community</h2>
      </div>
      <div className="step-left">
        <h1>STEP 1</h1>
        <div className="yellow-dot" />
      </div>
      <div className="howitworks-step-left">
        <div className="howitworks-step-text-left">
          <h1>Download the app</h1>
          <h2>Download iContribute app for your mobile device. It works with iOS and Android.</h2>
          <a
            href="https://apps.apple.com/ca/app/icontribute/id1524895764?ign-mpt=uo%3D4"
            target="_blank"
            rel="noopener noreferrer"
            className="appstore"
          >
            <img src={apple} alt="App Store download" />
          </a>
          <a
            href="https://play.google.com/store/apps/details?id=com.icontribute"
            target="_blank"
            rel="noopener noreferrer"
            className="appstore"
          >
            <img src={google} alt="Google Play download" />
          </a>
        </div>
        <div className="howitworks-iphone">
          <img src={iphone1} alt="Phone home screen" />
        </div>
      </div>

      <div className="step-right">
        <h1>STEP 2</h1>
        <div className="yellow-dot" />
      </div>
      <div className="howitworks-step-right">
        <div className="howitworks-iphone">
          <img src={iphone2} alt="Setting up your organization" />
        </div>
        <div className="howitworks-step-text-right">
          <h1>Sign Up as an Organization</h1>
          <h2>Fill in the required fields to make an account with us. It only takes a few fields.</h2>
        </div>
      </div>
      <div className="step-left">
        <h1>STEP 3</h1>
        <div className="yellow-dot" />
      </div>
      <div className="howitworks-step-left">
        <div className="howitworks-step-text-left">
          <h1>Create and Post your Events</h1>
          <h2>Fill in the details about your event and the time slots you would like volunteers to work.</h2>
        </div>
        <div className="howitworks-photoblock-container">
          <div className="howitworks-photoblock-wrapper">
            {photos.map((block, blockId) => {
              return (
                <SmallPhotoBlock
                  key={blockId}
                  photo={block.photo}
                  title={block.title}
                  location={block.location}
                  date={block.date}
                  distance={block.distance}
                />
              );
            })}
          </div>
        </div>
      </div>
      <div className="step-center">
        <div className="yellow-dot" />
        <h1>STEP 4</h1>
      </div>
      <div className="step4-wrapper">
        <h1>Confirm Your Volunteers</h1>
        <p>
          Volunteers will apply to your event and all you have to do is confirm if they will be attending via email.
        </p>
        <div className="mail-notification">
          <img src={notification} alt="Notification of volunteer application" />
        </div>
      </div>
    </div>
  );
};

export default HowItWorksContainer;
