import React, {useState, useEffect} from 'react';
import { Redirect, useLocation } from 'react-router-dom';

const SearchBar = ({type, cmp}) => {
    let m = useLocation().pathname;
    let q = m.replace("/search/","").trim();
    let isRes = m.includes("/search/");

    const [query, setQuery] = useState(q);
    const [dos, setDOS] = useState(false);    
    let searchText = type === "fave" ? "Search database" : "Search";

    useEffect(() => {
        if ((cmp.cmp === "nav" && isRes) || isRes) {
            setQuery(cmp.qry);
        } else if (cmp.cmp === "nav" || !isRes) {
            setQuery("");
        }
    },[q, isRes, cmp]);

    const handleQuery = (e) => {
        setQuery(e.target.value);       
        
        if (dos) {   
            setDOS(false);
        }
    }

    const doQuery = (e) => {
        e.preventDefault();
        if (query === null) {
            setQuery("");            
        }
        setDOS(true);
    }

    const handleRedir = () => {
        if (dos) {
            if (query !== "") {
                if (isRes || (cmp.cmp === "nav" || cmp.cmp === "fav")) {
                    return (
                        <Redirect push to={`/search/${query}`} />
                    );            
                }                
            }           
        }
    }

    return (
        <div className="search-bar">
            {handleRedir()}
            <form onSubmit={doQuery} action="#">                
                <input type="text" className="searchbar" value={query} onChange={handleQuery}></input>
                <button className="search-btn" type="submit">{searchText}</button>
            </form>
            
        </div>
    );
};

export default SearchBar;