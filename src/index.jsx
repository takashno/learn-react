import React from 'react'
import { render } from 'react-dom'
import { BrowserRouter, Route, Link } from 'react-router-dom'
import Home from './components/page/Home'
import Search from './components/page/Search'


const reportRouter = ({ match }) => {
  return (
    <div>
      <Route path={`${match.path}/s`} component={Search} />
    </div>
  );
};

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
        <BrowserRouter>
          <Route exact path='/' component={Home} />
          <Route path='/report_search' component={Search} />
        </BrowserRouter>
      </div>
    )
  }
}
render(<App/>, document.getElementById('app'))
