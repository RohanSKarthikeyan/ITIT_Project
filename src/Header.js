import React from 'react';
import logo from './Images/embedLogo.png';
import DropdownComp from './Dropdown';
import { Button } from '@nextui-org/react';
import './Css/Header.css';
import { Link, useNavigate } from 'react-router-dom';
import { useStateValue } from './StateProvider';

function Header() {
  const navigate = useNavigate();
  const [{ email, name }, dispatch] = useStateValue();
  const expectedPassword = 'embedur';

  const handleEmployeeLogin = () => {
    if (!email && !name) {
        console.log(email);
      const enteredPassword = window.prompt('Enter the password:');
      if (enteredPassword === expectedPassword) {
        navigate('/EmpAuth');
      } else {
        alert('Invalid password. Please try again.');
      }
    } else {
      switch (name) {
        case 'SOFTWARE DEVELOPER':
          navigate('/swdev');
          break;
        case 'QUALITY ASSURANCE':
          navigate('/quality-assurance-dashboard');
          break;
        case 'CUSTOMER RELATIONS':
          navigate('/customer-relations-dashboard');
          break;
        case 'HUMAN RESOURCES OFFICER':
          navigate('/human-resources-dashboard');
          break;
        default:
          alert('Invalid role. Please contact your administrator.');
      }
    }
  };

  return (
    <div className="main-div">
      <div className="nav">
        <div className="img-div">
          <img src={logo} style={{ width: '500px' }} alt="Logo" />
        </div>
        <div className="menus-div">
          <DropdownComp light op1="Prod 1" op2="Prod 2" op3="Prod 3" op4="Prod 4" />
          <Button light>CLIENTS</Button>
          <Button light onClick={handleEmployeeLogin}>
            EMPLOYEE LOGIN
          </Button>
          <Button light>COMPANY</Button>
        </div>
        <div className="log-nav">
          <Link to="/login">
            <Button light>LOG IN →</Button>
          </Link>
        </div>
      </div>
    </div>
  );
}

export default Header;
