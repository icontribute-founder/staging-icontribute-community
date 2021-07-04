import React from 'react';
import heart from '../../../images/heart colour 1.png';
import './SmallPhotoBlock.css';

const SmallPhotoBlock = (props) => {
  return (
    <div className="sphoto-block-box">
      <div className="sphoto-block">
        <div className="sphoto-wrapper">
          <img className="sphoto-block-photo" src={props.photo} alt={props.title} />
        </div>
        <div className="sphoto-infoblock">
          <h1 className="sphoto-title">
            {props.title}
            <img className="sphoto-icon" src={heart} alt="heart" />
          </h1>
          <h2 className="sphoto-location">{props.location}</h2>
          <h3 className="sphoto-date">
            {props.date}
            <h3 className="sphoto-distance">{props.distance}</h3>
          </h3>
        </div>
      </div>
    </div>
  );
};

export default SmallPhotoBlock;
