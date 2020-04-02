import React, { useState } from 'react';
import moment from 'moment-timezone';
import ReactGA from 'react-ga';
import './Contact.css';
import TimeBasedMesage from '../TimeBasedMessage/TimeBasedMessage';

require('dotenv').config()

function Contact() {
  const [danielGotScared, setDanielGotScared] = useState(false);

  const handleClick = () => {
    if (!danielGotScared) {
      setDanielGotScared(true);
      const currentTimePST = moment().tz("America/Los_Angeles").hour();

      if (currentTimePST >= 8 && currentTimePST <= 22) {
        fetch(process.env.REACT_APP_API_URL, {
          method: 'PUT',
          mode: 'cors',
          headers: {
            'Authorization': process.env.REACT_APP_API_KEY,
            'Content-Security-Policy': 'upgrade-insecure-requests'
          }
        })
          .then(response => {
            if (!response.ok) {
              throw new Error(response)
            }
          })
          .catch(err => {
            
          })
      }
    }
  }

  const clickEvent = (type) => {
    ReactGA.event({
      category: 'User',
      action: `Clicked ${type} link`
    });
  }
  const hoverEvent = (type) => {
    ReactGA.event({
      category: 'User',
      action: `Hovered on ${type} link`
    });
  }
  return (
    <section className='contact-section'>
      <div className='section-wrapper'>
        <header>
          <h2>Contact</h2>
        </header>
        <TimeBasedMesage />
        <ul>
          <li>
            <a onMouseEnter={() => hoverEvent('Github')}
              onClick={() => clickEvent('Github')}
              href='https://github.com/dannydi12/'
              target='_blank'
              rel="noopener noreferrer">Github</a>
          </li>
          <li>
            <a onMouseEnter={() => hoverEvent('LinkedIn')}
              onClick={() => clickEvent('LinkedIn')}
              href='https://www.linkedin.com/in/danieldivenere/'
              target='_blank'
              rel="noopener noreferrer">LinkedIn</a>
          </li>
          <li>
            <a onMouseEnter={() => hoverEvent('Email')}
              onClick={() => clickEvent('Email')}
              href="mailto:danieldivenere@gmail.com?subject=Hey,%20let's%20talk.&body=What's%20the%20meaning%20of%20Life,%20the%20Universe,%20and%20Everything?"
              target='_blank'
              rel="noopener noreferrer">Email</a>
          </li>
        </ul>
        <p>If traditional methods of communication aren't your thing, click the button and it will turn on the custom LED system I installed in my room. It's pretty jarring, and I'll just think it's the robot uprising.</p>
        <button onClick={() => {
          clickEvent('\'Scare Daniel\'')
          handleClick()
        }}>
          Scare Daniel
        </button>
      </div>
    </section>
  );
}

export default Contact;