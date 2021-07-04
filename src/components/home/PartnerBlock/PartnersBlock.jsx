import React, { useState, useEffect } from 'react';
import { fetchBackers, fetchPartners } from '../../../queries/Partners';
import './PartnersBlock.css';

const PartnersBlock = () => {
  const [ backers, setBackers ] = useState([]);
  const [ partners, setPartners ] = useState([]);

  useEffect(() => {
    fetchBackers(setBackers);
    fetchPartners(setPartners);
  }, []);

  return (
    <div className="partners-container">
      <h2 className="partners-header">Partners</h2>
      <p className="partners-desc">Find what you are passionate about.</p>
      <div data-aos="fade-up" className="partners">
        <div className="long-logos">
          {partners.map((partner, i) => {
            if (partner.isLongBanner) return <img alt={partner.name} src={partner.logo.url} key={i} />;
            return null;
          })}
        </div>

        <div data-aos="fade-up" className="small-logos">
          {partners.map((partner, i) => {
            if (!partner.isLongBanner) {
              return (
                <div className="small-logo" key={i}>
                  <img alt={partner.name} src={partner.logo.url} />
                </div>
              );
            }
            return null;
          })}
        </div>
      </div>
      <h2 className="fade-up partners-header backed-by-header">Backed By</h2>
      <div data-aos="fade-up" className="backers">
        {backers.map((backer, i) => <img className="backer" alt={backer.name} src={backer.logo.url} key={i} />)}
      </div>
      {/* <a className="hollow-yellow">LEARN MORE</a> */}
    </div>
  );
};

export default PartnersBlock;
