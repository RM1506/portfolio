import React from "react";
import {
  FaGithub,
  FaTwitter,
  FaInstagram,
  FaLinkedinIn,
} from "react-icons/fa";
import './footer.css';  // Import the footer CSS file

function Footer() {
  return (
    <>
      <hr className="footer-divider" />
      <footer className="footer">
        <div className="footer-container">
          <div className="footer-content">
            <div className="footer-icons">
              <a href="https://www.linkedin.com/in/rishabh-mishra-64a5a0242/" target="_blank" rel="noopener noreferrer">
                <FaLinkedinIn className="icon linkedin" />
              </a>
              <a href="https://github.com/RM1506" target="_blank" rel="noopener noreferrer">
                <FaGithub className="icon github" />
              </a>
              <a href="https://twitter.com/" target="_blank" rel="noopener noreferrer">
                <FaTwitter className="icon twitter" />
              </a>
              <a href="https://instagram.com/" target="_blank" rel="noopener noreferrer">
                <FaInstagram className="icon instagram" />
              </a>
            </div>
            <div className="footer-text">
              <p>&copy; 2024 Rishabh Mishra. All rights reserved.</p>
            </div>
          </div>
        </div>
      </footer>
    </>
  );
}

export default Footer;
