import React , { Component } from 'react';
import Toolbar from './components/Toolbar/Toolbar'
import Landing from './components/Landing.js'
import './App.css';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import SideDrawer from './components/SideDrawer/SideDrawer.js'
import backdrop from './components/Backdrop/Backdrop.js'

class App extends Component {
  render(){
  return (
    <div className="App" style={{height:'100%'}}>
      <Toolbar/>
      <backdrop/>
      <SideDrawer/>
     
      <Landing/>
    </div>
  );
  }
}

export default App;
