import React, { Component } from 'react'
import '../../style/CostChangeItemListing.css'
import HomeNav from '../Navbar/HomeNav'
import CostChangeAlertButton from '../Buttons/CostChangeAlertButtion'
import { FaFileDownload, FaArrowLeft } from "react-icons/fa";

function CostChangeItemListing()
{
    return (
        <div>
            <HomeNav/>
            <div className='CC-title'>
                <a href='/CostChange' className='backBtn'> <i>{<FaArrowLeft/>}</i>  Back </a>
                <text>Cost Change - Item Listing</text>
                {<CostChangeAlertButton/>}
            </div>
            <br/>
            <div className='CC-ItemListingContainer'>
                <div className='CC-ItemListingDetails'>
                    <div className='fieldName'>
                        <p>Item #  </p>
                        <p>Item Description :  </p><br/>
                        <p>SKU : </p>
                        <p>Category : </p>
                        <p>Current Price : </p>
                        <p>New Price : </p>
                    </div>
                    <div className='inputFields'>
                        <input type='text' name='ItemNumber'></input>
                        <input type='text' name='ItemDescription' id='itemDescription'></input>
                        <input type='text' name='SKU'></input>
                        <input type='text' name='Category' ></input>
                        <input type='number' name='CurrentPrice' ></input>
                        <input type='number' name='NewPrice' ></input>
                    </div>
                </div>
                <div className='CC-ItemListingImage'>
                    <img src='../../images/item-image.png' alt='image'></img>
                </div>
            </div>
            <button className='CC-ItemListingSubmitBtn'>Submit</button>
        </div>
    )
}

export default CostChangeItemListing