import React , { Component } from 'react';
import Toolbar from './components/Toolbar/Toolbar'
import Landing from './components/Landing.js'
import './App.css';
import Execom from './components/Execom/Execom.js'
import Events from  './components/Events/Events.js'
import Contacts from  './components/Contacts/Contacts.js'
import Achievements from './components/Achievements/Achievements.js'
import SideDrawer from './components/SideDrawer/SideDrawer.js'
import {Router, Route, browserHistory} from 'react-router-dom'


class App extends Component {
  
  render(){
  
  return (
    <Router history={browserHistory}>
        <Route path={"/"} component={Landing}/>
        <Route path={"/events"} component={Events}/>
        

    </Router>
  );
  }
}

export default App;
