import React, { useEffect } from 'react'
import { useState } from 'react';
import Logo from './Images/embedLogo.png'
import './Css/EmpLogin.css'
import { Input } from '@nextui-org/react';
import { getFirestore, collection, query, where, getDocs } from "firebase/firestore";
import 'firebase/firestore'
import 'firebase/compat/firestore';
import { useStateValue } from './StateProvider';
import { Link, useNavigate } from 'react-router-dom';
import app from './firebase';



function EmployeeLogin() {


  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [{name}, dispatch] = useStateValue(); 
  const navigate = useNavigate();

  const [Emps, setEmps] = useState([]);

  const db = getFirestore(app);
  const colRef = collection(db, 'Employees');

  useEffect(() => {
    console.log('useEffect triggered');
  
    const fetchData = async () => {
      try {
        const querySnapshot = await getDocs(collection(db, 'Employees'));
        const employeesData = querySnapshot.docs.map((doc) => doc.data());
        console.log('Data from Firestore:', employeesData);

        if (employeesData.length === 0) {
          console.log('No data found in Firestore.');
        } else {
          setEmps(employeesData);
        }
      } catch (error) {
        console.error('Error fetching data from Firestore:', error.message);
      }
    };
  
    fetchData();
  }, []);
  
  const handleSignIn = () => {
    console.log(name);
    const user = Emps.find((emp) => emp.EmpMail === email);
  
    if (user) {
      

      if (user.EmpPass === password) {
        const userRole = user.EmpRole;
        
        dispatch({
          type: 'REGISTERED_USER',
          role: userRole,
          name:user.EmpName
        });
        switch (userRole) {
          case 'SOFTWARE DEVELOPER':
            navigate('/swdev');
            break;
          case 'QUALITY ASSURANCE':
            navigate('/quality-assurance');
            break;
          case 'CUSTOMER RELATIONS':
            navigate('/customer-relations');
            break;
          case 'HUMAN RESOURCES OFFICER':
            navigate('/human-resources-officer');
            break;
          default:
            navigate('/');
            break;
        }
      } else {
        console.log('Invalid password.');
      }
    } else {
      console.log('User not found or user data is null.');
    }
  };

  

// ...


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
               <Input className='input' value={email} onChange={e => setEmail(e.target.value)} bordered placeholder="User-Email" />
               
            </div>
            <div className='input_div'>
               <label><strong>Password</strong></label><br/>
               <Input.Password className='input' value={password} onChange={e => setPassword(e.target.value)} />
              
            </div>
                <button type="submit" onClick={handleSignIn} className='signin_button'>Hop In</button>
                <br></br>
                <center> <p>By continuing, you agree to xxx's Conditions <br/>a of Use and Privacy Notice.
                We're a friendly, <br/>industry-focused community of developers</p></center>
               <br></br>
                
               <Link to='/NewEmp'> <button type="submit" className='newacc_button'>NEW TO OUR COMPANY?</button></Link>

         </div>
    </div>
  )
}

export default EmployeeLogin