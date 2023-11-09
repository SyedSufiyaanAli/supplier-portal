import React, { Component } from 'react'
import HomeNav from '../Navbar/HomeNav'
import AlertNavbar from '../Navbar/AlertNavbar'
import FullLengthSearchbar from '../Searchbars/FullLengthSearchbar'

export class AlertASN extends Component {
  render() {
    return (
        <div>
            {<HomeNav/>}
            {<AlertNavbar/>}
            {<FullLengthSearchbar/>}
        </div>
    )
  }
}

export default AlertASN