import React, {useState} from 'react';
import MovieList from './MovieList';
import SearchBar from './SearchBar';
import { getFaves, clearFaves } from '../utilities/faveStorage';
import { AnimatePresence, motion } from 'framer-motion';

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
                        <p>You have no favorites added.</p>
                        <SearchBar type="fave" />    
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
                        <SearchBar type="fave" />    
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