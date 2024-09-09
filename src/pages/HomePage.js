import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './HomePage.css';
import backgroundImage from '../assets/images/img2.jpeg'; // Ensure this path is correct

const HomePage = () => {
  const [dropdownVisible, setDropdownVisible] = useState(false);

  // Toggle the dropdown visibility
  const toggleDropdown = () => {
    setDropdownVisible(!dropdownVisible);
  };

  return (
    <div className='bgimg' style={{ backgroundImage: `url(${backgroundImage})` }}>
      <div className="home-container">
        <h2>Welcome to the Cyber Secure Mindset</h2>
        <p>
          The Cyber Secure Mindset Framework is designed to help you reduce your chances of becoming a cybercrime victim
          without needing an advanced degree in computers or purchasing additional products.
        </p>
        <p>
          Learn the strategies to protect your family, your business, and yourself against the ever-evolving threats
          in the digital world.
        </p>

        {/* Regular buttons for larger screens */}
        <div className="home-buttons">
          <Link to="/framework" className="btn">Explore Framework</Link>
          <Link to="/scams" className="btn">Learn About Scams</Link>
        </div>

        {/* Dropdown button for screens below 500px */}
        <div className="dropdown-container">
          <button className="btn dropdown-toggle" onClick={toggleDropdown}>
            More Options
          </button>
          {dropdownVisible && (
            <div className="dropdown-content">
              <Link to="/framework" className="btn dropdown-link">Explore Framework</Link>
              <Link to="/scams" className="btn dropdown-link">Learn About Scams</Link>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default HomePage;
