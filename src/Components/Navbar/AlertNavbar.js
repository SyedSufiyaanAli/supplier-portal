import React, {Component} from "react";
import '../../style/AlertNavbar.css'
import { useHistory } from 'react-router-dom';

let history = useHistory();

class ButtonGroup extends React.Component 
{
    render() {
        return (
            <div className="button-container">
                <button className="button"> ASN Alerts</button>
                <button className="button"> Purchase Order Alerts</button>
                <button className="button"> Return Alerts</button>
                <button className="button"> Invoices Alerts</button>
                <button className="button"> Deal Alerts</button>
            </div>
        );
    }
}

export default ButtonGroup;
