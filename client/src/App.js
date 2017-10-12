import React, { Component } from 'react';
import NavBar from './NavBar';
import Homepage from './Homepage';
import {
  BrowserRouter as Router,
  Route
} from 'react-router-dom';
import Signup from './Signup';
import Login from './Login';

export default class App extends React.Component {
  constructor() {
    super();
    this.state = {
      initialized: false
    };
  }

  componentDidMount() {
    this.setState({
      initialized: true
    });
  }

  render() {
    if (this.state.initialized) {
      return (
        <div>
          <Router>
            <div>
              <NavBar weatherData={this.state.weatherData} />
              <Route exact path='/' component={Home} />
              <Route path='/signup' component={Signup} />
              <Route path='/login' component={Login} />
            </div>
          </Router>
        </div>
      );
    } else {
      return (
        <h2>
          Loading...
        </h2>
      );
    }
  }
}
class Home extends Component {
  render() {
    return (
      <div>
        <Homepage />
      </div>
    );
  }
}