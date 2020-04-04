import React, { Component } from 'react';
import events from "../Events/events.json"
import MainPage from "../Events/Events.js"
import IndiEvents from "../IndiEvents/IndiEvents.js"

class EventHandler extends Component{
    state={
        ShowMainEvents: true,
        index: 0
      }
      
      eventToggleClickHandler = () =>{
        this.setState((prevState)=>{
          return {ShowMainEvents: !prevState.ShowMainEvents}; // for opening the sidebar
        });
      };
      closeToggleClickHandler= ()=>{
        this.setState({ShowMainEvents: false}); // for closing the sidebar
      }
      
      
      render(){
        let MianEvents; 
        let Indi; 
      if(this.state.ShowMainEvents){
        MianEvents=<MainPage eventClickHandler={this.eventToggleClickHandler}/>;
      }
      else{
        Indi=<IndiEvents/>
      }
      
      return (
        <div className="app">
  
         <Toolbar  drawerClickHandler={this.drawerToggleClickHandler}/>
         
         {adrawer}
        
        </div>
      );
      }
    }
    
    export default EventHandler;
}