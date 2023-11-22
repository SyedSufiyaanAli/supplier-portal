import React, {Component} from 'react'
import HomeNav from '../Navbar/HomeNav'
import {FaArrowLeft, FaCross, FaSearch, FaTrash} from "react-icons/fa";
import '../../style/InvoiceDetails.css'
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
                  <input type='date' name='creationDate'></input>
                  <input type='text' name='invoiceType'></input>
                  <input type='text' name='invoiceStatus'></input>
                  <input type='text' name='Currency' disabled></input>
                  <input type='number' name='totalAmount' disabled></input>
                  <input type='number' name='dueAmount' disabled></input>
                  <input type='number' name='nettedAmount' disabled></input>
                  <input type='number' name='totalQty' disabled></input>
                </div>
              </div>

              <div className='mid-pane'>
                <div className='mid-container'>
                    <p>Selected PO(s) :</p>
                    <div className='TableWrapper'>
                      <table>
                        <tr> <td>PO 1</td> </tr>
                        <tr> <td>PO 2</td> </tr>
                        <tr> <td>PO 3</td> </tr>
                      </table>
                    </div><br/>
                    <p>Delivery Address :</p>
                    <textarea name='deliveryAddress' rows="5" cols="50"></textarea>
                </div>
              </div>

              <div className='right-pane'>
                <div className='right-container'>
                    <div>
                        <p>Attachments : <text className='fileFormat'>*  .pdf, .docx , .jpeg files only</text> </p> 
                        <input className='AttachmentsInput' type='file' multiple></input>
                    </div><br/><br/>
                    <div>Invoice Number : <input name='invoiceNumber' disabled></input></div>
                    <br/><br/>
                    <div>
                        <p>Delivery Address :</p>
                        <textarea name='deliveryAddress' rows="5" cols="50"></textarea>
                    </div>
                </div>
              </div>
          </div>

        </div>
    )
  }
}

export default InvoiceDetails