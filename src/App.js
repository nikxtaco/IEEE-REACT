import React , { Component } from 'react';
import Toolbar from './components/Toolbar/Toolbar'
import Landing from './components/Landing.js'
import './App.css';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import SideDrawer from './components/SideDrawer/SideDrawer.js'
//import backdrop from './components/Backdrop/Backdrop.js'


class App extends Component {
  state={
    SideDrawerOpen: false
  }
  
  drawerToggleClickHandler = () =>{
    this.setState((prevState)=>{
      return {SideDrawerOpen: !prevState.SideDrawerOpen};
    });
  };
  closeToggleClickHandler= ()=>{
    this.setState({SideDrawerOpen: false});
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
