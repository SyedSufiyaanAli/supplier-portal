import React, { useState } from 'react'
import '../../style/Login.css'
import image from '../../images/Login-Logo.png'
import { FaEnvelope, FaLock } from "react-icons/fa";
import axios from 'axios';

function Login()
{
    const [username, setusername] = useState("");
    const [password, setpassword] = useState("");

    const URL = 'http://localhost:8080/api/auth/signup';
    
    const Login = () =>
    {
        axios({
            method: 'post',
            url: URL,
            data:
            {
                "username" : username,
                "password" : password
            }
        })
        .then(function (response){
            console.log("response", JSON.stringify(response.data))
        })
        .catch(function (error){
            console.log("error", error)
        })

    }

    return (
            <div class='login-container'>
                <div class='login-logo-box'>
                    <img src={image} alt='KPMG_logo'/>
                </div>
                <div class='login-form-box'>
                    <form class='login-form'>
                        <h3>Supplier Portal</h3>
                        
                        <div class='login-inputfields'>
                            {<FaEnvelope className='Ricons'/>}
                            <input type='text' placeholder='Enter Supplier ID' 
                            onChange={(e)=>setusername(e.target.value)}/><br/>
                        </div>
                        
                        <div class='login-inputfields'>
                            {<FaLock className='Ricons'/>}
                            <input type='password' placeholder='Enter Passsword' 
                            onChange={(e)=>setpassword(e.target.value)}/><br/>
                        </div>

                        <a href='./ForgotPassword' id='login-forgotpass'>Forgot Password ?</a><br/>
                        
                        <button class='login-btn' onClick={Login}>Login</button>
                        
                        <div class='login-links'>
                            New User ? <a href='./Registration' class='login-smallLinks'>Click here</a><br/>
                            <a href='./ForgotPassword' class='login-smallLinks'>Continue Registration</a>
                        </div>
                    </form>
                </div>
            </div>
    )
}

export default Login;