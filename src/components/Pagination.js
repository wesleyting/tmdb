import React from 'react';

const Pagination = ( {results, handleChange} ) => {

    let total = results !== null ? results.total_pages : 0;
    let curr = results !== null ? results.page : 1;
    let minDis = curr <= 1 ? true : false;
    let maxDis = curr === total ? true: false;
    // console.log(`totalPages:${total}`, `currPages:${curr}`);

    const pageNavs = [];

    const handlePagi = (p) => {
        handleChange(p);
    }   

    if (total > 1) {
        pageNavs.push(<div key="0" ><button className="pagi-prev" onClick={() => {handlePagi(curr-1)}} disabled={minDis}>Previous</button></div>);
        pageNavs.push(<div key="1" ><button className="pagi-next" onClick={() => {handlePagi(curr+1)}} disabled={maxDis}>Next</button></div>);
    }

    return (
        <div className="bottom-pagination">
            <div className="pagi-wrap">{pageNavs}</div>
        </div>

    )

}

export default Pagination;