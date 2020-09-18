import React, { useState, useEffect } from 'react';
import { BASE_URL, API_KEY } from '../globals/variables.js';
import FaveButton from './FaveButton';
import SearchBar from './SearchBar';
import doMovieImages from '../utilities/doMovieImages';
import doMovieRating from '../utilities/doMovieRating';
import parseDate from '../utilities/parseDate';
import min2hr from '../utilities/min2hr';
import { AnimatePresence, motion } from 'framer-motion';

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
            <main>
                <motion.div className="single-wrapper"
                            exit={{ opacity: 0 }} 
                            animate={{ opacity:1 }} 
                            initial={{ opacity:0 }}>
                    <SearchBar />
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
                                <div className="single-rating">{doMovieRating(singleMovie)}</div>
                            </div>
                            {/*<p className="single-runtime">{//min2hr(singleMovie.runtime)} </p> */}
                        </div>
                    </div>
                </motion.div>
            </main>
        );
    }
}

export default SingleMovie;