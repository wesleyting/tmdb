import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import doMovieImages from '../utilities/doMovieImages';
import doMovieRating from '../utilities/doMovieRating';
import parseDate from '../utilities/parseDate';
import FaveButton from './FaveButton';

const MovieList = ({grid}) => {
    let posterWidth = "w500";
    let q = useLocation().pathname;

    const doMovieLink = (id) => {
        if (q.includes("/search/")) {
            return `/movie/${id}`;
        }
        return `movie/${id}`;
    }

    if (!grid) {
        return null;
    } else {
    return grid.map((item, i) => {
        return (
            // grid-tile jsx
            <div key={i} id="movie-box" className={`movie-${i < 10 ? '0' : ''}${i + 1}`}>
                <div className="poster-container">
                <Link className="poster-link" to={doMovieLink(item.id)}>
                    {doMovieImages(item, posterWidth,'poster')}                    
                </Link>   
                <div className="poster-buttons">
                    <div className="favorite"><FaveButton item={item} /></div>
                    <div className="more-info"><Link to={doMovieLink(item.id)}><button>More info</button></Link></div>
                </div>
                </div>
                <div className="movie-info">
                    <h1 className="movie-title">
                        <Link to={doMovieLink(item.id)}>{item.title}</Link>
                    </h1>
                    <p className="movie-rls">{parseDate(item.release_date)}</p>
                    {doMovieRating(item)}
                    <p className="movie-desc">{item.overview}</p>  
                    <div className="mobile-poster-buttons">
                        <div className="favorite"><FaveButton item={item} /></div>
                        <div className="more-info"><Link to={doMovieLink(item.id)}><button>More info...</button></Link></div>
                    </div>            
                </div>
            </div>
        );
        });
    }
}

export default MovieList;