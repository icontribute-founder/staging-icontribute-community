import React from 'react';
import Markdown from 'markdown-to-jsx';
import blank_profile from '../../../images/team/blank_profile.png';

import './TestimonialCard.css';

const TestimonialsBlock = ({ testimonial }) => {
  const { name, title, profilePicture, quote } = testimonial;

  const img = profilePicture ? profilePicture.url : blank_profile;

  return (
    <div className="TestimonialCard">
      <blockquote className="TestimonialCard-Quote">
        <p>
          <Markdown>{quote}</Markdown>
        </p>
      </blockquote>
      <div className="TestimonialCard-Profile">
        <img className="TestimonialCard-ProfilePicture" src={img} alt="testimonial profile" />
        <div className="TestimonialCard-ProfileText">
          <p className="TestimonialCard-ProfileName">{name}</p>
          <p className="TestimonialCard-ProfileTitle">{title}</p>
        </div>
      </div>
    </div>
  );
};

export default TestimonialsBlock;
