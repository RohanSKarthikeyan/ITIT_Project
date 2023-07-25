// QualityAssuranceDashboard.js
import React, { useEffect, useState } from 'react';
import { Avatar, Button } from '@nextui-org/react';
import './Css/QualityAssurance.css'; // Create a new CSS file for Quality Assurance
import { useStateValue } from './StateProvider';
import { Link } from 'react-router-dom';

function QualityAssuranceDashboard() {
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
          <Avatar text="QA" size="lg" />
          <h3>QUALITY ASSURANCE</h3>
        </div>
        <div className="navbar-links">
          <Button auto>Dashboard</Button>
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
            <h2>Quality Assurance Dashboard</h2>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed ut
              felis nec nisi tristique scelerisque.
            </p>
          </div>
          <div className="content-card">
            <h2>Reports</h2>
            <p>No recent reports available.</p>

          </div>
          <div className="content-card">
            <h2>Open Issues</h2>
            <ul>
              <li>Issue 1</li>
              <li>Issue 2</li>
              <li>Issue 3</li>
            </ul>
          </div>
          <div className="content-card">
            <h2>Completed Tasks</h2>
            <ul>
              <li>Task 1</li>
              <li>Task 2</li>
              <li>Task 3</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}

export default QualityAssuranceDashboard;
