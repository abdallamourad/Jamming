import React from 'react';
import './Playlist.css';
import TrackList from '../TrackList/TrackList';

const Playlist = ({ onNameChange, playlistName, playlistTracks, onRemove, onSave }) => {
    const handleNameChange = e => {
        onNameChange(e.target.value);
    }

    return (
        <div className="Playlist">
            <input 
                value={playlistName}
                onChange={handleNameChange}
            />
            <TrackList 
                tracks={playlistTracks}
                onRemove={onRemove}
                isRemoval={true}
            />
            <button className="Playlist-save" onClick={onSave}>SAVE TO SPOTIFY</button>
        </div>
    );
}

export default Playlist;