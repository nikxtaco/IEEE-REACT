import React from 'react';
import img1 from "../assets/ieee-logo.png"
import img2 from "../assets/parallax.png"

function Intro() {
  return (
    <div id="intro">
    <div class="row" style={{"margin-top":"10em","margin-left":"10%","margin-right":"10%","margin-bottom":"10%"}}>
      <div className="col s12 m6">
        <img src={img1} alt="" style={{"width":"70%"}}/>
      </div>
      <div className="col s12 m6">
      <img src={img2} alt="" style={{"width":"100%"}}/>
      </div>
    </div>
    </div>
  );
}

export default Intro;
