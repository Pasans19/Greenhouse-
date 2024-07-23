import React from 'react';
import { FaThermometerHalf, FaTint, FaLeaf, FaUser } from 'react-icons/fa';
import Sidebar from '../Sidebar/sidebar';
import './dashboard.css';

const Dashboard = () => {
  return (
    <div className="dashboard-container">
      <Sidebar />
      <div className="dashboard-content">
        <header>
          <h1>SmartSpace Agri</h1>
          <div className="user-info">
            <p>Welcome, Harold</p>
            <FaUser className="profile-pic" />
          </div>
        </header>
        <main>
          <div className="summary">
            <div className="summary-item">
              <h2>87.50</h2>
              <p>Soil Moisture</p>
              <FaTint className="icon" />
            </div>
            <div className="summary-item">
              <h2>32.50</h2>
              <p>Temperature</p>
              <FaThermometerHalf className="icon" />
            </div>
            <div className="summary-item">
              <h2>85%</h2>
              <p>Humidity</p>
              <FaTint className="icon" />
            </div>
            <div className="summary-item">
              <h2>5.8</h2>
              <p>pH Level</p>
              <FaLeaf className="icon" />
            </div>
          </div>
          <section className="daily-summary">
            <h3>Daily Summary</h3>
            <div className="chart">
              {/* Insert chart component or code here */}
            </div>
          </section>
          <section className="last-logged">
            <h3>Last Logged</h3>
            <ul>
              <li>Harold - 6 hours ago</li>
              <li>Hanz Miguel - 7 hours ago</li>
              <li>Hendrik Michael - 12 hours ago</li>
            </ul>
          </section>
        </main>
      </div>
    </div>
  );
};

export default Dashboard;
