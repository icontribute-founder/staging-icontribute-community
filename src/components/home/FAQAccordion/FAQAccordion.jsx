import React, { useState, useRef, useEffect } from 'react';
import Chevron from './Chevron';
import './FAQAccordion.css';

import { useMediaQuery } from 'react-responsive';
import { MOBILE_SCREEN_SIZE } from '../../../constants/MediaQueries';

function FAQAccordion(props) {
  const [ setActive, setActiveState ] = useState(props.isOpen ? 'accordion--active' : '');
  const [ setHeight, setHeightState ] = useState('0px');
  const [ setRotate, setRotateState ] = useState('accordion__icon');
  const isMobile = useMediaQuery({ maxWidth: MOBILE_SCREEN_SIZE });

  let chevronSize = 20;
  if (isMobile) chevronSize = 15;

  useEffect(
    () => {
      if (props.isOpen) {
        setActiveState('accordion--active');
        setHeightState(`${content.current.scrollHeight}px`);
        setRotateState('accordion__icon rotate');
      } else {
        setActiveState('');
        setHeightState('0px');
        setRotateState('accordion__icon');
      }
    },
    [ props.isOpen ]
  );

  const content = useRef(null);

  function toggleAccordion() {
    if (props.isOpen) {
      props.setIdxOfOpenedAccordion(-1);
    } else {
      props.setIdxOfOpenedAccordion(props.idx);
    }
  }

  return (
    <div className="accordion__section">
      <button className={`accordion ${setActive}`} onClick={toggleAccordion}>
        <p className="accordion__title">{props.title}</p>
        {isMobile ? null : (
          <Chevron className={`${setRotate}`} width={chevronSize} height={chevronSize} fill={'#026896'} />
        )}
      </button>
      <div ref={content} style={{ maxHeight: `${setHeight}` }} className="accordion__content">
        <div className="accordion__text">{props.content}</div>
      </div>
    </div>
  );
}

export default FAQAccordion;
