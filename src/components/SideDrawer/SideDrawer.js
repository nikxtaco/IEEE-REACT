import React from 'react';
import "./SideDrawer.css";
import 'materialize-css/dist/css/materialize.min.css';


const sideDrawer= props=>(

    <nav className="side-drawer">
        <div className="close_sd">
            <button class="closer" onClick={props.closeClickHandler}>
                <i className="material-icons">chevron_left</i>
            </button>
        </div>
        <ul>
            <li><a href="/">Home</a></li>
            <li><a href="/">About</a></li>
            <li><a href="/">Team</a></li>
            <li><a href="/">Achievements</a></li>
            <li><a href="/">Gallery</a></li>
            <li><a href="/">Contact</a></li>
        </ul>
    </nav>


)

export default sideDrawer