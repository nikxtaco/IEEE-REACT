import React, { Component } from 'react';
import events from "../Events/events.json"
//import MainPage from "../Events/Events.js"
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
      
      eventToggleClickHandler = (obj) =>{
        this.setState({activeitem:obj})
        this.setState((prevState)=>{
          return {ShowMainEvents: !prevState.ShowMainEvents}; 
        });
      };
      closeToggleClickHandler= ()=>{
        this.setState({ShowMainEvents: false}); 
      }

      renderItems=()=>{
        return (
          <div>
            <div class="row">
      
              {
                events.map((item, i) => <div key={events.id}>
      
                  <ul>
                    {
                    <li>
          
          <div class="col s12 m4">
            <div class="card small">
              <div class="card-image">
                <img src={require("../main1.jpg")} />
                <span class="card-title">{item.title}</span>
              </div>
              <div class="card-content">
                <p>{item.date}</p>
              </div>
              <div class="card-action">
                <a onClick={this.eventToggleClickHandler(item)}>View Details</a>
              </div>
            </div>
          </div>
                  
                    </li>
                    }
                  </ul>
      
                </div>)
              }
            </div>
          </div>
       
        );

      }
      
      
      render(){
        let MianEvents; 
      if(this.state.ShowIndiEvents){
        MianEvents=<IndiEvents closeHandler={this.closeToggleClickHandler} activeitem={this.state.activeitem}/>
      }
      else{
        MianEvents=this.renderItems();
      }
      
      return (
        <div className="app">
  
         
         {MianEvents}
        
        </div>
      );
      }
    }
    
    export default EventHandler;
