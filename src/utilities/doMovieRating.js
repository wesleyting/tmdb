import React from 'react';
import rStar from '../images/rating-star.png';

const doMovieRating = (movie, type = "grid") => {
    let clsNm = type === "grid" ? "movie-rating" : "single-rating";
    if (movie.vote_average === 0) {
        return (
            <p className={clsNm}>Unrated</p>
        );
    } else {
        return (
        <p className={clsNm}>
            <span className="rating-star"><img src={rStar} alt="Rating star" /></span> {movie.vote_average}
        </p>
        );
    }
}

export default doMovieRating;