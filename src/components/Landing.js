import React from 'react';
import Photos from './Gallery.js';
import Missionvision from './Missionvision.js'

import About from './About.js'
import 'materialize-css/dist/css/materialize.min.css';


import Title from './Title/Title.js';


const Landing = props =>{
  return (
    <body>
    <div className="landing">
      <div className="Title"><Title/></div>
      <div className="mission"><Missionvision/></div>
      <div className="about"><About/></div>
      <div className="gallery"><Photos/></div>
    </div>
    </body>
  );
}

export default Landing;