import React, { useState, useEffect } from 'react';
import { BASE_URL, API_KEY } from '../globals/variables.js';
import FaveButton from './FaveButton';
import SearchBar from './SearchBar';
import doMovieImages from '../utilities/doMovieImages';
import doMovieRating from '../utilities/doMovieRating';
import parseDate from '../utilities/parseDate';
import min2hr from '../utilities/min2hr';
import {  motion } from 'framer-motion';

const SingleMovie = ({match}) => {
    let posterWidth = "original";

    const [singleMovie, setMovie] = useState(null);
    const id = match.params.id;
    
    useEffect(() => {
        const fetchMovie = async () => {
            const res = await fetch(BASE_URL + id + API_KEY);
            const data = await res.json();
            setMovie(data);
        }
        fetchMovie();
    }, [id]);

  
    if (!singleMovie) {
        return null;
    } else {
        return (
            <motion.main className='single-main'
            exit={{ opacity: 0 }} 
            animate={{ opacity:1 }} 
            initial={{ opacity:0 }}>
                <div className="single-wrapper">
                    <div className='single-search'><SearchBar/></div>
                    <div className="single-movie-info">
                        <div className="movie-poster">{doMovieImages(singleMovie, posterWidth,'poster')}
                        <div className='single-fave-btn'><FaveButton item={singleMovie}  /></div></div>
                        <div className="single-text-info">
                            <div className='single-title'>
                                <h1>{singleMovie.title}</h1> 
                            </div>
                            {/*<h2>{singleMovie.tagline}</h2>*/}
                            <p className="single-desc">{singleMovie.overview}</p>
                            <div className='rls-and-rating'>
                                <p className="single-rls">{parseDate(singleMovie.release_date)}</p>
                                {doMovieRating(singleMovie, "single")}
                            </div>
                            {/*<p className="single-runtime">{//min2hr(singleMovie.runtime)} </p> */}
                        </div>
                    </div>
                </div>
            </motion.main>
        );
    }
}

export default SingleMovie;