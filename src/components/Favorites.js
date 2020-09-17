import React, {useState} from 'react';
import MovieList from './MovieList';
import SearchBar from './SearchBar';
import { getFaves, clearFaves } from '../utilities/faveStorage';

const Favorites = () => {
    let [grid, setGrid] = useState(getFaves('faves'));

    const handleClear = () => {
        clearFaves();
        setGrid(getFaves('faves'));
    }

    const handleFaveList = () => {
        if (grid === null || (Array.isArray(grid) && grid.length === 0)) {
            return(
                <main>
                    <div className="content-wrapper">
                        <p>You have no favorites added.</p>
                        <SearchBar type="fave" />    
                    </div>
                </main>
            );
        } else {
            return (
                <main>
                    <div className="content-wrapper">
                        <SearchBar type="fave" />    
                        <button id="cl-faves" onClick={handleClear}>Clear All</button>
                        <div className="movie-grid"><MovieList grid={grid}/></div>
                    </div>
                </main>
            );
        }
    }
    
    return handleFaveList();
};

export default Favorites;