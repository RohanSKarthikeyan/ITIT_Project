import { Button,Input } from '@nextui-org/react'
import React from 'react'
import './Css/Login.css'
import logo from './Images/embedLogo.png'
import { Text } from "@nextui-org/react";
import { Link } from 'react-router-dom';
import { GoogleAuthProvider, getAuth, signInWithPopup } from 'firebase/auth';
import app from './firebase';


function Login() {

  const handleGoogleLogin = () => {
    const auth = getAuth(app);
    const provider = new GoogleAuthProvider();
    signInWithPopup(auth, provider)
      .then((result) => {
        // Google sign-in was successful
        const user = result.user;
        console.log("Google Sign-in successful. User:", user);
        // Add any additional logic you want to perform after successful Google sign-in
      })
      .catch((error) => {
        // Handle Google sign-in errors
        console.error("Error signing in with Google:", error.message);
      });
  };


  return (
    <div className='main-div-log'>
        <div className='head-div'>
        <Link to='/'><img src={logo} style={{width:'100px',marginBottom:'30px'}}/></Link>
        <Text
        h1
        size={30}
        css={{
            textGradient: "45deg, $yellow600 -20%, $red600 100%",
        }}
        weight="bold"
      >
        HOP INTO YOUR ACCOUNT
      </Text>
        </div>
        <div className='content-div'>
            <div className='soc-div'>
                    <Button style={{marginBottom:'25px'}}>Login using Facebook</Button>
                    <Button onClick={handleGoogleLogin} color="error">Login using Google</Button>
                </div>
                <div className='mail-div'>

                    <Input bordered placeholder="User-Name" />
                    <br/>
                    <Input.Password placeholder="Password"  bordered/>
                </div>
        </div>
    
        
    </div>
  )
}

export default Login