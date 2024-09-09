import React, { useState, useEffect, useCallback } from 'react';
import './Header.css';

const Header = () => {
  // State to control dropdown visibility
  const [isDropdownOpen, setDropdownOpen] = useState(false);

  // Function to toggle dropdown
  const toggleDropdown = () => {
    setDropdownOpen(prev => !prev);
  };

  // Function to close dropdown when clicking outside
  const handleClickOutside = useCallback((event) => {
    if (!event.target.closest('.dropdown-container') && isDropdownOpen) {
      setDropdownOpen(false);
    }
  }, [isDropdownOpen]);

  // Add event listener for clicks outside
  useEffect(() => {
    document.addEventListener('click', handleClickOutside);
    return () => {
      document.removeEventListener('click', handleClickOutside);
    };
  }, [handleClickOutside]);

  return (
    <header>
      <h1>Cyber Secure Mindset</h1>
      <nav>
        {/* Dropdown for smaller screens */}
        <div className="dropdown-container">
          <button
            className="dropdown-toggle"
            onClick={toggleDropdown}
            aria-expanded={isDropdownOpen}
            aria-controls="dropdown-menu"
          >
            Menu
          </button>
          <div id="dropdown-menu" className={`dropdown-content ${isDropdownOpen ? 'show' : ''}`}>
            <a href="/" className="dropdown-link">Home</a>
            <a href="/framework" className="dropdown-link">Framework</a>
            <a href="/scams" className="dropdown-link">Scams Awareness</a>
          </div>
        </div>

        {/* Regular links for larger screens */}
        <div className="nav-links">
          <a href="/">Home</a>
          <a href="/framework">Framework</a>
          <a href="/scams">Scams Awareness</a>
          <a href="https://cybersecuremindset.com/">Contact</a>
        </div>
      </nav>
    </header>
  );
};

export default Header;
