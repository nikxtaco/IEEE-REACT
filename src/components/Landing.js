import React from 'react';
import Photos from './Gallery.js';
import Missionvision from './Missionvision.js'
import Hero from './Hero/Hero.js'
import About from './About.js'
import 'materialize-css/dist/css/materialize.min.css';

const Landing = props =>{
  return (
    <body>
    <div className="landing">
      <div className="Hero"><Hero/></div>
      <div className="mission"><Missionvision/></div>
      <div className="about"><About/></div>
      <div className="gallery"><Photos/></div>
    </div>
    </body>
  );
}

export default Landing;
