import React from 'react';
import "./SideDrawer.css";

const sideDrawer= props=>(
    <nav className="side-drawer">
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