/* eslint-disable no-trailing-spaces */
import React from "react";
import "./About.module.scss";
// import "./tomorrow-night-bright.css";
import Highlight from "react-highlight";

function About() {
  return (
    <section className="about-section">
      <div className="section-wrapper">
        <h2 className="title">I'm a web developer.</h2>
        <p>
          I spend my time building new websites and tools while simultaneously
          willing quirky side-projects into existence. I also have an unhealthy
          obsession with Elon Musk, I tend to impulsively learn new things for
          no apparent reason, and I think Indie music is pretty cool.
        </p>
        <p className="underline">
          <br />
          languages.json:
        </p>
        <div className="my-code">
          <Highlight className="json">
            {`{
  "things I speak": [
    "React",
    "JavaScript",
    "TypeScript",
    "GraphQL"
    "HTML",
    "CSS",
    "Firebase",
    "Node",
    "PostgreSQL",
    "MongoDB"
    `}
            &quot;
            <span className="blinking-cursor">|</span>
            &quot;
            {`
  ]
}`}
          </Highlight>
        </div>
        <p>
          But don't worry, I also speak human languages like English and French.
        </p>
      </div>
    </section>
  );
}

export default About;
