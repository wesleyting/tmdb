import React, {useState, useEffect} from 'react';
import { storeFave, isFaveStored, getFaves, delFave } from '../utilities/faveStorage';
import FilledFavHeart from '../images/heart.png';
import EmptyFavHeart from '../images/favorite.png';

const FaveButton = ({ item }) => {
    const [faves, setFaves] = useState(getFaves('faves'));
    const [favImage, setHeart] = useState(EmptyFavHeart);

    useEffect( () => {
        getFaves('faves');
        // if (Array.isArray(faves)) {
        //     let out = "";
        //     faves.forEach((item, i) => { out += `${i}:${item.id},`});
        //     console.log(out);
        // } 
    }, [faves]);

    useEffect( () => {
    }, [favImage]);

    const handleFave = (movie) => {
        //console.log("ya clicked fave", movie);
        if (favImage === EmptyFavHeart) {
            storeFave(movie);
            setHeart(FilledFavHeart);
            setFaves(getFaves('faves'));
        } else {
            delFave(movie);
            setHeart(EmptyFavHeart);
            setFaves(getFaves('faves'));
        }            
            //console.log(`faves:${faves} ${faves.length}:`,getFaves('faves'));
            //console.log(faves.length > 0 ? `ggfs ${faves[0].id}` : "o");
    }
    
    return (
    <button className="fave-btn" onClick={() => handleFave(item)}><img src={favImage}/></button>
    );
}

export default FaveButton;
