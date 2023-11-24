import React, {Component} from 'react'
import HomeNav from '../Navbar/HomeNav'
import {FaArrowLeft, FaCross, FaSearch, FaTrash} from "react-icons/fa";
import '../../style/InvoiceDetails.css'
import InvoiceAlertsButton from '../Buttons/InvoiceAlertsButtion'
import FullLengthSearchbar from '../Searchbars/FullLengthSearchbar';
import SortButton from '../Buttons/SortButton';
import FilterButton from '../Buttons/FilterButton';

export class InvoiceDetails extends Component 
{
  state = { showing: true };

  render() 
  {
    const { showing } = this.state;

    return (
        <div>
          <HomeNav/>
          <div className='title'>
            <a href='/InvoicesMain' className='backBtn'> <i>{<FaArrowLeft/>}</i>  Back </a>
            <text>Create Invoice</text>
            {<InvoiceAlertsButton/>}
          </div>
          <br/>            
          <button className='InvoiceDetailsTitle' onClick={() => this.setState({ showing: !showing })} >Invoice Details</button>
          <div className='DetailContainer' style={{ display: (showing ? '' : 'none') }}>
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
                        Attachments : <text className='fileFormat'> ( .pdf, .docx , .jpeg files only )</text>
                        <br/><br/>
                        <input className='AttachmentsInput' type='file' multiple></input>
                    </div>
                    <br/><br/><br/>
                    <div className='right-div'>Invoice Number : <input name='invoiceNumber' disabled></input></div>
                    <br/>
                    <div>
                        <p>Delivery Address :</p>
                        <textarea name='deliveryAddress' rows="3" cols="50"></textarea>
                    </div>
                    <br/>
                    <div>
                        Payment Status : <input name='paymentStatus' disabled></input>
                    </div>
                </div>
              </div>
          </div>
          <br/>
          <div className='InvoiceDetailsTitle'>Item Details</div>
          <div>
              <div className='title'>
                <text>Poppulated Items</text>
              </div>
              {<FullLengthSearchbar/>}
              <div>
                  {<SortButton/>}
                  {<FilterButton/>}
              </div>
              <br/>
              <div className='TableContainer'>
                <table className='InvoiceTable'>
                    <thead>
                        <th>Item ID</th>
                        <th>Purchase Order Number</th>
                        <th>Product</th>
                        <th>Purchase Order Quantity</th>
                        <th>Inventory Quantity</th>
                        <th>Cost</th>
                        <th>Total Cost</th>
                    </thead>
                    <tbody>
                        <tr>
                            <td>i-12003431-1996</td>
                            <td>PO-3101290481</td>
                            <td>Hp Laptop Pavillion</td>
                            <td>200</td>
                            <td> <input className='invQty' name='invQty'></input> </td>
                            <td>₹40,000</td>
                            <td> - </td>
                        </tr>
                        <tr>
                            <td>i-12003431-1996</td>
                            <td>PO-3101290481</td>
                            <td>Hp Laptop Pavillion</td>
                            <td>200</td>
                            <td> <input className='invQty' name='invQty'></input> </td>
                            <td>₹40,000</td>
                            <td> - </td>
                        </tr>
                        <tr>
                            <td>i-12003431-1996</td>
                            <td>PO-3101290481</td>
                            <td>Hp Laptop Pavillion</td>
                            <td>200</td>
                            <td> <input className='invQty' name='invQty'></input> </td>
                            <td>₹40,000</td>
                            <td> - </td>
                        </tr>
                        <tr>
                            <td>i-12003431-1996</td>
                            <td>PO-3101290481</td>
                            <td>Hp Laptop Pavillion</td>
                            <td>200</td>
                            <td> <input className='invQty' name='invQty'></input> </td>
                            <td>₹40,000</td>
                            <td> - </td>
                        </tr>
                        <tr>
                            <td>i-12003431-1996</td>
                            <td>PO-3101290481</td>
                            <td>Hp Laptop Pavillion</td>
                            <td>200</td>
                            <td> <input className='invQty' name='invQty'></input> </td>
                            <td>₹40,000</td>
                            <td> - </td>
                        </tr>
                        <tr>
                            <td>i-12003431-1996</td>
                            <td>PO-3101290481</td>
                            <td>Hp Laptop Pavillion</td>
                            <td>200</td>
                            <td> <input className='invQty' name='invQty'></input> </td>
                            <td>₹40,000</td>
                            <td> - </td>
                        </tr>
                        <tr>
                            <td>i-12003431-1996</td>
                            <td>PO-3101290481</td>
                            <td>Hp Laptop Pavillion</td>
                            <td>200</td>
                            <td> <input className='invQty' name='invQty'></input> </td>
                            <td>₹40,000</td>
                            <td> - </td>
                        </tr>
                        <tr>
                            <td>i-12003431-1996</td>
                            <td>PO-3101290481</td>
                            <td>Hp Laptop Pavillion</td>
                            <td>200</td>
                            <td> <input className='invQty' name='invQty'></input> </td>
                            <td>₹40,000</td>
                            <td> - </td>
                        </tr>
                        <tr>
                            <td>i-12003431-1996</td>
                            <td>PO-3101290481</td>
                            <td>Hp Laptop Pavillion</td>
                            <td>200</td>
                            <td> <input className='invQty' name='invQty'></input> </td>
                            <td>₹40,000</td>
                            <td> - </td>
                        </tr>
                    </tbody>
                </table>
              </div>
              <a className='nextBtn'>Next</a>
          </div>
        </div>
    )
  }
}

export default InvoiceDetails