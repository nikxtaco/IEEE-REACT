import React from  'react';
import './Toolbar.css'
import DrawerToggleButton from '../SideDrawer/DrawerToggleButton.js'
import Link from "react-router-dom"

const toolbar= props =>(
    <header className="toolbar_a">
        <nav className="toolbar_navigation">
           
            <div className="toolbar_logo"><a href="/">LOGO</a></div>
            <div className="hi"/>
                <div className="toolbar_navigation_items">
                    <ul>
                        <li>Home</li>
                        <li>Execom</li>
                        <li>Events</li>
                        <li>Achievements</li>
                        <li>Gallery</li>
                    </ul>
                </div>
                <div className="drawer_toggle">
                <DrawerToggleButton click={props.drawerClickHandler}/>
            </div>
        </nav>
    </header>

);

export default toolbar;