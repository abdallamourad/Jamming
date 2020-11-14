import React, { useState } from 'react';
import './App.css';
import SearchBar from '../SearchBar/SearchBar';
import SearchResults from '../SearchResults/SearchResults';
import Playlist from '../Playlist/Playlist';

import Spotify from '../../util/Spotify';

const App = () => {
  const [searchResults, setSearchResults] = useState([])
  const [playlistTracks, setPlaylistTracks] = useState([])
  const [playlistName, setPlaylistName] = useState('New Playlist')
    
  const addTrack = track => {
    let tracks = playlistTracks;
    if (tracks.find(savedTrack => savedTrack.id === track.id)) {
      return;
    }
    setPlaylistTracks([...tracks, track]);
  }

  const removeTrack = track => {
    let tracks = playlistTracks.filter(currTrack => currTrack.id !== track.id);

    setPlaylistTracks(tracks);
  }

  const updatePlaylistName = name => {
    setPlaylistName(name);
  }

  const savePlaylist = () => {
    const trackURIS = playlistTracks.map(track => track.uri);
    Spotify.savePlaylist(playlistName, trackURIS).then(() => {
      updatePlaylistName('New Playlist');
      setPlaylistTracks([]);
    });
  }

  const search = term => {
    Spotify.search(term).then(searchResults => {
      setSearchResults(searchResults);
    });
  }

  return (
    <div>
      <h1>Ja<span className="highlight">mmm</span>ing</h1>
      <div className="App">
        <SearchBar onSearch={search} />
        <div className="App-playlist">
          <SearchResults 
            searchResults={searchResults}
            onAdd={addTrack} 
          />
          <Playlist 
            playlistName={playlistName}
            playlistTracks={playlistTracks}
            onRemove={removeTrack}
            onNameChange={updatePlaylistName}
            onSave={savePlaylist} 
          />
        </div>
      </div>
    </div>
  )
}

export default App;