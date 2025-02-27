import React from 'react';
import { BrowserRouter, Routes, Route, useNavigate, useLocation } from "react-router-dom";
import './App.css';

// Component imports
import Navbar from './components/Navbar';
import Home from './components/Home';
import Industry from './components/Industry';
import Contact from './components/Contact';
import Footer from './components/Footer';
import AboutUs from './components/Aboutus';
import CoreValues from './components/Values';
import StaffingPartnerPage from './components/Choose';
// import Connect from './components/Connect';
import ServiceOffered from './components/SoftwareDevelopment';
import ServiceCharges from './components/DigitalMarketing';
import StaffingService from './components/StaffingService';
import CareerPage from './components/Careers';
import LearningDevelopment from './components/LearningDevelopment';
import Hero from './components/Hero';
import OurTeam from './components/OurTeam';
  function AppContent() {
  const navigate = useNavigate();
  const location = useLocation();

  useEffect(() => {
    const handleGlobalClicks = (e) => {
      const interactiveElements = ['input', 'textarea', 'select', 'option', 'label'];
      const isInteractive = interactiveElements.includes(e.target.tagName.toLowerCase());
    
      const clickableRoles = ['button', 'checkbox', 'radio', 'switch', 'tab', 'menuitem'];
      const hasClickableRole = e.target.getAttribute('role') && 
                               clickableRoles.includes(e.target.getAttribute('role'));
      
      const isInForm = e.target.closest('form');
      
      const isLink = e.target.tagName.toLowerCase() === 'a' || e.target.closest('a');
      
      if (isInteractive || hasClickableRole || (isInForm && isInteractive)) {
        return;
      }
      
      if (isLink) {
        e.preventDefault();
        
     
        const linkElement = e.target.tagName.toLowerCase() === 'a' ? e.target : e.target.closest('a');
        
       
        const href = linkElement.getAttribute('href');
        
       
        if (href) {
         
          if (href.startsWith('/') || href.startsWith('#') || href.includes(window.location.origin)) {
            // Extract the path from the full URL if needed
            let path = href;
            if (href.includes(window.location.origin)) {
              path = href.replace(window.location.origin, '');
            }
            
        
            if (href.startsWith('#')) {
              const element = document.getElementById(href.substring(1));
              if (element) {
                element.scrollIntoView({ behavior: 'smooth' });
              }
              return;
            }
            
  
            navigate(path);
          } else {
            
            window.open(href, '_blank');
          }
        }
      }
    };
    document.addEventListener('click', handleGlobalClicks, true);
    
    // Clean up
    return () => {
      document.removeEventListener('click', handleGlobalClicks, true);
    };
  }, [navigate]);

  return (
    <>
    <div className="App">
        <Navbar />
        <Hero />
        <Routes>
          <Route path="/" element={
            <>
              <Home />
              <AboutUs />
              <CoreValues />
              <StaffingPartnerPage />
              {/* <Connect /> */}
            </>
          } />

          {/* Services routes */}
          {/* <Route path="/services" element={<Services />} /> */}
          <Route path="/staffingservice" element={<StaffingService />} />
          <Route path="/servicecharge" element={<ServiceCharges />} />
          <Route path="/serviceoffered" element={<ServiceOffered />} />
          <Route path="/learningDevelopment" element={<LearningDevelopment />} />
          <Route path="/careers" element={<CareerPage />} />
          <Route path='/ourteam' element={<OurTeam />}/>
          <Route path="/industry" element={<Industry />} />
          <Route path="/contact" element={ <>
            {/* { <Contex /> } */}
            <Contact />
            </>} />
        </Routes>
        <Footer />
    </div>
<>
  );
}
function App() {
  return (
    <BrowserRouter>
      <AppContent />
    <BrowserRouter />
  );
}

export default App;
