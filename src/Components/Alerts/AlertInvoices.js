import React, { Component } from 'react'
import HomeNav from '../Navbar/HomeNav'
import FullLengthSearchbar from '../Searchbars/FullLengthSearchbar'
import FilterButton from '../Buttons/FilterButton'
import SortButton from '../Buttons/SortButton'
import '../../style/AlertMain.css'

export class AlertInvoices extends Component 
{
  render() 
  {
    const btnStyle = 
    {
      backgroundColor: "white",
      color: "#00338E",
      fontWeight: "700",
      boxShadow: "0 2px 4px rgba(0, 0, 0, 0.2)",
      border: "#00338E solid 1px"
    };

    return (
        <div>
            {<HomeNav/>}
            <div className="button-container">
                <a className="button" href='/AlertASN'> ASN Alerts</a>
                <a className="button" href='/AlertPO'> Purchase Order Alerts</a>
                <a className="button" href='/AlertReturns'> Return Alerts</a>
                <a className="button" href='/AlertInvoices' style={btnStyle} disabled> Invoices Alerts</a>
                <a className="button" href='/AlertDeals'> Deal Alerts</a>
            </div>
            {<FullLengthSearchbar/>}
            {<FilterButton/>}
            {<SortButton/>}
        </div>
    )
  }
}

export default AlertInvoices