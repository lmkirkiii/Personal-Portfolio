import React, { Component } from 'react';
import {Link,Route,Switch} from "react-router-dom";
import './App.css';
import About from './Components/About/About.js'
import Contact from './Components/Contact/Contact.js'
import Resume from './Components/Resume/Resume.js'
import Projects from './Components/Projects/Projects.js'
class App extends Component {
  constructor(){
    super();
    this.state = {
      projectsData : [
        {
          title: "Love Away Vacations",
          image: "https://i.imgur.com/SdFspKs.png",
          link: "http://helium-vacations.surge.sh",
          tech: "React.js, Javascript ES6, Express.js, Node.js, HTML5, Css, Materialize"
        },
        {
          title: "Yelreblu Art Works",
          image: "",
          link: "https://lawrence-kirk.squarespace.com/",
          tech: "React.js, Javascript ES6, Express.js, Node.js, HTML5, Css, Materialize"
        },
        {
          title: "Fluxus",
          image:  "https://i.imgur.com/fkHZ7vq.png",
          link: "https://hopeful-flux.herokuapp.com/",
          tech: "Handelbars, Javascript ES6, Express.js, Node.js, HTML5, Css, Materialize"
        },
        {
          title: "Book of Faces",
          image: "https://i.imgur.com/0SpwCaN.png",
          link: "https://lmkirkiii.github.io/Art-Profile/",
          tech: "Javascript ES6, jQuery, HTML5, Css, Bootstrap"
        },
        {
          title: "Snapple Flash",
          image: "https://i.imgur.com/bcvyYq8.png",
          link: "https://lmkirkiii.github.io/-GAME-WDI-DC-2018/",
          tech: "Javascript ES6, HTML5, Css"
        },
        {
          title: "Horror Quiz",
          image: "https://i.imgur.com/h2m7wxJ.png",
          link: "https://lmkirkiii.github.io/Horror-Final/",
          tech: "Javascript ES6, jQuery, HTML5, Css, Bootstrap"
        },
      ]
    }
  }
  render() {
    return (
      <div className="App">
      <div class="intro">
      <div class="inline">
       <Link to="/"><h3> <span id="hello"> Hello </span><span id="I"> I </span><span id="Am"> am </span><span id="name"> Lawrence </span><span id="the">the</span><span id="dev"> Developer </span></h3></Link>
      </div>
      <div class="list">
      <ul>
        <li><h4><Link  id="about" to="/about">About</Link></h4></li>
        <li><h4><Link   id="contact" to="/contact">Contact</Link></h4></li>
        <li><h4><Link   id="resume" to="/resume">Resume</Link></h4></li>
        <li><h4><Link   id="shift" to="/projects">Projects</Link></h4></li>
        
        </ul>
      </div>
      <main>
        <Switch>
        <Route path="/about" component={About} />
        <Route path="/contact" component={Contact} />
        <Route path="/resume" component={Resume} />
        <Route
              exact
              path='/projects'
              render={routerProps => (
                <Projects {...routerProps} {...this.state} />
              )}
            />
        </Switch>
      </main>
      </div>
      </div>
    );
  }
}

export default App;
