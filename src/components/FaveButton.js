import React from 'react';
import {useState, useEffect} from 'react';
import { storeFave, isFaveStored, getFaves, delFave } from '../utilities/faveStorage';
import FilledFavHeart from '../images/heart.png';
import EmptyFavHeart from '../images/favorite.png';

const FaveButton = ({ item, classNm = 'fave-btn' }) => {
    const displayHeart = (favSt) => {
        return favSt ? FilledFavHeart : EmptyFavHeart;
    }
    const [faves, setFaves] = useState(getFaves('faves'));

    useEffect( () => {
        getFaves('faves');
    }, [faves]);

    const handleFave = (movie) => {
        if (!isFaveStored(movie)) {
            storeFave(movie);
            setFaves(getFaves('faves'));
        } else {
            delFave(movie);
            setFaves(getFaves('faves'));
        }
    }
    
    return (
    <button className={classNm} onClick={() => handleFave(item)}><img src={displayHeart(isFaveStored(item))}/></button>
    );
}

export default FaveButton;
