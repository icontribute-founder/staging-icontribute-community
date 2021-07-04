import React from 'react';
import stripe1 from '../../images/icons/Stripe 1.svg';
import stripe2 from '../../images/icons/Stripe 2.svg';
import stripe3 from '../../images/icons/Stripe 3.svg';
import './StripedTip.css';

const StripedTip = ({ order, text }) => {
  let stripe;
  let normalizedOrder = order % 3;
  switch (normalizedOrder) {
    case 0:
      stripe = stripe1;
      break;
    case 1:
      stripe = stripe2;
      break;
    default:
      stripe = stripe3;
      break;
  }

  return (
    <div className="StripedTip">
      <img src={stripe} alt="stripe" className="StripedTip-Image" />
      <p className="StripedTip-Text">{text}</p>
    </div>
  );
};

export default StripedTip;
