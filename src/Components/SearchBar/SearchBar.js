import React, { useState } from 'react';
import { StyledSearchBar, SearchButton } from './SearchBar-style';

const SearchBar = ({ onSearch }) => {
    const [term, setTerm] = useState('')

    const search = () => {
        onSearch(term);
    }

    const handleTermChange = e => {
        setTerm(e.target.value);
    }

    return (
        <StyledSearchBar>
            <input placeholder="Enter A song, Album, or Artist" onChange={handleTermChange} />
            <SearchButton onClick={search}>SEARCH</SearchButton>
        </StyledSearchBar>
    );
}

export default SearchBar;