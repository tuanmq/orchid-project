import React from 'react';
import './Contact.css';

const Contact = () => {
  return (
    <div className="contact-page">
      <h2>📞 Contact Us</h2>
      <p>If you have any questions, feel free to reach out to us!</p>

      <div className="contact-info">
        <p><strong>Email:</strong> tuanmqse1705652@fpt.edu.vn</p>
        <p><strong>Phone:</strong> 0842494586</p>
        <p><strong>Address:</strong> 32/21 Vo Van Hat, Quan 9, tp.HCM</p>
      </div>

      <form className="contact-form">
        <label>Name:</label>
        <input type="text" placeholder="Your Name" required />

        <label>Email:</label>
        <input type="email" placeholder="Your Email" required />

        <label>Message:</label>
        <textarea placeholder="Your Message..." rows="4" required />

        <button type="submit">Send Message</button>
      </form>
    </div>
  );
};

export default Contact;
