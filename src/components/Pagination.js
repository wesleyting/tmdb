import React from 'react';

const Pagination = ( {results, handleChange} ) => {

    let total = results !== null ? results.total_pages : 0;
    let curr = results !== null ? results.page : 1;
    let minDis = curr <= 1 ? true : false;
    let maxDis = curr === total ? true: false;
    console.log(`totalPages:${total}`, `currPages:${curr}`);

    const pageNavs = [];

    const handlePagi = (p) => {
        handleChange(p);
    }   

    if (total > 1) {
        pageNavs.push(<div key="0" className="pagi-prev"><button onClick={() => {handlePagi(curr-1)}} disabled={minDis}>{`\u003c\u003c`}</button></div>);
        pageNavs.push(<div key="1" className="pagi-next"><button onClick={() => {handlePagi(curr+1)}} disabled={maxDis}>{`\u003e\u003e`}</button></div>);
    }

    return (
        <div className="bottom-pagination">
            {pageNavs}
        </div>

    )

}

export default Pagination;