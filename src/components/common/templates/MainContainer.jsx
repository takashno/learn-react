import React from "react";
import Sidebar from "../organisms/Sidebar"
import MainContent from "../organisms/MainContent"

export default class MainContainer extends React.Component {
  render() {
    return (
      <div class="main-container">
        <div className="row">
        <Sidebar/>
        <MainContent/>
        </div>
      </div>
    );
  }
}