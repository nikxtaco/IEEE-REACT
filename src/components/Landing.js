import React from 'react';
import Carousel from './Carousel.js';
import Navigation_bar from './Navigation_bar.js';
import Photos from './Gallery.js';
import Footer from './Footer.js';
import "../css/landing.css";


function Landing() {
  return (
    <body>
    <div id="landing">
      
    <div className="navbar"><Navigation_bar/></div>
    <div className="carousel"><Carousel/></div>
    <div className="gallery"><Photos/></div>
    <div className="footer"><Footer/></div>

    </div>
    </body>
  );
}

export default Landing;
