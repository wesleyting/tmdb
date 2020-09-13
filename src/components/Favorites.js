import React from 'react';
import MovieList from './MovieList';
import { getFaves } from '../utilities/faveStorage';

const Favorites = () => {
    let grid = getFaves('faves');
    return (
        <main>
        <div className="content-wrapper">
            <div className="movie-grid"><MovieList grid={grid}/></div>
        </div>
        </main>
    )
};

export default Favorites;