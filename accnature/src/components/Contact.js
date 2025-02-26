import React, { useState } from 'react';
import emailjs from '@emailjs/browser';


function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    message: ''
  });
  const [formStatus, setFormStatus] = useState({
    submitted: false,
    error: null
  });

  // Handle input changes
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value
    });
  };
  const handleSubmit = async (e) => {
    e.preventDefault();
    
    try {
      setFormStatus({ submitted: false, error: null });
      
      const result = await emailjs.send(
        'service_2u0ahvk',  
        'template_nfawllo', 
        formData,
        'dWVGYkJla-kVNzqB1'   
      );
      
      if (result.status !== 200) {
        throw new Error('Failed to submit the form');
      }
      setFormData({
        name: '',
        email: '',
        phone: '',
        message: ''
      });
      
      setFormStatus({ submitted: true, error: null });
    } catch (error) {
      setFormStatus({ submitted: false, error: error.message });
    }
  };

  return (
    <section id="contact" className="contact-section">
      <div className="section-container">
        <h2 className="section-cont">Contact Us</h2>
        <div className="contact-grid">
          <div className="contact-card">
            <h3>Company Information</h3>
            <div className="contact-info">
              <div className="info-item">
                <h4>Address</h4>
                <p>Headquarters: Pune, Maharashtra</p>
              </div>
              <div className="info-item">
                <h4>Phone</h4>
                <p>+91 9699192976</p>
              </div>
              <div className="info-item">
                <h4>Website</h4>
                <p><a href="http://www.acenurture.com">www.acenurture.com</a></p>
              </div>
              <div className="info-item">
                <h4>Email</h4>
                <p><a href="mailto:info@acenurture.com">info@acenurture.com</a></p>
              </div>
              <div className='info-item'>
                <h4>Linkedin</h4>
                <p><a href='https://www.linkedin.com/company/acenurturetehnologies/' target="_blank" rel="noopener noreferrer">Linkedin Profile</a></p>
              </div>
              <div className="info-item">
                <h4>Working Hours</h4>
                <p>Monday - Friday: 9:00 AM - 6:00 PM</p>
                <p>Saturday: 9:00 AM - 2:00 PM</p>
              </div>
            </div>
          </div>
          
          <div className="contact-card">
            <h3>Send us a Message</h3>
            {formStatus.submitted ? (
              <div className="success-message">
                <p>Thank you for reaching out! We'll get back to you soon.</p>
              </div>
            ) : (
              <form className="contact-form" onSubmit={handleSubmit}>
                <div className="form-group">
                  <input 
                    type="text" 
                    name="name" 
                    placeholder="Name" 
                    value={formData.name} 
                    onChange={handleChange} 
                    required 
                  />
                </div>
                <div className="form-group">
                  <input 
                    type="email" 
                    name="email" 
                    placeholder="Email" 
                    value={formData.email} 
                    onChange={handleChange} 
                    required 
                  />
                </div>
                <div className="form-group">
                  <input 
                    type="tel" 
                    name="phone" 
                    placeholder="Phone No." 
                    value={formData.phone} 
                    onChange={handleChange} 
                    required 
                  />
                </div>
                <div className="form-group">
                  <textarea 
                    name="message" 
                    placeholder="Your Message" 
                    value={formData.message} 
                    onChange={handleChange} 
                    required 
                  />
                </div>
                <div className="form-group">
                  <button type="submit">Send Message</button>
                </div>
                {formStatus.error && (
                  <div className="error-message">
                    <p>{formStatus.error}</p>
                  </div>
                )}
              </form>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}

export default Contact;