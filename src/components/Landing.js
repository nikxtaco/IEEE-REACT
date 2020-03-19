import React from 'react';
import Navbar from './Navbar.js'
import Carousel from './Carousel.js'
import Photos from './Gallery.js'
import Footer from './Footer.js'
import "../css/landing.css"

function Landing() {
  return (
    <body>
    <div id="landing">
      
    <div className="navbar"><Navbar/></div>
    <div className="carousel"><Carousel/></div>
    <div className="gallery"><Photos/></div>
    <div className="footer"><Footer/></div>

    </div>
    </body>
  );
}

export default Landing;
