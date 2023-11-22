import React, {Component} from 'react'
import HomeNav from '../Navbar/HomeNav'
import {FaArrowLeft} from "react-icons/fa";
import '../../style/CreateInvoices.css'
import UploadButton from '../Buttons/UploadFile'
import InvoiceAlertsButton from '../Buttons/InvoiceAlertsButtion'

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
            <a href='/InvoicesMain' className='backBtn'> <i>{<FaArrowLeft/>}</i>  Back </a>
            {<InvoiceAlertsButton/>}
            <br/><br/><br/>
            
            {<UploadButton/>}
            <br/><br/>

            <text> OR </text>

            
            
        </div>
    )
  }
}

export default CreateInvoices