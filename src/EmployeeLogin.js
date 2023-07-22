import React from 'react'
import { useState } from 'react';
import Logo from './Images/embedLogo.png'
import { Link } from 'react-router-dom';
import './Css/EmpLogin.css'
import { Input } from '@nextui-org/react';
import { getAuth, signInWithEmailAndPassword, createUserWithEmailAndPassword } from 'firebase/auth';
import app from './firebase';



function EmployeeLogin() {

    const [email,setEmail]=useState(''); 
   const [password,setpassword]=useState('');

   const auth = getAuth(app);

   const handleSignIn = () => {
    signInWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        // User successfully signed in
        const user = userCredential.user;
        console.log("Signed in user:", user);
        // Add any additional logic you want to perform after successful sign-in
      })
      .catch((error) => {
        // Handle sign-in errors
        console.error("Error signing in:", error.message);
      });
  };

  const handleCreateAccount = () => {
    createUserWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        // New user account created successfully
        const user = userCredential.user;
        console.log("New account created for user:", user);
        // Add any additional logic you want to perform after successful account creation
      })
      .catch((error) => {
        // Handle account creation errors
        console.error("Error creating account:", error.message);
      });
  };


  return (
    <div className='login_div'>
    <div className='logo_div'>
    <Link to="/"><img className='login_logo' src={Logo}/></Link>
    </div>
       <div className='login_box'>
            <h1 style={{marginBottom:'30px;',marginTop:'20px'}}>
                Sign in
            </h1>
            <div className='input_div'>
               <label><strong>Email</strong></label><br/>
               <Input className='input' value={email} onChange={e => setEmail(e.target.value)} bordered placeholder="User-Name" />
               
            </div>
            <div className='input_div'>
               <label><strong>Password</strong></label><br/>
               <Input.Password className='input' value={password} onChange={e => setpassword(e.target.value)} />
              
            </div>
                <button type="submit" onClick={handleSignIn} className='signin_button'>SIGN IN</button>
                <br></br>
                <center> <p>By continuing, you agree to xxx's Conditions <br/>a of Use and Privacy Notice.
                We're a friendly, <br/>industry-focused community of developers</p></center>
               <br></br>
                
               <Link to='/'> <button type="submit" onClick={handleCreateAccount} className='newacc_button'>CREATE A NEW ACCOUNT</button></Link>
         </div>
    </div>
  )
}

export default EmployeeLogin