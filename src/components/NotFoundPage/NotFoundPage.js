import React from 'react';
import { useEffect } from 'react';
import { Link } from 'react-router-dom';
import M from 'materialize-css/dist/js/materialize.min.js';
import 'materialize-css/dist/css/materialize.min.css';
const NotFoundPage= () => {
      useEffect(() => {
      let parallel = document.querySelector('.parallax');
      M.Parallax.init(parallel, {});
  
    }, [])
    return (
      <div class="parallax-container">
        <div class="parallax"><img style={{"height": "100%", "width": "100%"}} className="responsive-img" src={"https://cdn.dribbble.com/users/2446071/screenshots/6903453/404.gif"} /></div>
      </div>
    );
}
export default NotFoundPage;