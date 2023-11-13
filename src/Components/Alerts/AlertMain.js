import React, { Component } from 'react'
import HomeNav from '../Navbar/HomeNav'

function AlertMain()
{
    return (
      <div>
        {<HomeNav/>}
        <div className="button-container">
        <a className="button" href='/AlertASN'> ASN Alerts</a>
                <a className="button" href='/AlertPO'> Purchase Order Alerts</a>
                <a className="button" href='/AlertReturns'> Return Alerts</a>
                <a className="button" href='/AlertInvoices'> Invoices Alerts</a>
                <a className="button" href='/AlertDeals'> Deal Alerts</a>
        </div>
      </div>
    )
}

export default AlertMain
