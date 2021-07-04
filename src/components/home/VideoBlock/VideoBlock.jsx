import React from 'react';
import './VideoBlock.css';

export default function VideoBlock() {
  return (
    <div className="VideoBlock" data-aos="fade-up">
      <h2 className="VideoBlock-header">Featured:</h2>
      <iframe
        className="VideoBlock-embed"
        data-aos="fade-up"
        title="iContribute launch video"
        src="https://drive.google.com/file/d/1tj2jsvMgDrHY7MHLsTzh0Qf7kaLlK-Rv/preview"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
        frameBorder="0"
        allowFullScreen
      />
    </div>
  );
}
