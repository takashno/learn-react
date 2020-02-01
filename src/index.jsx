import React from 'react'
import { render } from 'react-dom'
import Header from './components/common/organisms/Header'
import Footer from './components/common/organisms/Footer'
import Sidebar from './components/common/organisms/Sidebar'
import MainContent from './components/common/organisms/MainContent'

class App extends React.Component {

  constructor(props) { 
    super(props)
    this.state = { message: 'something' }
  }

  onChange(e) {
     this.setState( { message: e.target.value } )
  }

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
    )
  }
}

render(<App/>, document.getElementById('app'))