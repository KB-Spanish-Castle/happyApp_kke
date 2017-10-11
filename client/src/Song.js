import React, { Component } from 'react';
import './App.css';

class Song extends Component {
  constructor(props) {
    super(props);
    this.playSong = this.playSong.bind(this);
  }
  playSong() {
    console.log("You clicked the button for: " + this.props.song.name + ":" + this.props.song.spotifyId);
    var that=this;
    fetch('/songs/' + this.props.song.spotifyId, { method: 'PUT' }).then((res) => {
      that.props.refreshSongs();
    });
  }

  render() {
    return (
      <li>
        <button onClick={this.playSong}>PLAY</button>
        {this.props.song.name}  <br /> Artist: {this.props.song.artist} Count: {this.props.song.count}
        <img src={this.props.song.image} />
      </li>
    );
  }
}

export default Song;