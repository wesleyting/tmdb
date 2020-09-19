import React, {useState} from 'react';
import MovieList from './MovieList';
import SearchBar from './SearchBar';
import { getFaves, clearFaves } from '../utilities/faveStorage';
import { Link } from 'react-router-dom';
import {  motion } from 'framer-motion';

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
                <motion.div className="content-wrapper"
                            exit={{ opacity: 0 }} 
                            animate={{ opacity:1 }} 
                            initial={{ opacity:0 }}>
                    <h1 className='fave-title'>Your Favourite Movies</h1>
                    <div className="fave-wrapper">
                        <p>You currently have no favorites added!</p>
                        <p>Go back to the <Link to={'/'}>home page</Link> to browse through movies, or search for a specific movie.</p>
                        <div className='search-btn-data'>
                            <SearchBar type="fave"/>
                        </div>    
                    </div>
                </motion.div>
                </main>
            );
        } else {
            return (
                <main>
                <motion.div className="content-wrapper"
                            exit={{ opacity: 0 }} 
                            animate={{ opacity:1 }} 
                            initial={{ opacity:0 }}>
                    <h1 className='fave-title'>Your Favourite Movies</h1>
                        <div className='search-btn-data'>
                            <SearchBar type="fave"/>
                        </div>    
                        <button id="cl-faves" onClick={handleClear}>Clear All</button>
                        <div className="movie-grid"><MovieList grid={grid}/></div>
                    </motion.div>
                </main>
            );
        }
    }
    
    return handleFaveList();
};

export default Favorites;