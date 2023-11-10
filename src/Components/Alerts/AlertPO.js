import React, { Component } from 'react'
import HomeNav from '../Navbar/HomeNav'
import FullLengthSearchbar from '../Searchbars/FullLengthSearchbar'
import FilterButton from '../Buttons/FilterButton'
import SortButton from '../Buttons/SortButton'
import '../../style/AlertMain.css'

export class AlertPO extends Component 
{
  render() 
  {
    const btnStyle = 
    {
        backgroundColor: "white",
        color: "#00338E",
        boxShadow: "0 2px 4px rgba(0, 0, 0, 0.2)",
        pointer: "none"
    };

    return (
        <div>
            {<HomeNav/>}
            <div className="button-container">
                <button className="button"> ASN Alerts</button>
                <button className="button" style={btnStyle} disabled> Purchase Order Alerts</button>
                <button className="button"> Return Alerts</button>
                <button className="button"> Invoices Alerts</button>
                <button className="button"> Deal Alerts</button>
            </div>
            {<FullLengthSearchbar/>}
            {<FilterButton/>}
            {<SortButton/>}
        </div>
    )
  }
}

export default AlertPO