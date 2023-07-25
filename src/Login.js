import { Button, Input } from '@nextui-org/react'
import React from 'react'
import './Css/Login.css'
import logo from './Images/embedLogo.png'
import { Text } from "@nextui-org/react";
import { Link, useNavigate } from 'react-router-dom';
import { GoogleAuthProvider, FacebookAuthProvider, getAuth, signInWithPopup } from 'firebase/auth';
import app from './firebase';

function Login() {

  const handleGoogleLogin = () => {
    const auth = getAuth(app);
    const provider = new GoogleAuthProvider();
    signInWithPopup(auth, provider)
      .then((result) => {
        const user = result.user;
        console.log("Google Sign-in successful. User:", user);
      })
      .catch((error) => {
        console.error("Error signing in with Google:", error.message);
      });
      navigate("/");
  };
const navigate = useNavigate();
  const handleFacebookLogin = () => {
    const auth = getAuth(app);
    const provider = new FacebookAuthProvider();
    signInWithPopup(auth, provider)
      .then((result) => {
        const user = result.user;
        console.log("Facebook Sign-in successful. User:", user);
      })
      .catch((error) => {
        console.error("Error signing in with Facebook:", error.message);
      });
      navigate("/");
  };

  return (
    <div className='main-div-log'>
      <div className='head-div'>
        <Link to='/'><img src={logo} style={{ width: '100px', marginBottom: '30px' }} /></Link>
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
          <Button style={{ marginBottom: '25px' }} onClick={handleFacebookLogin}>Login using Facebook</Button>
          <Button onClick={handleGoogleLogin} color="error">Login using Google</Button>
        </div>
        <div className='mail-div'>
          <Input bordered placeholder="User-Name" />
          <br />
          <Input.Password placeholder="Password" bordered />
        </div>
      </div>
    </div>
  )
}

export default Login;
