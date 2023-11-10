import React, { Component } from 'react'
import HomeNav from '../Navbar/HomeNav'
import AlertNavbar from '../Navbar/AlertNavbar'
import FullLengthSearchbar from '../Searchbars/FullLengthSearchbar'
import FilterButton from '../Buttons/FilterButton'
import SortButton from '../Buttons/SortButton'

export class AlertASN extends Component {
  render() {
    return (
        <div>
            {<HomeNav/>}
            {<AlertNavbar/>}
            {<FullLengthSearchbar/>}
            {<FilterButton/>}
            {<SortButton/>}
        </div>
    )
  }
}

export default AlertASN