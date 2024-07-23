import React from 'react';
import { FaHome, FaChartLine, FaCog } from 'react-icons/fa';
import './sidebar.css';

const Sidebar = () => {
  return (
    <nav className="sidebar">
      <ul>
        <li><FaHome className="sidebar-icon" /> Home</li>
        <li><FaChartLine className="sidebar-icon" /> Analytics</li>
        <li><FaCog className="sidebar-icon" /> Settings</li>
      </ul>
    </nav>
  );
};

export default Sidebar;
