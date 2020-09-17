export const storeFave = (movie) => {
    let storedFaves = getFaves('faves');
    if (storedFaves) {
        if (isFaveStored(movie) === false) {
            storedFaves.push(movie);           
        }
    } else {
        storedFaves = [];
        storedFaves.push(movie);
    }
    localStorage.setItem('faves', JSON.stringify(storedFaves));
    let newFaves = getFaves('faves');
    return newFaves;
}

export const isFaveStored = (movie) => {
    let storedFaves = getFaves('faves');
    if (!storedFaves) {
        return false;
    } else {
        let skim;
        if (movie) {
            storedFaves.forEach((item, i) => {
                if (item.id === movie.id) {
                    skim = true;
                }
            });
        } else {
            skim = false;
        }        
        return skim === true ? true : false;
    }
}

export const getFaves = (fav = null) => {
    if (!localStorage.getItem(fav)) {
        localStorage.setItem(fav, []);
        return null;
    }
    let storedFaves = localStorage.getItem(fav);
    return JSON.parse(storedFaves);
}

export const delFave = (movie) => {
    let storedFaves = getFaves('faves');
    let rm = storedFaves.map( item => { return item.id }).indexOf(movie.id);
    if (rm >= 0) {
        storedFaves.splice(rm, 1);
    }    
    localStorage.setItem('faves', JSON.stringify(storedFaves));
}

export const clearFaves = () => {
    localStorage.setItem("faves",[]);
}