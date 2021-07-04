import React from 'react';
import card0 from '../../images/cards/Event Card 0.png';
import card1 from '../../images/cards/Event Card.png';
import card2 from '../../images/cards/Event Card 2.png';
import card3 from '../../images/cards/Event Card 3.png';
import 'react-responsive-carousel/lib/styles/carousel.min.css';
import { Carousel } from 'react-responsive-carousel';
import shuffle from 'shuffle-array';
import './EventCardCarousel.css';

const EventCardCarousel = () => {
  const items = [
    <div className="CarouselItem">
      <img src={card0} alt="event card" />
    </div>,
    <div className="CarouselItem">
      <img src={card1} alt="event card" />
    </div>,
    <div className="CarouselItem">
      <img src={card2} alt="event card" />
    </div>,
    <div className="CarouselItem">
      <img src={card3} alt="event card" />
    </div>
  ];

  return (
    <div className="EventCardCarousel">
      <Carousel
        autoPlay
        transitionTime={750}
        emulateTouch
        infiniteLoop
        showArrows={false}
        showIndicators={false}
        showThumbs={false}
        showStatus={false}
        stopOnHover={false}
      >
        {shuffle(items)}
      </Carousel>
    </div>
  );
};

export default EventCardCarousel;
