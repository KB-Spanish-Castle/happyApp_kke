import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Songs from './Songs';

class App extends Component {

  constructor(props) {
    super(props);
    this.state = {
      songs: []
    };
  }

  componentDidMount() {
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
        <header className="App-header App">
          <img src="https://images.unsplash.com/photo-1499676763409-c0211693a66b?dpr=1&auto=compress,format&fit=crop&w=1300&h=&q=80&cs=tinysrgb&crop=" className="App-picture" alt="photo of phone music player" />
          <h1 className="App-title">MUSIC APP</h1>
        </header>
        <div>
          <div className="jumbotron App">
            <h1>Hello, world!</h1>
            <p><a className="btn btn-primary btn-lg" href="#" role="button">Learn more</a></p>
          </div>
          
        </div>
        <Songs songs={this.state.songs} />
      </div>
    );
  }
}

export default App;
