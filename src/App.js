import React, { Component } from 'react';
import {Link} from "react-router-dom";
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
      <div class="inline">
        <h3> <span id="hello"> Hello </span><span id="I"> I </span><span id="Am"> am </span><span id="name"> Lawrence </span><span id="the">the</span><span id="dev"> Developer </span></h3>
      </div>
      <div class="list">
      <ul>
        <li><h4>About</h4></li>
        <li><h4>Contact</h4></li>
        <li><h4>Resume</h4></li>
        <li><h4>Shift</h4></li>
        </ul>
        </div>
      </div>
    );
  }
}

export default App;
