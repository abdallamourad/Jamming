import React from 'react';
import { StyledTrack, TrackAction, TrackInfromation } from './Track-style';

const Track = ({ isRemoval, onAdd, onRemove, track }) => {
    const renderAction = () => {
        if (isRemoval) {
            return <TrackAction onClick={removeTrack}>-</TrackAction>;
        } else {
            return <TrackAction onClick={addTrack}>+</TrackAction>;
        }
    }

    const addTrack = () => {
        onAdd(track);
    }

    const removeTrack = () => {
        onRemove(track);
    }

    return (
        <StyledTrack>
            <TrackInfromation>
                <h3>{track.name}</h3>
                <p>{track.artist} | {track.album}</p>
            </TrackInfromation>
            {renderAction()}
        </StyledTrack>
    );
}

export default Track;