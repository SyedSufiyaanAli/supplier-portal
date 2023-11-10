import React, { Component } from 'react'
import HomeNav from '../Navbar/HomeNav'

function AlertMain()
{
    return (
      <div>
        {<HomeNav/>}
        <div className="button-container">
                <button className="button"> ASN Alerts</button>
                <button className="button"> Purchase Order Alerts</button>
                <button className="button"> Return Alerts</button>
                <button className="button"> Invoices Alerts</button>
                <button className="button"> Deal Alerts</button>
        </div>
      </div>
    )
}

export default AlertMain
