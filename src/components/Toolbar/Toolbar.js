import React from  'react';
import './Toolbar.css';
import 'materialize-css/dist/css/materialize.min.css';
import DrawerToggleButton from '../SideDrawer/DrawerToggleButton.js'
import { Link } from "react-router-dom"

const toolbar= props =>(
    <header className="toolbar_a">
        <nav className="toolbar_navigation">
           
            <div className="toolbar_logo"><a href="/"><img style={{"width": "200px"}} className="responsive-img" src={require("../../assets/SB_logo.png")} /></a></div>
            <div className="hi"/>
                <div className="toolbar_navigation_items">
                    <ul>
                        <li><Link to="/" activeStyle={{color:"blue"}}>Home</Link></li>
                        <li><Link to="/execom" activeStyle={{color:"blue"}}>Execom</Link></li>
                        <li><Link to="/achievements" activeStyle={{color:"blue"}}>Achievements</Link></li>
                        <li><Link to="/gallery" activeStyle={{color:"blue"}}>Gallery</Link></li>
                        <li><Link to="/events" activeStyle={{color:"blue"}}>Events</Link></li>
                    </ul>
                </div>
                <div className="drawer_toggle">
                <DrawerToggleButton click={props.drawerClickHandler}/>
            </div>
        </nav>
    </header>

);

export default toolbar;