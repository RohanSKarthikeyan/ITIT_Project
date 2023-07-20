import { Button,Input } from '@nextui-org/react'
import React from 'react'
import './Css/Login.css'
import logo from './Images/embedLogo.png'
import { Text } from "@nextui-org/react";
import { Link } from 'react-router-dom';


function Login() {
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
                    <Button color="error">Login using Google</Button>
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