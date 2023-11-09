import React from 'react';
import './AlertNavbar.css';

class ButtonGroup extends React.Component 
{
    render() {
        return (
            <div className="button-container">
                <button className="button">Button 1</button>
                <button className="button">Button 2</button>
                <button className="button">Button 3</button>
                <button className="button">Button 4</button>
                <button className="button">Button 5</button>
            </div>
        );
    }
}

export default ButtonGroup;
