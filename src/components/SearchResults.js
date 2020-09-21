import React, {useState, useEffect } from 'react';
import { BASE_SEARCH, API_KEY, SEARCH_QUERY, BASE_PAGE, DEFAULT_PAGE } from '../globals/variables.js'
import { useLocation } from "react-router-dom";
import MovieList from './MovieList';
import SearchBar from './SearchBar';
import Pagination from './Pagination';
import { motion } from 'framer-motion';

const SearchResults = () => {
    let q = useLocation().pathname.replace("/search/","").trim();
    q = useLocation().pathname.replace("/search/","").trim();
    const [query, setQuery] = useState(q);

    const [grid, setGrid] = useState(query);
    const [pagi, setPagi] = useState(null);
    const [page, setPage] = useState(DEFAULT_PAGE);
    
    const updQ = () => {
        if (query !== q) {
            setQuery(q);
        }
        return query;
    }
    const handlePagi = (p) => {
        setPage(p);
    }

    useEffect(() => {
        setQuery(q);
    }, [q]);
    
    useEffect(() => {
        const fetchMovie = async () => {
            const res = await fetch(BASE_SEARCH + API_KEY + SEARCH_QUERY + query + BASE_PAGE + page);
            const data = await res.json();
            setGrid(data.results);
            setPagi(data);
        }
        fetchMovie();
    }, [page, query]);



    const doResult = () => {
        if (!grid || (Array.isArray(grid) && grid.length === 0)) {
            return (
                <motion.div className="search-wrapper"
                exit={{ opacity: 0 }} 
                animate={{ opacity:1 }} 
                initial={{ opacity:0 }}>
                    <h1>Search Page</h1>
                    <div className="search-crumb">
                        <h2>No results for "{q}".</h2>
                        <p className="search-msg">Please try another search.</p>
                        <SearchBar cmp={{cmp:"res",qry:q}} />
                    </div>
                </motion.div>
            );
        } else if (Array.isArray(grid) && grid.length > 0) {
            return (
            <div className="search-wrapper"
            exit={{ opacity: 0 }} 
            animate={{ opacity:1 }} 
            initial={{ opacity:0 }}>
                <h1 className="search-title-header">Search Page</h1>
                <SearchBar cmp={{cmp:"res",qry:q}} />
                <div className="search-crumb">
                    <h2>Showing results for "{updQ()}":</h2>
                </div>
                <div className="movie-grid"><MovieList grid={grid}/></div>
                <Pagination results={pagi} handleChange={handlePagi}/>
            </div>
            ); 
        }
    }

    return (
        <motion.main
        exit={{ opacity: 0 }} 
        animate={{ opacity:1 }} 
        initial={{ opacity:0 }}>

            {doResult()}
        
        </motion.main>
    )
};

export default SearchResults;