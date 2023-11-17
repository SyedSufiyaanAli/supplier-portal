import React from 'react';
import '../../style/ExportButton.css';
import { FaFileExport } from 'react-icons/fa'

const SortButton = () => {
    return (
        <button className="export-button">
            Export <i><FaFileExport/></i>
        </button>
    );
};

export default SortButton;