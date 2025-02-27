import React from 'react';
import { Facebook, Twitter, Linkedin, Github, Mail, Phone, MapPin } from 'lucide-react';
import { Link } from "react-router-dom";
import '../Style/Footer.css'

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-container">
        <div className="footer-content">
          <div className="footer-brand">
            <h2 className="brand-title">AceNurture Digital</h2>
            <p className="brand-description">
              Transform your business with cutting-edge technology solutions. 
              Let's build the future together.
            </p>
            <a href="/contact" className="cta-button">
              Get Started
            </a>
          </div>
          
          {/* Quick Links */}
          <div className="footer-links">
            <h3 className="section-title-f">Quick Links</h3>
            <ul>
              <li><a href="/">Home</a></li>
              <li><Link to="/careers">Careers</Link></li>
                        <li><Link to="/industry">Industry</Link></li>
                        <li><Link to="/contact">Contact</Link></li>
            </ul>
          </div>

          {/* Services Links */}
          <div className="footer-services">
            <h3 className="section-title-f">Services</h3>
            <ul>
              <li> <Link to="/staffingservice">Staffing Service</Link></li>
              <li><Link to="/servicecharge">Digital Marketing</Link></li>
              <li><Link to="/learningDevelopment">Software Development</Link></li>
              <li><Link to="/serviceoffered"> Learning & Training</Link></li>
            </ul>
          </div>
          
          {/* Contact Information */}
          <div className="footer-contact">
            <h3 className="section-title-f">Contact Us</h3>
            <ul>
              <li>
                <a href="mailto:info@acenurture.com">
                  <Mail className="icon" />
                  <span>info@acenurture.com</span>
                </a>
              </li>
              <li>
                <a href="tel:+919699192976">
                  <Phone className="icon" />
                  <span>+91 9699192976</span>
                </a>
              </li>
              <li>
                <a href="https://maps.google.com/?q=Pune,Maharashtra">
                  <MapPin className="icon" />
                  <span>Pune, Maharashtra</span>
                </a>
              </li>
              {/* <li>
                <a href="https://www.linkedin.com/company/acenurture-digital/">
                <Linkedin className="icon" size={15} />
                  <span>LinkedIn Profile</span>
                </a>
              </li> */}
            </ul>
          </div>
        </div>
        
        {/* Footer Bottom */}
        <div className="footer-bottom">
          <div className="bottom-content">
            <div className="social-icons">
              <a href="https://www.facebook.com/share/12FfWg9cXKn/" aria-label="Facebook">
                <Facebook className="icon" />
              </a>
              <a href="https://twitter.com/acenurture" aria-label="Twitter">
                <Twitter className="icon" />
              </a>
              <a href="https://www.linkedin.com/company/acenurture-digital/" aria-label="LinkedIn">
                <Linkedin className="icon" />
              </a>
              <a href="https://github.com/acenurture" aria-label="GitHub">
                <Github className="icon" />
              </a>
            </div>
            <div className="bottom-text">
              <span>© 2025 AceNurture. All rights reserved.</span>
              <div className="legal-links">
                <a href="/privacy">Privacy Policy</a>
                <a href="/terms">Terms of Service</a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;