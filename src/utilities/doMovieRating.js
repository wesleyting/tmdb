import React from 'react';

const doMovieRating = (movie) => {
    if (movie.vote_average === 0) {
        return `Unrated`;
    } else {
        return (
        <p className="rating-info">
            <span className="rating-star">{`\u2605`}</span> {movie.vote_average}
        </p>
        );
    }
}

export default doMovieRating;