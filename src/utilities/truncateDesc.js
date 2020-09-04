// truncates text longer than MAX with ...
const truncateDesc = (str, max) => {
    if (str.length > max) {
        let descArr = str.split(" ");
        let counter = 0;
        let truncd = "";
        for (let i = 0; i < descArr.length; i++) {
            if (counter + descArr[i].length > max) {
                if (truncd.slice(-1).match("[.,!?:;]")) {
                    truncd = truncd.slice(0,-1);                    
                }
                return truncd+`...`;
            } else {
                counter += descArr[i].length;
                truncd += ` ${descArr[i]}`;
            }
        }
    } else {
        return str;
    }
    

}

export default truncateDesc;