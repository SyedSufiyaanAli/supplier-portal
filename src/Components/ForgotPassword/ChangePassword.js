import React from 'react'
import '../../style/ChangePassword.css'
import image from '../../images/Login-Logo.png'
import {FaLock} from "react-icons/fa";

function ChangePassword() 
{
  return (
        <div class='cp-container'>
            <div class='cp-logo-box'>
                <img src={image} alt='KPMG_logo'/>
            </div>
            <div class='cp-form-box'>
                <form class='cp-form'>
                    
                    <h3>Supplier Portal</h3>

                    <div class='cp-links'>
                        Please enter the new password
                    </div><br/>
                    
                    <div class='cp-inputfields'>
                        {<FaLock className='Ricons'/>}
                        <input type='password' placeholder='Enter New Passsword'/>
                    </div>

                    <div class='cp-inputfields'>
                        {<FaLock className='Ricons'/>}
                        <input type='password' placeholder='Re-enter New Passsword'/>
                    </div>

                    <button class='cp-btn'>Submit</button>

                </form>
            </div>
        </div>
  )
}

export default ChangePassword