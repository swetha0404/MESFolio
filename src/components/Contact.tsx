import React, { useState } from 'react';
import '../assets/styles/Contact.scss';
import emailjs from '@emailjs/browser';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import SendIcon from '@mui/icons-material/Send';
import TextField from '@mui/material/TextField';

function Contact() {
  const [successMessage, setSuccessMessage] = useState<string>('');
  const [name, setName] = useState<string>('');
  const [email, setEmail] = useState<string>('');
  const [message, setMessage] = useState<string>('');

  const [nameError, setNameError] = useState<boolean>(false);
  const [emailError, setEmailError] = useState<boolean>(false);
  const [messageError, setMessageError] = useState<boolean>(false);

  const sendEmail = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    setNameError(name === '');
    setEmailError(email === '');
    setMessageError(message === '');

    if (name !== '' && email !== '' && message !== '') {
      const templateParams = {
        name: name,
        email: email,
        message: message
      };

      emailjs.send(
        'swervice_0404',         // Replace with your actual service ID
        'template_swe0404',       // Replace with your actual template ID
        templateParams,
        'BVSnZ-c7n-alY9ymQ'       // Replace with your public key
      ).then(
        (response) => {
          console.log('SUCCESS!', response.status, response.text);
          setSuccessMessage('✅ Thank you! Your message has been sent.');
          setName('');
          setEmail('');
          setMessage('');
          setNameError(false);
          setEmailError(false);
          setMessageError(false);

          setTimeout(() => setSuccessMessage(''), 5000);
        },
        (error) => {
          console.error('FAILED...', error);
          setSuccessMessage('❌ Oops! Something went wrong. Please try again.');
        }
      );
    }
  };

  return (
    <div id="contact">
      <div className="items-container">
        <div className="contact_wrapper">
          <h1>Contact Me</h1>
          <p>Collaboration, recruiting, or just want to say hi?</p>

          {successMessage && (
            <div className="success-message">
              {successMessage}
            </div>
          )}

          <Box
            component="form"
            // noValidate
            className='contact-form'
            onSubmit={sendEmail}
          >
            <div className='form-flex'>
              <TextField
                required
                id="name-input"
                label="Your Name"
                placeholder="What's your name?"
                variant="outlined"
                fullWidth
                value={name}
                onChange={(e) => setName(e.target.value)}
                error={nameError}
                helperText={nameError ? "Please enter your name" : ""}
              />
              <TextField
                required
                id="email-input"
                label="Email / Phone"
                placeholder="How can I reach you?"
                variant="outlined"
                fullWidth
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                error={emailError}
                helperText={emailError ? "Please enter your email or phone number" : ""}
              />
            </div>

            <TextField
              required
              id="message-input"
              label="Message"
              placeholder="Send me any inquiries or questions"
              variant="outlined"
              multiline
              rows={10}
              fullWidth
              value={message}
              onChange={(e) => setMessage(e.target.value)}
              error={messageError}
              helperText={messageError ? "Please enter the message" : ""}
              className="body-form"
            />

            <Button
              type="submit"
              variant="contained"
              endIcon={<SendIcon />}
            >
              Send
            </Button>
          </Box>
        </div>
      </div>
    </div>
  );
}

export default Contact;
