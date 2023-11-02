import React from 'react'
import '../../style/Registration.css'
import image from '../../images/Login-Logo.png'  
import { FaEnvelope, FaUserAlt, FaPhone, FaMobileAlt} from "react-icons/fa";

function Registration()
{
    return ( 
        <div class='reg-container'>
                <div class='reg-logo-box'>
                    <img src={image} alt='KPMG_logo'/>
                </div>
                <div class='reg-form-box'>
                    <form class='reg-form'>
                        <h3>New Registration</h3>
                        
                        <div class='reg-inputfields'>
                            {<FaUserAlt className='Ricons'/>}
                            <input class="reg-input"type='text' placeholder='Supplier Name'/><br/>
                        </div>

                        <div class='reg-inputfields'>
                            {<FaEnvelope className='Ricons'/>}
                            <input class="reg-input" type='email' placeholder='Email ID'/><br/>
                        </div>
                        
                        <div class='reg-inputfields'>
                            {<FaPhone className='Ricons'/>}
                            <input class="reg-input" type='text' placeholder='Landline Number'/><br/>
                        </div>

                        <div class='reg-inputfields'>
                            {<FaMobileAlt className='Ricons'/>}
                            <input class="reg-input" type='text' placeholder='Phone Number'/><br/>
                        </div>

                        <div>
                            <input type='checkbox' class='reg-chkbox'/>
                            <lable>I agree to the <a href='./Registration' class='smallLinks'>terms and conditions</a>
                            </lable>
                            <br/>
                        </div>
                        
                        <button class='reg-btn'>Next</button>

                        <div class='reg-links'>
                            Already have an account ? <a href='/' class='smallLinks'>Click here</a><br/>
                        </div>
                        
                    </form>
                </div>
            </div>
    )
}

export default Registration;