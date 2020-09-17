import React, { useEffect, useState } from 'react';
import { BASE_URL, API_KEY, URL_FILTER, DEFAULT_FILTER, BASE_PAGE, DEFAULT_PAGE } from '../globals/variables.js'
import MovieList from './MovieList';
import SelectFilter from './SelectFilter';
//import headerImage from '../images/demo2.jpg';
import SearchBar from './SearchBar';
import Pagination from './Pagination';

const Home = () => {

    const [grid, setGrid] = useState(null);
    const [filter, setFilter] = useState(DEFAULT_FILTER);
    const [pagi, setPagi] = useState(null);
    const [page, setPage] = useState(DEFAULT_PAGE);


    const handleFilter = (e) => {
        setFilter(e);
    }

    const handlePagi = (p) => {
        setPage(p);
        console.log('p',p);
    }
    
    useEffect(() => {
        const fetchMovie = async () => {
            const res = await fetch(BASE_URL + URL_FILTER[filter] + API_KEY + BASE_PAGE + page);
            console.log("call", BASE_URL + URL_FILTER[filter] + API_KEY + BASE_PAGE + page);
            const data = await res.json();
            setGrid(data.results);
            setPagi(data);
        }
        fetchMovie();
    }, [filter, page]);
    
    return (
        <main>
            <div className="header-img">

                <div className="header-text">
                    <h1>Welcome to Reel Talk! </h1>
                    <p>Learn more about the latest releases, search by category, and keep track of your favourites.</p>
                </div>
            </div>
            <div className="content-wrapper">
                <SearchBar />
                <SelectFilter handleChange={handleFilter} filterChoices={URL_FILTER} defaultFilter={DEFAULT_FILTER} />
                <div className="movie-grid"><MovieList grid={grid}/></div>
            </div>
            <Pagination results={pagi} handleChange={handlePagi}/>
        </main>
    );
}

export default Home;


