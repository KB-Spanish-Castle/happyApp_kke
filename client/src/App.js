import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Songs from './Songs';
import NavBar from './NavBar';

class App extends Component {

  constructor(props) {
    super(props);
    this.state = {
      songs: []
    };
    this.refreshSongs = this.refreshSongs.bind(this);
  }

  componentDidMount() {
    this.refreshSongs();
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
    return (

      <div>
        <NavBar />
        <header className="App-header">
          <h1>MUSIC APP</h1>
        </header>

        <div >
          <img style={{height: 250, width: 900}}  src="https://images.unsplash.com/photo-1420161900862-9a86fa1f5c79?dpr=1&auto=compress,format&fit=crop&w=750&h=&q=80&cs=tinysrgb&crop=" />
        </div>

        <div className="listStyle">
          {/* <img src="https://images.unsplash.com/photo-1471275287446-f463543ee84f?dpr=1&auto=compress,format&fit=crop&w=1050&h=&q=80&cs=tinysrgb&crop=" /> */}
          <Songs songs={this.state.songs} refreshSongs={this.refreshSongs} />
        </div>

      </div>
    );
  }
}

export default App;
