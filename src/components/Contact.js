import React, { useState } from 'react';
import { validateEmail } from '../utils/helpers';

function ContactForm() {

  const [formState, setFormState] = useState({ name: '', email: '', message: '' });

  const { name, email, message } = formState;

  const [errorMessage, setErrorMessage] = useState('');

  function handleChange(e) {
    if (e.target.name === 'email') {
      const isValid = validateEmail(e.target.value);
      console.log(isValid);
    // isValid conditional statement
    if (!isValid) {
      setErrorMessage('Your email is invalid.');
    } else {
      if (!e.target.value.length) {
        setErrorMessage(`${e.target.name} is required.`);
      } else {
        setErrorMessage('');
      }
    }
    console.log('errorMessage', errorMessage);
    }  
    if (!errorMessage) {
      setFormState({ ...formState, [e.target.name]: e.target.value });
    }
  }

  function handleSubmit(e) {
    e.preventDefault();
    console.log(formState);
  }

  return (
    <section container mx-auto px-10>
      <h1 className="pt-5 pb-5">Contact me</h1>
      <form id="contact-form" onSubmit={handleSubmit}>
        <div className="pb-5">
          <label htmlFor="name">Name:</label>
          <input type="text" defaultValue={name} onBlur ={handleChange} name="name" />
        </div>
        <div className="pb-5">
          <label htmlFor="email">Email address:</label>
          <input type="email" defaultValue={email} name="email" onBlur ={handleChange} />
        </div>
        <div className="pb-5">
          <label htmlFor="message">Message:</label>
          <textarea name="message" defaultValue={message} onBlur ={handleChange} rows="5" />
        </div>
        {errorMessage && (
          <div>
            <p className="error-text">{errorMessage}</p>
          </div>
        )}
        <button type="submit">Submit</button>
      </form>
    </section>
  )
}
  
  export default ContactForm;