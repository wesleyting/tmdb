import React, { useState, useEffect } from 'react';
import { BASE_URL, API_KEY } from '../globals/variables.js';
import FaveButton from './FaveButton';
import doMovieImages from '../utilities/doMovieImages';
import parseDate from '../utilities/parseDate';
import min2hr from '../utilities/min2hr';

const SingleMovie = ({match}) => {

    const id = match.params.id;
    let posterWidth = "original";

    const [singleMovie, setMovie] = useState(null);
    
    useEffect(() => {
        const fetchMovie = async () => {
            const res = await fetch(BASE_URL + id + API_KEY);
            const data = await res.json();
            //console.log(data);
            setMovie(data);
        }
        fetchMovie();
    }, []);

  
    if (!singleMovie) {
        return null;
    } else {
        return (
            <main>
                <div className="content-wrapper">
                    <div className="single-movie-info">
                        {doMovieImages(singleMovie, posterWidth,'poster')}
                        {doMovieImages(singleMovie, posterWidth, 'backdrop')}
                        <div className="single-text-info">
                            <h1>{singleMovie.title} <FaveButton item={singleMovie} classNm={'single-fave-btn'}/></h1>
                            <h2>{singleMovie.tagline}</h2>
                            <p className="single-rls">{parseDate(singleMovie.release_date)}</p>
                            <p className="single-rating">&#x2605; {singleMovie.vote_average}</p>
                            <p className="single-runtime">{min2hr(singleMovie.runtime)} </p> 
                            <p className="single-desc">{singleMovie.overview}</p>
                        </div>
                    </div>
                </div>
            </main>
        );
    }
}

export default SingleMovie;