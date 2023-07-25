import React, { useEffect, useState } from 'react';
import { Avatar, Button } from '@nextui-org/react';
import './Css/HumanResources.css';
import { useStateValue } from './StateProvider';
import { Link } from 'react-router-dom';

function HumanResourcesDashboard() {
  const [curName, setName] = useState('');
  const [{ name }, dispatch] = useStateValue();
  useEffect(() => {
    setName(name);
  }, [name]);

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
          <Avatar text="HR" size="lg" />
          <h3>HUMAN RESOURCES</h3>
        </div>
        <div className="navbar-links">
          <Button auto>Dashboard</Button>
          <Button auto>Employees</Button>
          <Button auto>Reports</Button>
          <Button auto>Settings</Button>
          <Link to="/">
            <Button auto onClick={handleLogout}>
              Log Out
            </Button>
          </Link>
        </div>
      </div>
      <div className="navbar">
        <h1>Welcome, {curName}!</h1>
        <div className="main-content">
          <div className="content-card">
            <h2>HR Dashboard</h2>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed ut
              felis nec nisi tristique scelerisque.
            </p>
          </div>
          <div className="content-card">
            <h2>Employee Information</h2>
            <ul>
              <li>Employee 1</li>
              <li>Employee 2</li>
              <li>Employee 3</li>
            </ul>
          </div>
          <div className="content-card">
            <h2>Attendance</h2>
            <p>Attendance data goes here...</p>
          </div>
          <div className="content-card">
            <h2>Performance Appraisals</h2>
            <p>Performance appraisal data goes here...</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default HumanResourcesDashboard;
