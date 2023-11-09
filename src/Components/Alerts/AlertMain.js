import React, { Component } from 'react'
import HomeNav from '../Navbar/HomeNav'
import AlertNavbar from '../Navbar/AlertNavbar'

function AlertMain() 
{
    return (
      <div>
        {<HomeNav/>}
        {<AlertNavbar/>}
      </div>
    )
}

export default AlertMain
