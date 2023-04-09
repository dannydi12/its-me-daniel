import React, { useState } from "react";
import ReactGA from "react-ga";
import styles from "./Contact.styled";
import TimeBasedMesage from "../TimeBasedMessage/TimeBasedMessage";

function Contact() {
  const [danielGotScared, setDanielGotScared] = useState(false);

  const handleClick = async () => {
    // If it's the first time the button was clicked, send the fetch request
    if (!danielGotScared) {
      setDanielGotScared(true);
      await fetch(`/api/surprise`, { method: "POST" });
    }
  };

  const clickEvent = (type) => {
    ReactGA.event({
      category: "User",
      action: `Clicked ${type} link`,
    });
  };
  const hoverEvent = (type) => {
    ReactGA.event({
      category: "User",
      action: `Hovered on ${type} link`,
    });
  };
  return (
    <>
      <section className="contact-section">
        <div className="section-wrapper">
          <header>
            <h2>Contact</h2>
          </header>
          <TimeBasedMesage />
          <ul>
            <li>
              <a
                onMouseEnter={() => hoverEvent("Github")}
                onClick={() => clickEvent("Github")}
                href="https://github.com/dannydi12/"
                target="_blank"
                rel="noopener noreferrer"
              >
                Github
              </a>
            </li>
            <li>
              <a
                onMouseEnter={() => hoverEvent("LinkedIn")}
                onClick={() => clickEvent("LinkedIn")}
                href="https://www.linkedin.com/in/danieldivenere/"
                target="_blank"
                rel="noopener noreferrer"
              >
                LinkedIn
              </a>
            </li>
            <li>
              <a
                onMouseEnter={() => hoverEvent("Email")}
                onClick={() => clickEvent("Email")}
                href="mailto:hi@imdan.io?subject=Hey,%20let's%20talk.&body=What's%20the%20meaning%20of%20Life,%20the%20Universe,%20and%20Everything?"
                target="_blank"
                rel="noopener noreferrer"
              >
                Email
              </a>
            </li>
          </ul>
          <p>
            If traditional methods of communication aren't your thing, click the
            button and it will turn on the custom LED server I installed in my
            room. It's pretty jarring, and I'll just think it's the robot
            uprising.
          </p>
          <button
            type="button"
            onClick={() => {
              clickEvent("'Scare Daniel'");
              handleClick();
            }}
          >
            Scare Daniel
          </button>
        </div>
      </section>
      <style jsx>{styles}</style>
    </>
  );
}

export default Contact;
