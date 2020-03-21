import React from 'react';
import Navbar from './Navbar.js'
import Carousel from './Carousel.js'
import Missionvision from './Missionvision.js'
import About from './About.js'
import "../css/landing.css"
function Landing() {
  return (
    <body>
    <div id="landing">
      
    <div className="navbar"><Navbar/></div>
    <div className="carousel"><Carousel/></div>
    <div className="mission"><Missionvision/></div>
    <div className="about"><About/></div>
    </div>
    </body>
  );
}

export default Landing;

