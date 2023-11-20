import React, {Component} from 'react'
import HomeNav from '../Navbar/HomeNav'
import FullLengthSearchbar from '../Searchbars/FullLengthSearchbar'
import FilterButton from '../Buttons/FilterButton'
import ExportButton from '../Buttons/ExportButton'
import {FaArrowLeft, FaBell, FaCloudDownloadAlt, FaPlusCircle} from "react-icons/fa";
import '../../style/CreateInvoices.css'
import SortButton from '../Buttons/SortButton'
import UploadButton from '../Buttons/UploadFile'

export class CreateInvoices extends Component {
  render() {
    return (
        <div>
            <HomeNav/>
            <div class='Invoices-heading'>
                <div className='title'>
                    <p>Create Invoices</p>
                </div>
            </div>
            <a href='/InvoicesMain' className='backBtn'> <i>{<FaArrowLeft/>}</i>  Back </a>            <br/>
            <br/>
            
            {<UploadButton/>}
            
            <br/>
            
            
        </div>
    )
  }
}

export default CreateInvoices