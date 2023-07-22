import React from 'react'
import Header from './Header'
import { useStateValue } from './StateProvider';

function Home() {
    const [{user}] = useStateValue();
  return (
    <div><Header/>
    <div>
        <span><small> Hello {user ? user.email:'Guest'}</small></span>
       <span>{user?'SignOut':'  SignIn'}</span>
        </div>
    </div>
  )
}

export default Home