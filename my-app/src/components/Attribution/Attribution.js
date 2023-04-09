import React from "react";
import styles from "./Attribution.styled.jsx";
import { Link } from "react-router-dom";

function Attribution() {
  return (
    <>
      <main className="attribution">
        <div className="attribution-container">
          <header>
            <h1>Attribution</h1>
          </header>
          <blockquote>
            &quot;If I have seen further it is by standing on the shoulders of
            Giants.&quot;
            <br />- Isaac Newton, 1675
          </blockquote>
          <ul>
            <li>
              Avatar made by
              <a
                href="https://getavataaars.com/"
                target="_blank"
                rel="noopener noreferrer"
              >
                {" "}
                Avataaar.com
              </a>
            </li>
            <li>
              Fonts used:
              <a
                href="https://fonts.google.com/specimen/Poppins"
                target="_blank"
                rel="noopener noreferrer"
              >
                {" "}
                Poppins
              </a>{" "}
              and
              <a
                href="https://www.cufonfonts.com/font/segoe-ui-4"
                target="_blank"
                rel="noopener noreferrer"
              >
                {" "}
                Segoe UI
              </a>
            </li>
            <li>
              Code block style by{" "}
              <a
                href="https://github.com/akiran/react-highlight"
                target="_blank"
                rel="noopener noreferrer"
              >
                Akiran
              </a>
            </li>
          </ul>
          <Link className="back" to="/">
            Back
          </Link>
        </div>
      </main>
      <style jsx>{styles}</style>
    </>
  );
}

export default Attribution;
