import React, {Component} from 'react';
import {BrowserRouter as Router } from 'react-router-dom';
import './App.css';
import {Login} from './components/Login';
import Drawer from './components/Drawer';

class App extends Component {
  constructor(props) {
    super(props);
    localStorage.setItem('Email',"jonatan@mail.com");
    localStorage.setItem('Password',"1234");
  }

  render(){
    return(
      <Router>
          <div className="App">
              {localStorage.getItem('isLoggedIn')==="true"
                  ? <Drawer />
                  :<Login/>
              }
          </div>
      </Router>
    );
  }

}

export default App;
