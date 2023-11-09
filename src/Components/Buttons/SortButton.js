import React from 'react';
import './SortButton.css';

const SortButton = () => {
    return (
        <button className="sort-button">
            <i className="fas fa-sort"><FaSort/></i> Sort
        </button>
    );
};

export default SortButton;
