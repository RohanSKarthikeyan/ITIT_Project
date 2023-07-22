import React from 'react'
import logo from './Images/embedLogo.png'
import DropdownComp from './Dropdown'
import { Button } from '@nextui-org/react'
import './Css/Header.css'
import { Link, useNavigate } from 'react-router-dom';
import { useStateValue } from './StateProvider'

function Header() {

    const navigate = useNavigate();
    

  return (
    <div className='main-div'>
        <div className='nav'>
            <div className='img-div'>
                <img src={logo} style={{width:'500px'}}/>
            </div>
            <div className='menus-div'>
               <DropdownComp light
                op1="Hello"
                op2="Welcome"
                op3="ITIT"
                op4="hjgbsdj"
               />

                <Button light>
                    CLIENTS
                </Button>

                <Button light>
                    EMPLOYEE LOGIN
                </Button>

                <Button light>
                    COMPANY
                </Button>

            </div>
            <div className='log-nav'>
            <Link to='/login'><Button light>
                    LOG IN →
                </Button></Link>
            </div>
        </div>
    </div>
  )
}

export default Header