import React from 'react';
import './FrameworkDetails.css';
// Correctly import the image, ensuring the path matches exactly where the image is stored.
import CyberSecureImage from '../assets/images/CyberSecureMindsetFramework.jpg'; // Ensure this path is correct and matches the case
import CyberSecureImage2 from '../assets/images/CyberSecureMindsetFramework2.jpg';
import CyberSecureImage3 from '../assets/images/CyberSecureMindsetFramework3.jpg';
import CyberSecureImage4 from '../assets/images/CyberSecureMindsetFramework4.jpg';
import CyberSecureImage5 from '../assets/images/CyberSecureMindsetFramework5.jpg';
import CyberSecureImage6 from '../assets/images/CyberSecureMindsetFramework6.jpg';
import CyberSecureImage7 from '../assets/images/CyberSecureMindsetFramework7.jpg';
import CyberSecureImage8 from '../assets/images/CyberSecureMindsetFramework8.jpg';

const FrameworkDetails = () => (
  <div className="framework-container">
    <h2>Cyber Secure Mindset Framework</h2>
    {/* Use the imported image variable directly */}
    <img src={CyberSecureImage} alt="Cyber Secure Mindset 1" className="framework-image" />
    <img src={CyberSecureImage2} alt="Cyber Secure Mindset 2" className="framework-image" />
    <img src={CyberSecureImage3} alt="Cyber Secure Mindset 3" className="framework-image" />
    <img src={CyberSecureImage4} alt="Cyber Secure Mindset 4" className="framework-image" />
    <img src={CyberSecureImage5} alt="Cyber Secure Mindset 5" className="framework-image" />
    <img src={CyberSecureImage6} alt="Cyber Secure Mindset 6" className="framework-image" />
    <img src={CyberSecureImage7} alt="Cyber Secure Mindset 7" className="framework-image" />
    <img src={CyberSecureImage8} alt="Cyber Secure Mindset 8" className="framework-image" />
    {/* Add the contact link with hover effect */}
    <a href="https://cybersecuremindset.com/" target="_blank" rel="noopener noreferrer">
      <h3>For more information contact: scottaugenbaum@cybersecuremindset.com</h3>
    </a>
  </div>
);

export default FrameworkDetails;
