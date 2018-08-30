import React, { Component } from "react";
import { Route, Switch, Link } from "react-router-dom";
import "./About.css";

class Home extends Component {
  render() {
    return (
    <div class="container" id="box">
    <img id="me" src={require('./LAwrence.png')} alt='resume'/>
      <div className="Home-landing">
        <h4 id="aboutPage">Full-stack web developer who crosses the gap of arts, ethics, and activism to create a new world view through technology. Inspired to push my natural talents and hard-earned skills to create spaces on the web where people can find inspiration, community, and empathy.</h4>
      </div>
      </div>
    );
  }
}

export default Home;
