import React, { useState } from 'react';
import { Link } from 'react-router-dom';

function Contact() {
  const [name, setName] = useState('');
  const [number, setNumber] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');

  
  const [submittedData, setSubmittedData] = useState(null);

  const handleSubmit = (e) => {
    e.preventDefault();
    
    setSubmittedData({ name, number, email, message });

    
    setName('');
    setNumber('');
    setEmail('');
    setMessage('');
  };

  return (
    <div>
      <h1>Contact Us</h1>
      <p>If you have any questions, feel free to reach out!</p>

      <Link to="/">← Back to Home</Link><br />
      <Link to="/about">About Us</Link><br /><br />

      <div>
        <h1>Forms</h1>
        <form onSubmit={handleSubmit}>
          <input
            type="text"
            placeholder="Name"
            value={name}
            onChange={(e) => setName(e.target.value)}
          /><br /><br />

          <input
            type="text"
            placeholder="Phone Number"
            value={number}
            onChange={(e) => setNumber(e.target.value)}
          /><br /><br />

          <input
            type="email"
            placeholder="Email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          /><br /><br />

          <textarea
            placeholder="Message"
            value={message}
            onChange={(e) => setMessage(e.target.value)}
          /><br /><br />

          <button type="submit">Submit</button>
        </form>

        
        {submittedData && (
          <div style={{ marginTop: '20px' }}>
            <h2>Submitted Details:</h2>
            <p><strong>Name:</strong> {submittedData.name}</p>
            <p><strong>Number:</strong> {submittedData.number}</p>
            <p><strong>Email:</strong> {submittedData.email}</p>
            <p><strong>Message:</strong> {submittedData.message}</p>
          </div>
        )}
      </div>
    </div>
  );
}

export default Contact;
