import React from 'react';
import { StyledPlaylist, PlaylistSaveBtn } from './Playlist-style';
import TrackList from '../TrackList/TrackList';

const Playlist = ({ onNameChange, playlistName, playlistTracks, onRemove, onSave }) => {
    const handleNameChange = e => {
        onNameChange(e.target.value);
    }

    return (
        <StyledPlaylist>
            <input 
                value={playlistName}
                onChange={handleNameChange}
            />
            <TrackList 
                tracks={playlistTracks}
                onRemove={onRemove}
                isRemoval={true}
            />
            <PlaylistSaveBtn onClick={onSave}>SAVE TO SPOTIFY</PlaylistSaveBtn>
        </StyledPlaylist>
    );
}

export default Playlist;