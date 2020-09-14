import React from 'react';

const doMovieRating = (movie) => {
    if (movie.vote_average === 0) {
        return `Unrated`;
    } else {
        return (
        <div className="rating-info">
            <span className="rating-star">{`\u2605`}</span> {movie.vote_average}
        </div>
        );
    }
}

export default doMovieRating;