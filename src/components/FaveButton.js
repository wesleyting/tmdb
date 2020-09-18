import React from 'react';
import {useState, useEffect} from 'react';
import { storeFave, isFaveStored, getFaves, delFave } from '../utilities/faveStorage';
// import FilledFavHeart from '../images/heart-filled.png';
// import EmptyFavHeart from '../images/heart-empty.png';

const EMPTY_HEART = <div className="emptyHeart"></div>;
const FILLED_HEART = <div className="filledHeart"></div>;

const FaveButton = ({ item, classNm = 'fave-btn' }) => {
    const displayHeart = (favSt) => {
        return favSt ? FILLED_HEART : EMPTY_HEART;
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
    <button className={classNm} onClick={() => handleFave(item)}>{displayHeart(isFaveStored(item))}</button>
    );
}

export default FaveButton;
