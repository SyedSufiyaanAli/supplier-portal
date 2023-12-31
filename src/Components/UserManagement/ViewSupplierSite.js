
import React from 'react'
import logo from '../../images/KPMG-logo.jpg'
import '../../style/UserMgmtMain.css'
import '../../style/ViewSupplierSite.css'
import {FaUserAlt,FaInfoCircle,FaHome, FaPlusCircle,FaSearch} from "react-icons/fa";

function ViewSupplierSite(){

    // function ViewSite(){
    //     axios({
    //         method:'post',
    //         url: "http://localhost:8080/api/auth/signin",
    //         data:Data,
    //     })
    // }
    
    return (
        <div class='UserMgmt-container'>
        <div class='HomeNav-container'>
            <div class='HomeNav-topline'>
                <div class='HomeNav-heading'>
                    <p>Supplier Portal</p>
                </div>
                <div class='HomeNav-logo-box'>
                    <img src={logo} alt='KPMG_logo' class='HomeNav-logo'/>
                </div>
                <div class='UserMgmt-component'>
                    <div class='UserMgmt-component-content'>
                        <div class='UserMgmt-component-Admin'>
                            {<FaUserAlt className='HomeNav-Ricons'/>}
                            <a class='HomeNav-component-a'>Admin</a>
                        </div>
                        <div class='HomeNav-component-Logout'>
                            {<FaUserAlt className='HomeNav-Ricons'/>}
                            <a class='HomeNav-component-a'>User</a>
                        </div>
                        <div class='HomeNav-component-About'>
                            {<FaInfoCircle className='HomeNav-Ricons'/>}
                            <a class='HomeNav-component-a'>About</a>
                        </div>
                    </div>
                </div>
            </div>
            
            <div class='HomeNav-menu'>
                <div class='HomeNav-menu-content'>
                    <li> 
                        <a href="#" class='HomeNav-menu-content-dropdown-a'>Dashboard</a>
                    </li>
                    <li>
                        <select class='HomeNav-menu-content-dropdown'>
                            <option selected><a href="#" class='HomeNav-menu-content-dropdown-a' >Purchase Order </a></option>
                            <option><a href="#" class='HomeNav-menu-content-dropdown-a'>Retailer Returns</a></option>
                            <option><a href="#" class='HomeNav-menu-content-dropdown-a'>ASN</a></option>
                        </select>
                    </li>
                    <li>
                        <select class='HomeNav-menu-content-dropdown'>
                            <option selected><a href="#" class='HomeNav-menu-content-dropdown-a'>Item Listing</a></option>
                            <option><a href="#" class='HomeNav-menu-content-dropdown-a'>Cost Change</a></option>
                        </select>
                    </li>
                    <li>
                        <select class='HomeNav-menu-content-dropdown'>
                            <option selected><a href="#" class='HomeNav-menu-content-dropdown-a'>Customer Orders</a></option>
                            <option><a href="#" class='HomeNav-menu-content-dropdown-a'>Customer Returns</a></option>
                        </select>
                    </li>
                    <li>
                        <a href="#" class='HomeNav-menu-content-dropdown-a'>Invoices</a>
                    </li>
                    <li>
                        <a href="#" class='HomeNav-menu-content-dropdown-a'>Deals</a>
                    </li>
                    <li>
                        <a href="#" class='HomeNav-menu-content-dropdown-a'>Analytics</a>
                    </li>
                </div>
            </div>
        </div>
        <div class='PurchaseOrderMain-description'>
        <div class='PurchaseOrderMain-description-content'>
             <div class='PurchaseOrderMain-component-Home'>
                 {<FaHome className='PurchaseOrderMain-Ricons-Home'/>}
             </div> 
             <div class='UserMgmt-heading'>
                 <p>UserManagement</p>
            </div>      
        </div>
    </div>
    <div class='UserMgmt-Add'>
                <a class='UserMgmt-Add-a'>Add Site</a>
                {<FaPlusCircle className='PurchaseOrderMain-Ricons-plus'/>}
    </div>
    <div class='suppliersite'>
            <p>View Supplier Sites</p>
    </div>
    <div class='container'>
        <div class='container-left'>
            <p>View Existing Sites</p>
            <div class='searchbar-container'>
               <p>Search</p>
                {<FaSearch className='Ricons-search'/>}
            </div>
            <div class='names-container'>
                <div class='site'>
                    <input type='checkbox' id='cbox' style={{width:70,backgroundColor:'black'}}></input>
                    <p>Mumbai</p>
                </div>
                <div class='site'>
                    <input type='checkbox' id='cbox' style={{width:70,backgroundColor:'black'}}></input>
                    <p>Kolkata</p>
                </div>
                <div class='site'>
                    <input type='checkbox' id='cbox' style={{width:70,backgroundColor:'black'}}></input>
                    <p>Banglore</p>
                </div>
                <div class='site'>
                    <input type='checkbox' id='cbox' style={{width:70,backgroundColor:'black'}}></input>
                    <p>Kochi</p>
                </div>
                <div class='site'>
                    <input type='checkbox' id='cbox' style={{width:70,backgroundColor:'black'}}></input>
                    <p>chennai</p>
                </div>
                <div class='site'>
                    <input type='checkbox' id='cbox' style={{width:70,backgroundColor:'black'}}></input>
                    <p>Hyderabad</p>
                </div>
                <div class='site'>
                    <input type='checkbox' id='cbox' style={{width:70,backgroundColor:'black'}}></input>
                    <p>Pune</p>
                </div>
                <div class='site'>
                    <input type='checkbox' id='cbox' style={{width:70,backgroundColor:'black'}}></input>
                    <p>Nashik</p>
                </div>
            </div>
        </div>
        <div class='container-right'>
            <p>Supplier Sites Details</p>
            <div class='Site-details-inptfield'>
                <p>Site Name:</p>
                <input type='text' id='inputbox' name="sitename" required/><br/>
            </div>
            <div class='Site-details-inptfield'>
                <p>Site Address:</p>
                <input type='text' id='inputbox' name="sitename" required/><br/>
            </div>
            <div class='Site-details-inptfield'>
                <p>Site Location on map:</p>
                <input type='text' id='inputbox' name="sitename" required/><br/>
            </div>
            <div class='Site-details-inptfield'>
                <p>Site Contact:</p>
                <input type='text' id='inputbox' name="sitename" required/><br/>
            </div>
        </div>
    </div>
    <div class='foot'>
        <div class='UserMgmt-remove'>
                <a class='UserMgmt-Add-a'>Remove Site</a>
        </div>
        <div class='UserMgmt-edit'>
                <a class='UserMgmt-Add-a'>Edit Site Info</a>
        </div>
    </div>
</div>
    )
}

export default ViewSupplierSite