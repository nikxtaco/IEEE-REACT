import React , { Component } from 'react';
import Toolbar from './Toolbar/Toolbar'
import Landing from './Landing.js'
import './App.css';
import Execom from './Execom/Execom.js'
import Events from  './Events/Events.js'
import Contacts from  './Contacts/Contacts.js'
import Achievements from './Achievements/Achievements.js'
import SideDrawer from './SideDrawer/SideDrawer.js'
import {Router, Route} from 'react-router-dom'


class Main extends Component {
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
  
  export default Main;
  