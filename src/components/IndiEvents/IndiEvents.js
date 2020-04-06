import React, { Component } from 'react';
import events from '../Events/events.json'



function IndiEvents(props){
   return(
       <div className="outer">
           <div style={{ "text-align": "center", "padding-bottom": "100px", "padding-right": "50px", "padding-left": "50px"}} className="heading">
               <h1>{props.activeitem.title}</h1>
           </div>

       </div>
   )


    }
export default IndiEvents


/*

pic
date
name
location
description

*/