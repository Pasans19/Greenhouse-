import React from 'react';
import { FaLightbulb, FaLeaf, FaCog, FaDollarSign, FaHeartbeat, FaBan, FaTint, FaMobileAlt } from 'react-icons/fa'; // import icons
import './card.css';

const features = [
  {
    icon: <FaLightbulb />, // Use the imported icons
    title: 'LED lighting and monitoring',
  },
  {
    icon: <FaLeaf />,
    title: 'Soil monitoring',
  },
  {
    icon: <FaCog />,
    title: 'Auto-optimization of a suitable environment',
  },
  {
    icon: <FaDollarSign />,
    title: 'Cut down on operational costs',
  },
  {
    icon: <FaHeartbeat />,
    title: 'Real-time diagnosis',
  },
  {
    icon: <FaBan />,
    title: 'Reduce harvest failures',
  },
  {
    icon: <FaTint />,
    title: 'Optimal irrigation',
  },
  {
    icon: <FaMobileAlt />,
    title: 'Remote management',
  },
];

const FeaturesCard = () => {
  return (
    <div className="features-section">
      <h2>Additional Features</h2>
      <div className="features-grid">
        {features.map((feature, index) => (
          <div className="feature-card" key={index}>
            <div className="feature-icon">{feature.icon}</div> {/* Render icon directly */}
            <h3>{feature.title}</h3>
          </div>
        ))}
      </div>
    </div>
  );
};

export default FeaturesCard;
