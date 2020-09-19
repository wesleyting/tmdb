import React, {useState, useEffect} from 'react';
import { BASE_SEARCH, API_KEY, SEARCH_QUERY, BASE_PAGE, DEFAULT_PAGE } from '../globals/variables.js'
import MovieList from './MovieList';
import SearchBar from './SearchBar';
import Pagination from './Pagination';
import { motion } from 'framer-motion';

const SearchResults = ({match}) => {

    const [grid, setGrid] = useState(null);
    const [pagi, setPagi] = useState(null);
    const [page, setPage] = useState(DEFAULT_PAGE);

    const query = match.params.query;

    const handlePagi = (p) => {
        setPage(p);
    }
    
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
                        <h2>No results for "{query}".</h2>
                        <p>Please try another search.</p>
                        <SearchBar />
                    </div>
                </motion.div>
            );
        } else if (Array.isArray(grid) && grid.length > 0) {
            return (
            <div className="search-wrapper"
            exit={{ opacity: 0 }} 
            animate={{ opacity:1 }} 
            initial={{ opacity:0 }}>
                <h1>Search Page</h1>
                <SearchBar q={query}/>
                <div className="search-crumb">
                    <h2>Showing results for "{query}":</h2>
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
            {/* <div className="content-wrapper">
                <SearchBar q={query}/>
                <div className="search-crumb">
                    <h2>Showing results for "{query}":</h2>
                </div>
                <div className="movie-grid"><MovieList grid={grid}/></div>
                <Pagination results={pagi} handleChange={handlePagi}/>
            </div> */}
            {doResult()}
        
        </motion.main>
    )
};

export default SearchResults;