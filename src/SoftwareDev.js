import React, { useEffect, useState } from 'react';
import { Avatar, Button } from '@nextui-org/react';
import './Css/SoftwareDev.css'; 
import { useStateValue } from './StateProvider';
import { Link } from 'react-router-dom';

function SoftwareDeveloperDashboard() {

  const [curName,setName] = useState('');
  const[{name},dispatch] = useStateValue();
  useEffect(()=> {
    setName(name);
  },[])


  const handleLogout = () => {

  
    dispatch({
      type: 'SET_USER',
      user: null,
    });
    dispatch({
      type: 'REGISTERED_USER',
      name: null,
      email: null,
      role: null,
    });

  };

  return (
    <div className="dashboard-container">
      <div className="sidebar">
        <div className="avatar-card">
          <Avatar text="SD" size="lg" />
          <h3>SOFTWARE DEVELOPER</h3>
        </div>
        <div className="navbar-links">
          <Button auto>Dashboard</Button>
          <Button auto>Projects</Button>
          <Button auto>Tasks</Button>
          <Button auto>Reports</Button>
          <Button auto>Settings</Button>
          <Link to="/"><Button auto onClick={handleLogout}>Log Out</Button></Link>
        </div>
      </div>
      <div className="navbar">
        <h1>Welcome, {curName}!</h1>
        <div className="main-content">
          <div className="content-card">
            <h2>Recent Projects</h2>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed ut felis nec nisi tristique scelerisque.</p>
          </div>
          <div className="content-card">
            <h2>Tasks to Complete</h2>
            <p>1. Task 1</p>
            <p>2. Task 2</p>
            <p>3. Task 3</p>
          </div>
          <div className="content-card">
            <h2>Reports</h2>
            <p>No recent reports available.</p>

          </div>

        </div>
      </div>
    </div>
  );
}

export default SoftwareDeveloperDashboard;
