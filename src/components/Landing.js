import React from 'react';
//import Toolbar from './Toolbar/Toolbar'
import Carousel from './Carousel.js';
//import Navbar from './Navbar_matt';
///import TestNav from './TestNav';
import Photos from './Gallery.js';
import Footer from './Footer.js';
import "../css/landing.css";
import 'materialize-css/dist/css/materialize.min.css';
import M from 'materialize-css/dist/js/materialize.min.js';


function Landing() {
  return (
    <body>
    <div id="landing">
    <div className="carousel"><Carousel/></div>
    <div className="gallery"><Photos/></div>
    <div className="footer"><Footer/></div>

    </div>
    </body>
  );
}

export default Landing;
