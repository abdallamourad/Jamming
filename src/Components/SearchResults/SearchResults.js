import React from 'react';
import { StyledSearchResults } from './SearchResults-style';
import TrackList from '../TrackList/TrackList';

const SearchResults = ({ searchResults, onAdd }) => {
    return (
        <StyledSearchResults>
            <h2>Results</h2>
            <TrackList 
                tracks={searchResults}
                onAdd={onAdd}
                isRemoval={false}
            />
        </StyledSearchResults>
    );
}

export default SearchResults;