import React from 'react';
import { Link } from 'react-router-dom';
import parseDate from '../utilities/parseDate';
import FaveButton from './FaveButton';

const MovieList = ({grid}) => {
    //There are specific dimensions for poster images: w500 or original, not sure if there are other sizes?
    //Also there is the images api call, but the dimension they return do not match
    //from: https://developers.themoviedb.org/3/getting-started/images
    let posterWidth = "w500";

    if (!grid) {
        return null;
    } else {
    return grid.map((item, i) => {
        return (
            // grid-tile jsx
            <div key={i} id="movie-box" className={`movie-${i < 10 ? '0' : ''}${i + 1}`}>
                <div className="poster-container">
                <Link className="poster-link" to={`movie/${item.id}`}>
                    <img className="poster-img" src={`https://image.tmdb.org/t/p/${posterWidth}/${item.poster_path}`} alt={`${item.title} movie poster`}/>
                </Link>   
                <div className="poster-buttons">
                    <div className="favorite"><FaveButton item={item} /></div>
                    <div className="more-info"><Link to={`movie/${item.id}`}><button>More info</button></Link></div>
                </div>
                </div>
                <div className="movie-info">
                    <p className="movie-title">
                        <Link to={`movie/${item.id}`}>{item.title}</Link>
                    </p>
                    <p className="movie-rls">{parseDate(item.release_date)}</p>
                    <p className="movie-rating">&#x2605; {item.vote_average}</p>
                    <p className="movie-desc">{item.overview}</p>                  
                </div>
            </div>
        );
        });
    }
}

export default MovieList;