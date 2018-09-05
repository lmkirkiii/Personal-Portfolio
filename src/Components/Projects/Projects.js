import React, { Component } from "react";
import { Link } from "react-router-dom";
import "./Projects.css";

class Projects extends Component {
  render() {
    let vacationOption = this.props.projectsData.map(item => {
      return(
        
        <div id="block" className="col s12" key={item.title}>
        <h4 className="line">{item.title}</h4>
        <div className="imager">  
        <a href={item.link}><img class="better" src={item.image}></img></a>
        </div>
        <h5 class="tech">Technologies Used: {item.tech}</h5>
        </div>
      )
    })
    return (
      <div className="ready">
      <img class="project"  src={require('./project.png')} alt='resume'/>
      <div className="row">
        {vacationOption}
      </div>
      </div>
    );
  }
}

export default Projects;
