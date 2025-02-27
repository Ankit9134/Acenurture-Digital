import React, { useState, useEffect, useRef } from "react";
import { Link, useNavigate } from "react-router-dom";
import "../Style/drop.css";

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState(null);
  const dropdownRef = useRef(null);
  const navigate = useNavigate();

  // Toggle Mobile Menu
  const toggleMenu = (e) => {
    e.stopPropagation(); // Stop event from bubbling up
    setMenuOpen(!menuOpen);
    setActiveDropdown(null);
  };

  // Toggle Dropdowns (Only one at a time)
  const toggleDropdown = (e, dropdown) => {
    e.preventDefault(); // Prevent default behavior
    e.stopPropagation(); // Stop event bubbling
    setActiveDropdown(activeDropdown === dropdown ? null : dropdown);
  };

  // Close Dropdown on Outside Click
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setActiveDropdown(null);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  // Close Mobile Menu on Link Click
  const closeMenu = () => {
    setMenuOpen(false);
    setActiveDropdown(null);
  };

  // Handle navigation without refresh
  const handleNavigation = (e, path) => {
    e.preventDefault();
    e.stopPropagation();
    closeMenu();
    navigate(path);
  };

  return (
    <nav>
      <div className="nav-container">
        <Link 
          to="/" 
          className="logo" 
          onClick={(e) => handleNavigation(e, "/")}
        >
          <img src={require("../Assets/logo1.jpg")} alt="Logo" />
          AceNurture Digital
        </Link>

        <div 
          className={`menu-icon ${menuOpen ? "active" : ""}`} 
          onClick={toggleMenu}
        >
          <span></span>
          <span></span>
          <span></span>
        </div>
        
        <ul className={`nav-links ${menuOpen ? "active" : ""}`}>
          <li>
            <Link 
              to="/" 
              onClick={(e) => handleNavigation(e, "/")}
            >
              Home
            </Link>
          </li>
          
          <li className="services-dropdown" ref={dropdownRef}>
            <button
              className={`dropdown-button ${activeDropdown === "services" ? "active" : ""}`}
              onClick={(e) => toggleDropdown(e, "services")}
            >
              Services
              <svg 
                className={`dropdown-arrow ${activeDropdown === "services" ? "open" : ""}`} 
                fill="none" 
                stroke="currentColor" 
                viewBox="0 0 20 20"
              >
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7" />
              </svg>
            </button>

            <div className={`dropdown-menu ${activeDropdown === "services" ? "open" : ""}`}>
              <Link 
                to="/staffingservice" 
                className="dropdown-item" 
                onClick={(e) => handleNavigation(e, "/staffingservice")}
              >
                Staffing Service
              </Link>
              <Link 
                to="/servicecharge" 
                className="dropdown-item" 
                onClick={(e) => handleNavigation(e, "/servicecharge")}
              >
                Digital Marketing
              </Link>
              <Link 
                to="/learningDevelopment" 
                className="dropdown-item" 
                onClick={(e) => handleNavigation(e, "/learningDevelopment")}
              >
                Learning & Training 
              </Link>
              <Link 
                to="/serviceoffered" 
                className="dropdown-item" 
                onClick={(e) => handleNavigation(e, "/serviceoffered")}
              >
                Design & Development 
              </Link>
            </div>
          </li>
          
          <li>
            <Link 
              to="/careers" 
              onClick={(e) => handleNavigation(e, "/careers")}
            >
              Careers
            </Link>
          </li>
          
          <li>
            <Link 
              to="/industry" 
              onClick={(e) => handleNavigation(e, "/industry")}
            >
              Industry
            </Link>
          </li>
          
          <li>
            <Link 
              to="/ourteam" 
              onClick={(e) => handleNavigation(e, "/ourteam")}
            >
              Our Team
            </Link>
          </li>
          
          <li>
            <Link 
              to="/contact" 
              onClick={(e) => handleNavigation(e, "/contact")}
            >
              Contact
            </Link>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
