/** @format */

import { useState } from 'react';
import Spinner from './icons/Spinner';
const ContactForm = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');
  const [responseMessage, setResponseMessage] = useState('');
  const [sendingMessage, setSendingMessage] = useState(false);
  const handleNameChange = (event) => {
    setName(event.target.value);
  };

  const handleEmailChange = (event) => {
    setEmail(event.target.value);
  };

  const handleMessageChange = (event) => {
    setMessage(event.target.value);
  };

  const handleSendButtonClick = async () => {
    try {
      setSendingMessage(true);
      const response = await fetch(
        'https://astro-server-z1u9.onrender.com/contact',
        {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({ name, email, message }),
        },
      );

      if (!response.ok) {
        throw new Error('Error sending message.');
      }

      setSendingMessage(false);
      setResponseMessage('Message sent successfully!');
      setName('');
      setEmail('');
      setMessage('');
    } catch (error) {
      setSendingMessage(false);
      console.error('Error sending message:', error);
      setResponseMessage('Error sending message.');
    }
  };

  return (
    <div className="form">
      <legend>
        Send me a message! <br /> Messages in this form will go directly to my
        email.
      </legend>
      <form>
        <label>
          Name
          <input
            onClick={() => setResponseMessage('')}
            type="text"
            id="name"
            name="name"
            value={name}
            onChange={handleNameChange}
            required
          />
        </label>
        <label>
          Email
          <input
            onClick={() => setResponseMessage('')}
            type="email"
            id="email"
            name="email"
            value={email}
            onChange={handleEmailChange}
            required
          />
        </label>
        <label>
          Message
          <textarea
            onClick={() => setResponseMessage('')}
            id="message"
            name="message"
            value={message}
            onChange={handleMessageChange}
            required
          />
        </label>
        {responseMessage && <p>{responseMessage}</p>}
      </form>
      {!sendingMessage && (
        <button
          className="submit"
          onClick={handleSendButtonClick}
        >
          Send
        </button>
      )}

      {sendingMessage && <Spinner />}
    </div>
  );
};

export default ContactForm;
