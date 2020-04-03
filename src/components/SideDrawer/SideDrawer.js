import React from 'react';
import "./SideDrawer.css";
import 'materialize-css/dist/css/materialize.min.css';
import { Link } from "react-router-dom"

const sideDrawer= props=>(

    <nav className="side-drawer light-blue darken-4 white-text">
        <div className="close_sd">
            <button className="waves-effect waves-white btn-flat" onClick={props.closeClickHandler}>
                <i className="material-icons itag white-text">chevron_right</i>
            </button>
        </div>
        <ul>
            <li><Link to="/" activeStyle={{color:"blue"}}>Home</Link></li>
            <li><Link to="/execom" activeStyle={{color:"blue"}}>Execom</Link></li>
            <li><Link to="/achievements" activeStyle={{color:"blue"}}>Achievements</Link></li>
            <li><Link to="/gallery" activeStyle={{color:"blue"}}>Gallery</Link></li>
            <li><Link to="/events" activeStyle={{color:"blue"}}>Events</Link></li>
        </ul>
    </nav>


)

export default sideDrawer