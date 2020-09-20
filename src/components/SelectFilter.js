import React, {useState} from 'react';

const SelectFilter = ({handleChange, defaultFilter, filterChoices}) => {

    const [sel, setSel] = useState(defaultFilter);
    const handleFilter = (e) => {
        setSel(e.target.value);
        handleChange(e.target.value);
    }

    const setSelCls = (key) => {
        if (sel === key) {
            return "selected";
        } else {
            return "";
        }
    }

    return (
        <div className="filter-wrapper">
            <div className="view-filters">
            {Object.entries(filterChoices).map((item, i) => {
                let itemKey = item[0];
                let itemValue, itemValueFormat = item[1].split("_");
                for (let j = 0; j < itemValueFormat.length; j++) {
                    itemValueFormat[j] = itemValueFormat[j][0].toUpperCase()+itemValueFormat[j].slice(1);
                    itemValue = (j > 0) ? itemValueFormat[j-1]+" "+itemValueFormat[j] : itemValueFormat[j];
                }

                return(
                    <button className={`${itemKey}-filter-btn ${setSelCls(itemKey)}`} key={i} value={itemKey} onClick={handleFilter}>{itemValue}</button>
                );
            })}
            </div>
                <select className="view-filters-dropdown" onChange={handleFilter} defaultValue={defaultFilter}>
                {Object.entries(filterChoices).map((item, i) => {
                    let itemKey = item[0];
                    let itemValue, itemValueFormat = item[1].split("_");
                    for (let j = 0; j < itemValueFormat.length; j++) {
                        itemValueFormat[j] = itemValueFormat[j][0].toUpperCase()+itemValueFormat[j].slice(1);
                        itemValue = (j > 0) ? itemValueFormat[j-1]+" "+itemValueFormat[j] : itemValueFormat[j];
                    }

                    return(
                        <option className="dropdown-options" key={i} value={itemKey}>{itemValue}</option>
                    );
                })};
                </select>
    </div>
    )}

export default SelectFilter;