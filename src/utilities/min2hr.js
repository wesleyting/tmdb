const min2hr = (time) => {
    let converted = "";
    if (time >= 60) {
        let hours = Math.floor(time / 60);
        let mins = time % 60;
        converted = `${hours} hr ${mins} m`;
    } else {
        converted = `${time} m`;
    }
    return converted;
}

export default min2hr;