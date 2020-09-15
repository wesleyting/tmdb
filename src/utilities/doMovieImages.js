import React from 'react';
import { NULL_POSTER, BASE_POSTER } from '../globals/variables';

const doMovieImages = (movie, size, type) => {
    let imgType = type === 'poster' ? "poster_path" : "backdrop_path";
    let altType = type === 'poster' ? "movie poster" : "backdrop";
    let url = movie[imgType] === null ? NULL_POSTER : `${BASE_POSTER}${size}/${movie[imgType]}`;

    return <img className={`${type}-img`} src={url} alt={`${movie.title} ${altType}`}/>;
}

export default doMovieImages;