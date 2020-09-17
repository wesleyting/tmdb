import React, { useEffect, useState } from 'react';
import { BASE_URL, API_KEY, URL_FILTER, DEFAULT_FILTER } from '../globals/variables.js'
import MovieList from './MovieList';
import SelectFilter from './SelectFilter';
//import headerImage from '../images/demo2.jpg';

const Home = () => {

    const [grid, setGrid] = useState(null);
    const [filter, setFilter] = useState(DEFAULT_FILTER);

    const handleFilter = (e) => {
        setFilter(e);
    }
    
    useEffect(() => {
        const fetchMovie = async () => {
            const res = await fetch(BASE_URL + URL_FILTER[filter] + API_KEY);
            const data = await res.json();
            setGrid(data.results);
        }
        fetchMovie();
    }, [filter]); //changes to vars/obj within [] determines rate of change/update
    
    return (
        <main>
            <div className="header-img">

                <div className="header-text">
                    <h1>Welcome to Reel Talk! </h1>
                    <p>Learn more about the latest releases, search by category, and keep track of your favourites.</p>
                </div>
            </div>
            <div className="content-wrapper">
                <SelectFilter handleChange={handleFilter} filterChoices={URL_FILTER} defaultFilter={DEFAULT_FILTER} />
                <div className="movie-grid"><MovieList grid={grid}/></div>
            </div>
        </main>
    );
}

export default Home;


