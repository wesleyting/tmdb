const min2hr = (time) => {
    if (time >= 60) {
     let hours = Math.floor(time / 60);
     let mins = time % 60;

     let converted = `${hours} hr ${mins} m`;

     return converted;
    } else {
        return time;
    }
}

export default min2hr;