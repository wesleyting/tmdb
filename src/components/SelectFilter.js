import React from 'react';

const SelectFilter = ({handleChange, defaultFilter, filterChoices}) => {

    const handleFilter = (e) => {
        handleChange(e.target.value);
    }

    return <select onChange={handleFilter} defaultValue={defaultFilter}>
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
}

export default SelectFilter;