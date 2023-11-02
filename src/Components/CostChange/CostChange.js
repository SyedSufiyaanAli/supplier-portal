import React, { Component } from 'react'
import '../../style/CostChange.css'
import HomeNav from '../Navbar/HomeNav'
import HomeButton from '../Buttons/HomeButton'
import CostChangeAlertButton from '../Buttons/CostChangeAlertButtion'
import Searchbar from '../Searchbars/FullLengthSearchbar'
import UploadButton from '../Buttons/UploadFile'
import DownloadTemplate from '../Buttons/DownloadTemplate'
import UpdateHistory from '../Buttons/UpdateHistory'

function CostChange()
{
    return (
        <div class="CostChange-container">
            <div>
                <HomeNav/>
            </div>
            <div class="CostChange-header">
                <HomeButton/>
                <div class="CostChange-header-title"> Cost Change </div> 
                <CostChangeAlertButton/>
            </div>
            <div class="CostChange-searchbar">
                <Searchbar/>
            </div>
            <div class="CostChange-UploadDownloadBtn">
                <UploadButton/><p>(accepted format: xlsx,csv)</p>
                <DownloadTemplate/>
            </div>
            <div class="CostChange-TableBtns"> 
                <UpdateHistory/>
            </div>
        </div>
    )
}

export default CostChange