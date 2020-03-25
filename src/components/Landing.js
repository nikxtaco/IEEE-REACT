import React from 'react';
import Navbar from './Navbar.js'
import Parallax from './Parallax.js'
import Missionvision from './Missionvision.js'
import About from './About.js'
import "../css/landing.css"
function Landing() {
  return (
    <body>
    <div id="landing">
      
    <div className="navbar"><Navbar/></div>
    <div className="parallax"><Parallax/></div>
    <div className="mission"><Missionvision/></div>
    <div className="about"><About/></div>
    </div>
    </body>
  );
}

export default Landing;