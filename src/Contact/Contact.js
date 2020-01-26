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
        <ul>
          <li><a href='https://github.com/dannydi12/' target='_blank' rel="noopener noreferrer">Github</a></li>
          <li><a href='https://www.linkedin.com/in/danieldivenere/' target='_blank' rel="noopener noreferrer">LinkedIn</a></li>
          <li><a href="mailto:danieldivenere@gmail.com?subject=Hey,%20let's%20talk.&body=What's%20the%20meaning%20of%20Life,%20the%20Universe,%20and%20Everything?" target='_blank' rel="noopener noreferrer">Email</a></li>
        </ul>
        <p>If traditional methods of communication aren't your thing, click the button and it will turn on the custom LED system I installed in my room. It's pretty jarring, and I'll just think it's the robot uprising.</p>
        <button>Scare Daniel</button>
      </div>
    </section>
  );
}

export default Contact;

// What's%20the%20meaning%20of%20Life,%20the%20Universe,%20and%20Everything?\n\nWarmly,\nYour%20Bestest%20Friend