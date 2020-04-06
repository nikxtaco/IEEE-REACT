import React, { Component } from 'react';
import events from "../Events/events.json"
import MainPage from "../Events/Events.js"
import IndiEvents from "../IndiEvents/IndiEvents.js"

class EventHandler extends Component{
    state={
        ShowIndiEvents: false,
        activeitem:{
          index:0,
          type:"cs",
          title:"name of event",
          date:"20 november 2019",
          location:"knowhere",
          img_src:"somesource",
          description:"ths is fnkn f ljisnlfblihbncilbncs" 
        }
        
      }
      
      eventToggleClickHandler = obj =>{
        this.setState({activeitem:obj})
        this.setState((prevState)=>{
          return {ShowMainEvents: !prevState.ShowMainEvents}; 
        });
      };
      closeToggleClickHandler= ()=>{
        this.setState({ShowMainEvents: false}); 
      }
      
      
      render(){
        let MianEvents; 
      if(this.state.ShowIndiEvents){
        MianEvents=<IndiEvents closeHandler={this.closeToggleClickHandler} ind={this.state.index}/>
      }
      else{
        MianEvents=<MainPage eventClickHandler={this.eventToggleClickHandler}/>;
      }
      
      return (
        <div className="app">
  
         
         {MianEvents}
        
        </div>
      );
      }
    }
    
    export default EventHandler;
