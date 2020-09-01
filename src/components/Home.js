import React, { useEffect, useState } from 'react';
import { BASE_URL, API_KEY, URL_FILTER } from '../globals/variables.js'
import MovieList from './MovieList';

const Home = () => {

    const [grid, setGrid] = useState(null);

    
    useEffect(() => {
        const fetchMovie = async () => {
            const res = await fetch(BASE_URL + URL_FILTER.now + API_KEY);
            const data = await res.json();
            setGrid(data.results);
        }
        fetchMovie();
    }, []); //changes to vars/obj within [] determines rate of change/update
    
    

    return (
        <main>
            <MovieList grid={grid}/>
        </main>
    );
}

export default Home;


