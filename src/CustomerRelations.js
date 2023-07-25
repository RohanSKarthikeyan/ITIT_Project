import React, { useEffect, useState } from 'react';
import { Avatar, Button } from '@nextui-org/react';
import './Css/CustomerRelations.css'; 
import { useStateValue } from './StateProvider';
import { Link } from 'react-router-dom';

function CustomerRelationsDashboard() {
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
    // Navigate to the home page
  };

  return (
    <div className="dashboard-container">
      <div className="sidebar">
        <div className="avatar-card">
          <Avatar text="CR" size="lg" />
          <h3>CUSTOMER RELATIONS</h3>
        </div>
        <div className="navbar-links">
          <Button auto>Dashboard</Button>
          <Button auto>Customer List</Button>
          <Button auto>Support Tickets</Button>
          <Button auto>Reports</Button>
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
            <h2>Customer Relations Dashboard</h2>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed ut
              felis nec nisi tristique scelerisque.
            </p>
          </div>
          <div className="content-card">
            <h2>Customer List</h2>
            <ul>
              <li>Customer 1</li>
              <li>Customer 2</li>
              <li>Customer 3</li>

            </ul>
          </div>
          <div className="content-card">
            <h2>Support Tickets</h2>
            <p>No open tickets.</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default CustomerRelationsDashboard;
