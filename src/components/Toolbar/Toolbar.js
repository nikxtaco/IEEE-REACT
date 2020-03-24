import React from  'react';
import './Toolbar.css'
import DrawerToggleButton from '../SideDrawer/DrawerToggleButton.js'


const toolbar= props =>(
    <header className="toolbar_a">
        <nav className="toolbar_navigation">
           
            <div className="toolbar_logo"><a href="/">LOGO</a></div>
            <div className="hi"/>
                <div className="toolbar_navigation_items">
                    <ul>
                        <li><a href="/">Home</a></li>
                        <li><a href="/">About</a></li>
                        <li><a href="/">Team</a></li>
                        <li><a href="/">Achievements</a></li>
                        <li><a href="/">Gallery</a></li>
                        <li><a href="/">Contact</a></li>
                    </ul>
                </div>
                <div className="drawer_toggle">
                <DrawerToggleButton click={props.drawerClickHandler}/>
            </div>
        </nav>
    </header>

);

export default toolbar;