import React, { useState, useEffect } from 'react';
import TestimonialCard from '../TestimonialCard/TestimonialCard';
import { Carousel } from 'react-responsive-carousel';
import fetchTestimonials from '../../../queries/Testimonials';

import './TestimonialsBlock.css';
import 'react-responsive-carousel/lib/styles/carousel.min.css'; // requires a loader

const TestimonialsBlock = () => {
  const [ testimonials, setTestimonials ] = useState([]);

  useEffect(() => {
    fetchTestimonials(setTestimonials);
  }, []);

  // the ternary statement in the render is required,
  // since autoPlay won't work without it
  return (
    <div data-aos="fade-up" className="TestimonialsBlock">
      <h2 className="TestimonialsBlock-header">Testimonials</h2>
      {testimonials.length > 0 ? (
        <Carousel
          infiniteLoop
          autoPlay
          useKeyboardArrows
          interval={3000}
          transitionTime={1000}
          showArrows={false}
          showStatus={false}
          showThumbs={false}
        >
          {testimonials.map((testimonial, i) => <TestimonialCard testimonial={testimonial} key={i} />)}
        </Carousel>
      ) : null}
    </div>
  );
};

export default TestimonialsBlock;
