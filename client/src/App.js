import React, { Component } from 'react';
import NavBar from './NavBar';
import Homepage from './Homepage';
import {
  BrowserRouter as Router,
  Route
} from 'react-router-dom';
import Signup from './Signup';
import Login from './Login';
import Favorites from './Favorites';

export default class App extends React.Component {
  constructor() {
    super();
    this.state = {
      initialized: false,
      songs: [],
      user: { name: "", email: "" }
    };
    this.refreshSongs = this.refreshSongs.bind(this);
    this.setUser = this.setUser.bind(this);
    this.getUser = this.getUser.bind(this);
  }

  componentDidMount() {
    this.refreshSongs();
    this.setState({
      initialized: true
    });
  }

  setUser(user) {
    this.setState({
      user: user
    });
  }

  getUser() {
    return this.state.user;
  }

  refreshSongs() {
    fetch('/songs').then((res) => {
      console.log(res);
      return res.json();
    }).then((tracks) => {
      if (tracks) {
        this.setState({ songs: tracks });
      }
    });
  }

  render() {
    if (this.state.initialized) {
      return (
        <div>
          <Router>
            <div>
              <NavBar user={this.state.user} />
              <Route exact path='/' render={() => <Home songs={this.state.songs} refreshSongs={this.refreshSongs} />} />
              <Route path='/signup' component={Signup} />
              <Route path='/login' render={() => <Login setUser={this.setUser} />} />
              <Route path='/favorites' component={Favorites} />
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
        <Homepage songs={this.props.songs} refreshSongs={this.props.refreshSongs} />
      </div>
    );
  }
}