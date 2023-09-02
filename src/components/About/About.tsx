import React, { FC } from "react";
import styles from "./About.styled";
import Highlight from "react-highlight";

const About: FC = () => {
  return (
    <>
      <section className="about-section">
        <div className="section-wrapper">
          <h2 className="title">I'm a builder.</h2>
          <p>
            I spend my time developing new websites and products while
            simultaneously willing quirky side-projects into existence. I tend
            to impulsively learn new things for no apparent reason, take really
            long walks in nature, and I think Indie music is pretty cool.
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
            But don't worry, I also speak human languages like English and
            French.
          </p>
        </div>
      </section>
      <style jsx>{styles}</style>
    </>
  );
};

export default About;
