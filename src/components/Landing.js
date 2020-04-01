import React from 'react';
//import Toolbar from './Toolbar/Toolbar'

//import Navbar from './Navbar_matt';
///import TestNav from './TestNav';
import Photos from './Gallery.js';
import Footer from './Footer.js';
  import Missionvision from './Missionvision.js'
import About from './About.js'
import 'materialize-css/dist/css/materialize.min.css';

import Title from './Title/Title.js';

//import Events from './Events/Events.js'


const Landing = props =>{
  return (
    <body>
    <div className="landing">
      <div className="Title"><Title/></div>
      <div className="mission"><Missionvision/></div>
      <div className="about"><About/></div>
      <div className="gallery"><Photos/></div>
      <div className="footer"><Footer/></div>
    </div>
    </body>
  );
}

export default Landing;