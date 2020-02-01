import React from 'react'
import { render } from 'react-dom'
import Header from './components/common/Header'
import MainContainer from './components/common/MainContainer'
import Footer from './components/common/Footer'

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
        <MainContainer/>
        <Footer/>
      </div>
    )
  }
}

render(<App/>, document.getElementById('app'))