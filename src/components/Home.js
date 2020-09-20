import React, { useEffect, useState } from 'react';
import { BASE_URL, API_KEY, URL_FILTER, DEFAULT_FILTER, BASE_PAGE, DEFAULT_PAGE } from '../globals/variables.js'
import MovieList from './MovieList';
import SelectFilter from './SelectFilter';
import Pagination from './Pagination';
import {  motion } from 'framer-motion';

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
    }
    
    useEffect(() => {
        const fetchMovie = async () => {
            const res = await fetch(BASE_URL + URL_FILTER[filter] + API_KEY + BASE_PAGE + page);
            const data = await res.json();
            setGrid(data.results);
            setPagi(data);
        }
        fetchMovie();
    }, [filter, page]);
    
    return (
        <main>
            <motion.div className="content-wrap" 
                        exit={{ opacity: 0 }} 
                        animate={{ opacity:1 }} 
                        initial={{ opacity:0 }}>
            <div className="header-img">

                <div className="header-text">
                    <h1>Welcome to Reel Talk! </h1>
                    <p>Learn more about the latest releases, search by category, and keep track of your favourites.</p>
                </div>
            </div>
            <div className="content-wrapper">
                <SelectFilter handleChange={handleFilter} filterChoices={URL_FILTER} defaultFilter={DEFAULT_FILTER} />
                <div className="movie-grid"><MovieList grid={grid}/></div>
                <Pagination results={pagi} handleChange={handlePagi}/>
            </div>
            </motion.div>
        </main>
    );
}

export default Home;


