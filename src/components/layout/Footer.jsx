import React from 'react';
import './Footer.css';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-content">
        <div className="social-links">
          <a href="#" className="social-icon">Facebook</a>
          <a href="#" className="social-icon">Instagram</a>
          <a href="#" className="social-icon">Twitter</a>
          <a href="#" className="social-icon">YouTube</a>
        </div>
        <div className="footer-links">
          <div className="footer-column">
            <a href="#">Audio Description</a>
            <a href="#">Investor Relations</a>
            <a href="#">Legal Notices</a>
          </div>
          <div className="footer-column">
            <a href="#">Help Center</a>
            <a href="#">Jobs</a>
            <a href="#">Cookie Preferences</a>
          </div>
          <div className="footer-column">
            <a href="#">Gift Cards</a>
            <a href="#">Terms of Use</a>
            <a href="#">Corporate Information</a>
          </div>
          <div className="footer-column">
            <a href="#">Media Center</a>
            <a href="#">Privacy</a>
            <a href="#">Contact Us</a>
          </div>
        </div>
        <button className="service-code-btn">Service Code</button>
        <p className="copyright">© 1997-2026 Netflix, Inc.</p>
      </div>
    </footer>
  );
};

export default Footer;
