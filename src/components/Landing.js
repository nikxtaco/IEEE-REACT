import React from 'react';
//import Toolbar from './Toolbar/Toolbar'
import Carousel from './Carousel.js';
//import Navbar from './Navbar_matt';
///import TestNav from './TestNav';
import Photos from './Gallery.js';
import Footer from './Footer.js';
import "../css/landing.css";
import Missionvision from './Missionvision.js'
import About from './About.js'
import 'materialize-css/dist/css/materialize.min.css';
// import M from 'materialize-css/dist/js/materialize.min.js';



const Landing = props =>{
  return (
    <body>
    <div className="landing">
    <div className="carousel"><Carousel/></div>
    <div className="mission"><Missionvision/></div>
    <div className="about"><About/></div>
    <div className="gallery"><Photos/></div>
    <div className="footer"><Footer/></div>
    </div>
    </body>
  );
}

export default Landing;

