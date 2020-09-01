import React from 'react';

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
            // grid-tile jsx - perhaps shunt off to movieFilter/movieParse?
            <div key={i} className={`movie-${i < 10 ? '0' : ''}${i + 1}`}>
                <p>{item.title}</p>
                <img src={`https://image.tmdb.org/t/p/${posterWidth}/${item.poster_path}`} alt={`${item.title} movie poster`}/>
                <p>DESCRIPTION: {item.overview}</p>
                <p>RELEASE DATE: {item.release_date}</p>
                <p>ID: {item.id}</p>
                <p>RATING: {item.vote_average}</p>
                
            </div>
        );
        });
    }
}

export default MovieList;