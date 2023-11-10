import React, {Component} from "react";
import '../../style/AlertNavbar.css'
import { useHistory } from 'react-router-dom';

let history = useHistory();

class ButtonGroup extends React.Component 
{
    render() {
        return (
            <div className="button-container">
                <button className="button" onClick={() => history.pushState('/AlertASN')} > ASN Alerts</button>
                <button className="button" onClick={redirct("PO")} > Purchase Order Alerts</button>
                <button className="button" onClick={redirct("RA")} > Return Alerts</button>
                <button className="button" onClick={redirct("IA")} > Invoices Alerts</button>
                <button className="button" onClick={redirct("DA")} > Deal Alerts</button>
            </div>
        );
    }
}

export default ButtonGroup;
