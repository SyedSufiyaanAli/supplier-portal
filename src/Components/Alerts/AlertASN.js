import React, { Component } from 'react'
import HomeNav from '../Navbar/HomeNav'
import AlertNavbar from '../Navbar/AlertNavbar'
import FullLengthSearchbar from '../Searchbars/FullLengthSearchbar'

function AlertASN() 
{
    return (
      <div>
        {<HomeNav/>}
        {<AlertNavbar/>}
        
      </div>
    )
}

export default AlertASN