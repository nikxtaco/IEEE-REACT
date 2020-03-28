import React from 'react';
import 'materialize-css/dist/css/materialize.min.css';
<<<<<<< HEAD
// import '../css/about.css'
// import M from 'materialize-css/dist/js/materialize.min.js';
=======
>>>>>>> 1c1fb91121dd27f9a0a49c87268d73088d158075
import mec from '../MEC.jpeg'
import sb from '../SB.jpg'
const About = () => {
  var stcard = {
    "border-radius" : "30px"
  }
    return(
   <div className="row">
<<<<<<< HEAD
        <div  className="col s12 m7">
         <div style={stcard} className="card light-blue darken-4">
           <div style={stcard} className="card-image">
             <img style={stcard} src={mec} />
=======
        <div className="col s6">
         <div className="card light-blue darken-4">
           <div className="card-image">
             <img src={mec} alt=""/>
>>>>>>> 1c1fb91121dd27f9a0a49c87268d73088d158075
             <span className="card-title">About MEC</span>
           </div>
           <div className="card-content white-text">
             <p>Govt Model Engineering College is a premier institute that has empowered its students to pave way for excellence and innovation in the field of engineering and technology. Affiliated to the Kerala Technological University, it was the first engineering college to be established by the Government of Kerala under the aegis of the Institute of Human Resources (IHRD). Ever since its inception, the college has maintained its eminence as a leading Engineering College in the state. The college ranks amongst the top-level colleges in the country in terms of the quality of the graduates and placement statistics. With such eminence in the academics and curricular activities, MEC is one of the most sought after engineering colleges in the state.</p>
           </div>
         </div>
       </div>
<<<<<<< HEAD
       <div className="col s12 m7">
         <div style={stcard} className="card light-blue darken-4">
           <div style={stcard} className="card-image">
             <img style={stcard} src={sb} />
             <span className="card-title">About IEEE MEC SB</span>
=======
       <div className="col s6">
         <div className="card light-blue darken-4">
           <div className="card-image">
             <img src={sb} alt=""/>
             <span className="card-title">About SB</span>
>>>>>>> 1c1fb91121dd27f9a0a49c87268d73088d158075
           </div>
           <div className="card-content white-text">
             <p>Blue skies and ignited minds, the student branch of IEEE at Govt. Model Engineering College, the IEEE SB MEC in professional parlance, is on a perfect take-off with a growing number of dedicated and vibrant volunteers. The SB has forged itself through thick and thin, successfully proving their mettle, over the years. Today, with a crew of 150 plus members, IEEE SB MEC stands out as one among the best of all student branches in the hub.</p>
           </div>
         </div>
       </div>
  </div>
    )
}
export default About;