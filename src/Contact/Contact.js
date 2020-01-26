import React from 'react';
import './Contact.css';
import TimeBasedMesage from '../TimeBasedMessage/TimeBasedMessage';

function Contact() {

  return (
    <section className='contact-section'>
      <div className='section-wrapper'>
        <header>
          <h2>Contact</h2>
        </header>
        <TimeBasedMesage />
      </div>
    </section>
  );
}

export default Contact;