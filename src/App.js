import React , { Component } from 'react';
import Toolbar from './components/Toolbar/Toolbar'
import Landing from './components/Landing.js'
import './App.css';
import Execom from './components/Execom/Execom.js'
import Events from  './components/Events/Events.js'
import Contacts from  './components/Contacts/Contacts.js'
import Achievements from './components/Achievements/Achievements.js'
import SideDrawer from './components/SideDrawer/SideDrawer.js'
import {Router, Route}


class App extends Component {
  state={
    SideDrawerOpen: false
  }
  
  drawerToggleClickHandler = () =>{
    this.setState((prevState)=>{
      return {SideDrawerOpen: !prevState.SideDrawerOpen}; // for opening the sidebar
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
    <div className="App" id="first">
     <Toolbar  drawerClickHandler={this.drawerToggleClickHandler}/>
     
     {adrawer}
     
      <Landing />
      
    </div>
  );
  }
}

export default App;
