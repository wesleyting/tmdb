import React, {useState} from 'react';
import { Redirect } from 'react-router-dom';

const SearchBar = ({type, q}) => {
    const [query, setQuery] = useState(q);
    const [dos, setDOS] = useState(false);    
    let searchText = type === "fave" ? "Search database" : "Search";

    const handleQuery = (e) => {
        setQuery(e.target.value);
        if (dos === true) {   
            setDOS(false);
        }
        
    }

    const doQuery = (e) => {
        e.preventDefault();
        setDOS(true);
    }

    const handleRedir = () => {
        console.log('redir',dos);
        if (dos === true)  {
            return (
                <Redirect push to={`/search/${query}`} />
            );            
        }
    }


        return (
            <div className="search-bar">
                <form onSubmit={doQuery} action="#">                
                    <input type="text" name="searchbar" defaultValue={query} onChange={handleQuery}></input>
                    <button className="search-btn" type="submit">{searchText}</button>
                </form>
                {handleRedir()}
            </div>
        );

    
};

export default SearchBar;