import React from 'react';

const Pagination = ( {results, handleChange} ) => {

    let total;
    if (results !== null) {
        total = results.total_pages;
    }
    let curr = results !== null ? results.page : 1;
    let minDis = curr <= 1 ? true : false;
    let maxDis = curr === total ? true: false;
    const pageNavs = [];

    const maxPagiPerPage = 10;

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
            for (let i = curr +1 - Math.floor(maxPagiPerPage / 2); i <= Math.min(total, curr + Math.ceil(maxPagiPerPage / 2)); i++) {
                if (i < curr - 2 || i > curr + 2) {
                    pageNavs.push(<button key={i} className={`pagi-pg mqDis-10 ${currPageClass(i)}`} onClick={() => {handlePagi(i)}}>{i}</button>);
                } else {
                    pageNavs.push(<button key={i} className={`pagi-pg ${currPageClass(i)}`} onClick={() => {handlePagi(i)}}>{i}</button>);
                }
            }
        } else {
            for (let i = 1; i <= Math.min(total, maxPagiPerPage); i++) {
                if (curr > 3) {
                    if (i <= curr - 3 || i > curr + 2) {
                        pageNavs.push(<button key={i} className={`pagi-pg mqDis-5 ${currPageClass(i)}`} onClick={() => {handlePagi(i)}}>{i}</button>);
                    } else {
                        pageNavs.push(<button key={i} className={`pagi-pg ${currPageClass(i)}`} onClick={() => {handlePagi(i)}}>{i}</button>);
                    }
                    
                } else if (i > 5 && i <= maxPagiPerPage) {
                    pageNavs.push(<button key={i} className={`pagi-pg mqDis-10 ${currPageClass(i)}`} onClick={() => {handlePagi(i)}}>{i}</button>);
                } else {
                    pageNavs.push(<button key={i} className={`pagi-pg ${currPageClass(i)}`} onClick={() => {handlePagi(i)}}>{i}</button>);
                }
                
            }
        }
    }

    const doPagi = () => {
        if (total > 1) {
            pageNavs.push(<div className="prev-wrap" key="previous" ><button className="pagi-prev" onClick={() => {handlePagi(curr-1)}} disabled={minDis}>Previous</button></div>);
            if (maxPagiPerPage > 0) {
                doPagiNums();
            }
            pageNavs.push(<div className="next-wrap" key="next" ><button className="pagi-next" onClick={() => {handlePagi(curr+1)}} disabled={maxDis}>Next</button></div>);
        }
        return pageNavs;
    }
    return (
        <div className="bottom-pagination">
            <div className="pagination-content">
            <div className="pagi-wrap">{doPagi()}</div>
            </div>
        </div>
    );

}

export default Pagination;