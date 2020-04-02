import React from 'react';
import "./SideDrawer.css";
import 'materialize-css/dist/css/materialize.min.css';
import { Link } from "react-router-dom"

const sideDrawer= props=>(

    <nav className="side-drawer">
        <div className="close_sd">
            <button className="closer" onClick={props.closeClickHandler}>
                <i className="material-icons itag">chevron_right</i>
            </button>
        </div>
        <ul>
        <li><Link to="/" activeStyle={{color:"blue"}}>Home</Link></li>
                        <li><Link to="/execom" activeStyle={{color:"blue"}}>Execom</Link></li>
                        <li><Link to="/achievements" activeStyle={{color:"blue"}}>Achievements</Link></li>
                        <li><Link to="/gallery" activeStyle={{color:"blue"}}>Gallery</Link></li>
        </ul>
    </nav>


)

export default sideDrawer