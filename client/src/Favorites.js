import React, { Component } from 'react';
import './App.css';
import Songs from './Songs';

export default class Favorites extends Component {
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
        
        <div>
          <div className="jumbotron App">
            <h1>Your favorite songs!</h1>
          </div>

        </div>
        <Songs songs={this.state.songs} refreshSongs={this.refreshSongs} />
      </div>
    );
  }
}
