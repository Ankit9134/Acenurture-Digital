import React from 'react';
import { BrowserRouter, Route, Routes } from "react-router-dom";
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
function App() {
  return (
    <div className="App">
      <BrowserRouter>
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
      </BrowserRouter>
    </div>
  );
}

export default App;