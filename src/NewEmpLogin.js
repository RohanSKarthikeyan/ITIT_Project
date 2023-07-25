import { Input, Radio } from '@nextui-org/react'
import React, { useState } from 'react'
import { Link } from 'react-router-dom';
import Logo from './Images/embedLogo.png'
import app from './firebase';
import { getFirestore, collection, addDoc } from 'firebase/firestore';
import { useStateValue } from './StateProvider';
import { useNavigate } from 'react-router-dom';


function NewEmpLogin() {

    const navigate = useNavigate();

    const [check, setCheck] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [name, setName] = useState('');
    const [{}, dispatch] = useStateValue();
    const handleSignIn = async () => {

        const role = check.toUpperCase();
    

        const newUser = {
          EmpName: name,
          EmpMail: email,
          EmpPass: password,
          EmpRole: check,
        };
    
        try {
          const db = getFirestore(app);
          const docRef = await addDoc(collection(db, 'Employees'), newUser);
          console.log('New employee added with ID: ', docRef.id);
    

          dispatch({
            type: 'REGISTERED_USER',
            role: role,
            name:name
          });
          console.log(name);
          switch (role) {
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
        } catch (error) {
          console.error('Error adding new employee: ', error);
        }
      };


  return (
    <div className='login_div'>
    <div className='logo_div'>
    <Link to="/"><img className='login_logo' src={Logo}/></Link>
    </div>
       <div className='login_box'>
       <br></br>
       <br></br>
            <div className='input_div'>

               <Input className='input' value={email} onChange={e => setEmail(e.target.value)} bordered placeholder="User-Email" />
               
            </div>
            <br></br>
            <div className='input_div'>
               
               <Input.Password className='input' value={password} onChange={e => setPassword(e.target.value)} />
            </div>
            <br></br>
            <div className='input_div'>

               <Input className='input' value={name} onChange={e => setName(e.target.value)} bordered placeholder="User-Name" />
            </div>
            <br></br>
            <div className='input_div'>
               <label><strong>Your Role</strong></label><br></br>
               <Radio.Group label="Options" defaultValue="A" onChange={setCheck} >
                    <Radio value="SOFTWARE DEVELOPER" >SOFTWARE DEVELOPER</Radio>
                    <Radio value="QUALITY ASSURANCE">QUALITY ASSURANCE</Radio>
                    <Radio value="CUSTOMER RELATIONS">CUSTOMER RELATIONS</Radio>
                    <Radio value="HUMAN RESOURCES OFFICER">HUMAN RESOURCES OFFICER</Radio>
    </Radio.Group>
            </div>
            
                <button type="submit" onClick={handleSignIn} className='signin_button'>NEW BEGINNING</button>
                <br></br>
                <center> <p>By continuing, you agree to xxx's Conditions <br/>a of Use and Privacy Notice.
                We're a friendly, <br/>industry-focused community of developers</p></center>
               <br></br>
         </div>
    </div>
  )
}

export default NewEmpLogin