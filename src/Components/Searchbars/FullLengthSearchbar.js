import React from 'react';
import './FullLengthSearchbar.css';

const FullLengthSearchbar = () => {
    return (
        <div className="search-bar">
            <input
                type="text"
                className="search-input"
                placeholder="Search..."
            />
            <div className="search-icon">
                <i className="fas fa-search"></i>
            </div>
        </div>
    );
};

export default FullLengthSearchbar;
