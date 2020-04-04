import React, { Component } from 'react';
import events from "../Events/events.json"

class EventHandler extends Component{
    state={
        ShowMainEvents: true
      }
      
      drawerToggleClickHandler = () =>{
        this.setState((prevState)=>{
          return {ShowMainEvents: !prevState.ShowMainEvents}; // for opening the sidebar
        });
      };
      closeToggleClickHandler= ()=>{
        this.setState({SideDrawerOpen: false}); // for closing the sidebar
      }
      
      
      render(){
        let adrawer;  
      if(this.state.SideDrawerOpen){
        adrawer=<SideDrawer closeClickHandler={this.closeToggleClickHandler}/>;
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