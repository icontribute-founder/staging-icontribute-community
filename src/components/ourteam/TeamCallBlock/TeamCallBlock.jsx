import React from 'react';
import grid1 from '../../../images/photoGrid/grid1.png';
import grid2 from '../../../images/photoGrid/grid2.png';
import grid3 from '../../../images/photoGrid/grid3.png';
import grid4 from '../../../images/photoGrid/grid4.png';
import grid5 from '../../../images/photoGrid/grid5.png';
import grid6 from '../../../images/photoGrid/grid6.png';
import './TeamCallBlock.css';

const TeamCallBlock = () => {
  return (
    <div className="teamblockcall-container">
      <div data-aos="fade-up">
        <h1>We love what we do, but we’re pretty big on that whole work-life balance too.</h1>
        <p>Although we are miles apart, we found ways to connect.</p>
      </div>
      <div data-aos="fade-up" className="zoomcall-grid1">
        <img id="photoGrid1" src={grid1} alt="zoom group chat" />
        <img id="photoGrid2" src={grid2} alt="zoom group chat" />
        <img id="photoGrid3" src={grid3} alt="zoom group chat" />
      </div>
      <div data-aos="fade-up" className="zoomcall-grid2">
        <img id="photoGrid4" src={grid4} alt="zoom group chat" />
        <img id="photoGrid5" src={grid5} alt="zoom group chat" />
        <img id="photoGrid6" src={grid6} alt="zoom group chat" />
      </div>
    </div>
  );
};

export default TeamCallBlock;
