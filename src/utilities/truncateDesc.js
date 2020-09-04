// truncates text longer than MAX with ...
// as it's character-count based, this may be better done in another way:
// https://css-tricks.com/snippets/css/truncate-string-with-ellipsis/
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