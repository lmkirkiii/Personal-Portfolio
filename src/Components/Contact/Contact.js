import React, { Component } from "react";
import { Route, Switch, Link } from "react-router-dom";
import "./Contact.css";

class Contact extends Component {
  render() {
    return (
    <div class="container">
    <img class="cell" src={require('./cell.png')} alt='resume'/>
      <div className="Home-landing">
       <h4> Contact Me Here  </h4>
       <form action="https://formspree.io/lmkirkiii@gmail.com" method="POST">
            <input type="text" name="name" placeholder="Name" ></input>
            <input type="text" name="subject" placeholder="Subject"></input>
            <input type="email" name="_replyto" placeholder="Email" ></input>
            <h4><input id="no" type="submit" value="Send"></input></h4>
        </form>
      </div>
      </div>
    );
  }
}

export default Contact;
