import React from "react";
import Sidebar from "./Sidebar"
import MainContent from "./MainContent"

export default class MainContainer extends React.Component {
  render() {
    return (
      <div class="main-container">
        <Sidebar/>
        <MainContent/>
      </div>
    );
  }
}