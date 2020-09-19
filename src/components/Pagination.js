import React, {useState, useEffect} from 'react';
import getWinDim from '../utilities/getWinDim';

const Pagination = ( {results, handleChange} ) => {

    let total = results !== null ? results.total_pages : 0;
    let curr = results !== null ? results.page : 1;
    let minDis = curr <= 1 ? true : false;
    let maxDis = curr === total ? true: false;
    const pageNavs = [];

    const calcPagiPer = (dims) => {
        if (dims >= 760) {
            return 10;
        } else if (dims >= 500) {
            return 5;
        } else {
            return 0;
        }
    }

    const handleResize = () => {
        return setWinWidth(getWinDim("width"));        
    }

    const [winWidth, setWinWidth] = useState(getWinDim("width"));
    const [maxPagiPerPage, setPagiPer] = useState(calcPagiPer(winWidth));
    window.removeEventListener('resize', handleResize, false);
    window.addEventListener('resize', handleResize, false);

    useEffect( () => {
        let mounted = true;
        setWinWidth(getWinDim("width"));
        if (mounted === true) {
            setPagiPer(calcPagiPer(getWinDim("width")));
        } 
        return () => mounted = false;
    }, [winWidth]);    

    const handlePagi = (p) => {
        handleChange(p);
    }  
    
    const currPageClass = (idx) => {
        if (curr === idx) {
            return "selected";
        } else {
            return "";
        }
    }

    const doPagiNums = () => {
        if (curr > Math.floor(maxPagiPerPage / 2)) {
            for (let i = curr - Math.floor(maxPagiPerPage / 2); i < curr + Math.ceil(maxPagiPerPage / 2); i++) {
                pageNavs.push(<div key={i}><button className={`pagi-pg ${currPageClass(i)}`} onClick={() => {handlePagi(i)}}>{i}</button></div>);
            }
        } else {
            for (let i = 1; i <= maxPagiPerPage; i++) {
                pageNavs.push(<div key={i}><button className={`pagi-pg ${currPageClass(i)}`} onClick={() => {handlePagi(i)}}>{i}</button></div>);
            }
        }
    }

    const doPagi = () => {
        if (total > 1) {
            pageNavs.push(<div key="previous" ><button className="pagi-prev" onClick={() => {handlePagi(curr-1)}} disabled={minDis}>Previous</button></div>);
            if (maxPagiPerPage > 0) {
                doPagiNums();
            }
            pageNavs.push(<div key="next" ><button className="pagi-next" onClick={() => {handlePagi(curr+1)}} disabled={maxDis}>Next</button></div>);
        }
        return pageNavs;
    }

    return (
        <div className="bottom-pagination">
            <div className="pagi-wrap">{doPagi()}</div>
        </div>

    )

}

export default Pagination;