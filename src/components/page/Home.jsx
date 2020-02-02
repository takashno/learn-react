import React from "react";
import Header from '../common/organisms/Header'
import Footer from '../common/organisms/Footer'
import Sidebar from '../common/organisms/Sidebar'
import MainContent from '../common/organisms/MainContent'

export default class Home extends React.Component {
  render() {
    return (
      <div>
        <Header/>
        <div className="row">
          <div className="col-2">
            <Sidebar/>
          </div>
          <div className="col-10">
            <MainContent/>
            <Footer/>
          </div>
        </div>
      </div>
    );
  }
}