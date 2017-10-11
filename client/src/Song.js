import React, { Component } from 'react';
import './App.css';

class Song extends Component {
  constructor(props){
    super(props);
    this.playSong = this.playSong.bind(this);
  }
  playSong() {
    console.log("You clicked the button for: " + this.props.song.name);
  }

  render() {
    return (
      <li>
        <button onClick={this.playSong}>PLAY</button>
        {this.props.song.name}  <br /> Artist: {this.props.song.artists[0].name}
        <img src={this.props.song.album.images[2].url} />
      </li>
    );
  }
}

export default Song;