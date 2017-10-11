import React, { Component } from 'react';
import './App.css';
import Song from './Song';


class Songs extends Component {

  render() {
    let songList = [];
    this.props.songs.forEach((song) => {
      songList.push(
        <Song song={song}/>
      );
    });
    return (
      <ul className="SongList">
        {songList}
      </ul>
    );

  }
}
export default Songs;