export const storeFave = (movie) => {
    let storedFaves = getFaves('faves');
    //console.log('movie param (storeFave)', movie, `storedFaves`, storedFaves);
    if (storedFaves) {
        //console.log(`isFaveStored(${movie})`,isFaveStored(movie));
        if (isFaveStored(movie) === false) {
            //console.log("no dupe detected");
            storedFaves.push(movie);           
        } //else { console.log("dupe detected, do nothing"); }
    } else {
        storedFaves = [];
        storedFaves.push(movie);
    }
    localStorage.setItem('faves', JSON.stringify(storedFaves));
    let newFaves = getFaves('faves');
    //console.log(newFaves);
    return newFaves;
}

export const isFaveStored = (movie) => {
    let storedFaves = getFaves('faves');
    if (!storedFaves) {
        //console.log(`storedFaves is null, returning false`);
        //return false;
    } else {
        let skim;
        if (movie) {
            storedFaves.forEach((item, i) => {
                //console.log(`loopi${item.id}`, `loopm${movie.id}`);
                if (item.id === movie.id) {
                    //console.log(`dupe`);
                    skim = true;
                }
            });
        } else {
            skim = false;
        }        
        //console.log(`skim`,skim);
        return skim === true ? true : false;
    }
    return false;
}

export const getFaves = (fav = null) => {
    if (!localStorage.getItem(fav)) {
        localStorage.setItem(fav, []);
        return null;
    }
    let storedFaves = localStorage.getItem(fav);
    return JSON.parse(storedFaves);
    
    // let storedFaves = localStorage.getItem(fav);
    // storedFaves = (storedFaves) ? JSON.parse(storedFaves) : [];
    // //console.log('stored',storedFaves);
    // if (storedFaves.length > 0) {
    //     // storedFaves = JSON.parse(storedFaves);
    //     console.log('stored faves', storedFaves);
    //     return storedFaves;
    // } else {
    //     return false;
    // }

}

export const delFave = (movie) => {
    let storedFaves = getFaves('faves');
    let rm = storedFaves.map( item => { return item.id }).indexOf(movie.id);
    storedFaves.splice(rm, 1);
    localStorage.setItem('faves', JSON.stringify(storedFaves));
}