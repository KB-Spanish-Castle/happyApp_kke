import React, { Component } from 'react';
import './App.css';
import { Button } from 'reactstrap';

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
        <Button color="danger" primary onClick={this.playSong}>PLAY</Button>
        <span className="moby">{this.props.song.name}</span> <br /> 
        Artist: <span className="moby2">{this.props.song.artist}</span>
        Count: {this.props.song.count}
        <img src={this.props.song.image} />
      </li>
    );
  }
}

export default Song;