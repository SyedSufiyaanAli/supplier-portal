import React from 'react'
import '../../style/FullLengthSearchbar.css'
import {FaSearch} from "react-icons/fa";


function FullLengthSearchbar()
{
    return (
        <div class="FullLengthSearchbar-container">
            <div class="FullLengthSearchbar-content">
                <input class="FullLengthSearchbar-input" placeholder='Search'></input>
                <FaSearch class="FullLengthSearchbar-icon"/>
            </div>
        </div>
    )
}

export default FullLengthSearchbar