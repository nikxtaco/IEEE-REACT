import React , { Component } from 'react';
import Toolbar from './components/Toolbar/Toolbar'
// import Landing from './components/Landing.js';
import Execom from './components/Execom/Execom.js';
import './App.css';
import SideDrawer from './components/SideDrawer/SideDrawer.js'
//import backdrop from './components/Backdrop/Backdrop.js'


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

      <div>
        <div className="Execom"> 
          <Execom />
          {/* <Landing /> */}
        </div>  
      </div> 
    </div>
  );
  }
}

export default App;
