import React, { Component } from 'react'
import HomeNav from '../Navbar/HomeNav'
import AlertNavbar from '../Navbar/AlertNavbar'

export class AlertASN extends Component {
  render() {
    return (
        <div>
            {<HomeNav/>}
            {<AlertNavbar/>}
        </div>
    )
  }
}

export default AlertASN