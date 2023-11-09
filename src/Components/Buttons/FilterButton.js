import React from 'react';
import '../../style/FilterButton.css';

const FilterButton = () => {
    return (
        <button className="filter-button">
            <i className="fas fa-filter"><FaFilter/></i> Filter By
        </button>
    );
};

export default FilterButton;
