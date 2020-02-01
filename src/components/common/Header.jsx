import React from "react";

export default class Header extends React.Component {
  render() {
    return (
      <nav class="navbar sticky-top navbar-dark bg-dark" style={{marginBottom: "0px", background: "#030314"}}>
          <a class="navbar-brand" href="#">Training&nbsp;Management&nbsp;System</a>
          <form class="form-inline my-2 my-lg-0">
              <a href="./login.html" class="btn btn-success my-2 my-sm-0">Login</a>
          </form>
      </nav>
    );
  }
}