import React, {useState, useEffect} from 'react';
import { BASE_SEARCH, API_KEY, SEARCH_QUERY, BASE_PAGE, DEFAULT_PAGE } from '../globals/variables.js'
import MovieList from './MovieList';
import SearchBar from './SearchBar';
import Pagination from './Pagination';

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
                <div className="content-wrapper">
                    <div className="search-crumb">
                        <h2>No results for "{query}".</h2>
                        <p>Please try another search.</p>
                        <SearchBar />
                    </div>
                </div>
            );
        } else if (Array.isArray(grid) && grid.length > 0) {
            return (
            <div className="content-wrapper">
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
        <main>
            {/* <div className="content-wrapper">
                <SearchBar q={query}/>
                <div className="search-crumb">
                    <h2>Showing results for "{query}":</h2>
                </div>
                <div className="movie-grid"><MovieList grid={grid}/></div>
                <Pagination results={pagi} handleChange={handlePagi}/>
            </div> */}
            {doResult()}
        
        </main>
    )
};

export default SearchResults;