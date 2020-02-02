import React from "react";
import { BrowserRouter, Route, Link } from 'react-router-dom'

export default class Header extends React.Component {
  render() {
    return (
      <nav class="navbar sticky-top navbar-dark bg-dark" style={{marginBottom: "0px", background: "#030314"}}>
          <Link to='/'><span class="navbar-brand">Training&nbsp;Management&nbsp;System</span></Link>
          <form class="form-inline my-2 my-lg-0">
              <a href="./login.html" class="btn btn-success my-2 my-sm-0">Login</a>
          </form>
      </nav>
    );
  }
}