import React, { Component } from 'react';
import './App.css';

class Songs extends Component {
  render() {
    let songList = [];
    this.props.songs.forEach((song) => {
      songList.push(
        <li>
          {song.name}
        </li>
      );
    });
    return (
      <ul>
        {songList}
      </ul>
    );

  }
}
export default Songs;