import React from 'react'
import './drawerToggleButton.css'
import 'materialize-css/dist/css/materialize.min.css';



//import M from 'materialize-css/dist/js/materialize.min.js';

const drawerToggleButton= props =>(
    <button className="toggle_button" onClick={props.click}>
    <i className="material-icons">menu</i>
    </button>
)

export default drawerToggleButton;