import React, { useState } from 'react';
import "./contact.scss";
import axios from 'axios';

function Contact() {
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    /*axios
    .post('/send-email', { email, message })
    .then((response) => {
      console.log(response.data);
      setIsSubmitted(true);
    })
    .catch((error) => {
      console.error(error);
    });*/
    
    setTimeout(() => {
      setIsSubmitted(true);
    }, 1000);

  };

  return (
    <div className='contact' id="contact">
      <div className="left">
        <img src="assets/contact.jpg" alt="" />
      </div>
      <div className="right">
        <h2>Contact</h2>
        <form onSubmit={handleSubmit}>
          <input
            type="text"
            placeholder='Email'
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          <textarea
            placeholder='Message'
            value={message}
            onChange={(e) => setMessage(e.target.value)}
          ></textarea>
          <button type="submit">Envoyer</button>
          {isSubmitted && <span>Message envoyé, merci !</span>}
        </form>
      </div>
    </div>
  );
}

export default Contact;
