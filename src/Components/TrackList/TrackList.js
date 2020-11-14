import React from 'react';
import { StyledTrackList } from './TrackList-style'
import Track from '../Track/Track';

const TrackList = ({ tracks, onAdd, onRemove, isRemoval }) => {
    return (
        <StyledTrackList>
            {
                tracks.map(track => 
                    <Track 
                        track={track} 
                        key={track.id} 
                        onAdd={onAdd}
                        onRemove={onRemove}
                        isRemoval={isRemoval} 
                    />
                )
            }
        </StyledTrackList>
    );
}

export default TrackList;