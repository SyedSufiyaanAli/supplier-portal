import React from 'react';
import './AlertNavbar.css';

class ButtonGroup extends React.Component 
{
    render() {
        return (
            <div className="button-container">
                <button className="button">ASN Alerts</button>
                <button className="button">PO Alerts</button>
                <button className="button">Return Alerts</button>
                <button className="button">Invoices Alerts</button>
                <button className="button">Deal Alerts</button>
            </div>
        );
    }
}

export default ButtonGroup;
