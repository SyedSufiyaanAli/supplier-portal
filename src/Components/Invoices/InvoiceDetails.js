import React, {Component} from 'react'
import HomeNav from '../Navbar/HomeNav'
import {FaArrowLeft, FaCross, FaSearch, FaTrash} from "react-icons/fa";
import '../../style/InvoiceDetails.css'
import UploadButton from '../Buttons/UploadFile'
import InvoiceAlertsButton from '../Buttons/InvoiceAlertsButtion'

export class InvoiceDetails extends Component {
  render() {
    return (
        <div>
          <HomeNav/>
          <div className='title'>
            <a href='/InvoicesMain' className='backBtn'> <i>{<FaArrowLeft/>}</i>  Back </a>
            <text>Create Invoice</text>
            {<InvoiceAlertsButton/>}
          </div>
          <br/>            
          
          <div className='InvoiceDetailsTitle'>Invoice Details</div>
 
          <div className='DetailContainer'>
              <div className='left-pane'>
                <div className='fieldName'>
                    <p>Creation Date :</p>
                    <p>Invoice Type :</p>
                    <p>Invoice Status :</p>
                    <p>Currency :</p>
                    <p>Total Amount :</p>
                    <p>Due Amount :</p>
                    <p>Netted Amount :</p>
                    <p>Total Qty :</p>
                </div>
                <div className='inputFields'>
                  <input></input>
                  <input></input>
                  <input></input>
                  <input></input>
                  <input></input>
                  <input></input>
                  <input></input>
                  <input></input>
                </div>
              </div>
              <div className='mid-pane'>
                <p>Syed Sufiyaan Ali</p>
              </div>
              <div className='right-pane'>
                <p>Syed Sufiyaan Ali</p>
              </div>
          </div>

        </div>
    )
  }
}

export default InvoiceDetails