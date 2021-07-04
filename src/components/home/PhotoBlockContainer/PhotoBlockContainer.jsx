import React from 'react';
import PhotoBlock from '../../PhotoBlock/PhotoBlock';
import test2 from '../../../images/cristi-tohatan-XIBIC21QeZQ-unsplash 1.png';
import './PhotoBlockContainer.css';

const photos = [
  {
    photo: test2,
    title: 'Fundraiser',
    location: 'Ottawa Community',
    date: 'Sat Jun 12, 2020',
    distance: '10 km'
  }
];

const PhotoBlockContainer = () => {
  return (
    <div data-aos="fade-up" className="photoblock-container">
      <div className="mainblock-photo">
        {photos.map((photo, blockId) => {
          return (
            <PhotoBlock
              key={blockId}
              photo={photo.photo}
              title={photo.title}
              location={photo.location}
              date={photo.date}
              distance={photo.distance}
            />
          );
        })}
      </div>
      <div className="getstarted">
        <h2 className="photoblock-container-header">Make a meaningful contribution to your community</h2>
        <a href="mailto:icontribute.founder@gmail.com" className="solid-yellow">
          GET STARTED
        </a>
      </div>
    </div>
  );
};

export default PhotoBlockContainer;
