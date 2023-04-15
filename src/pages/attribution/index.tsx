import React, { FC } from "react";
import Link from "next/link";
import css from "styled-jsx/css";

const Attribution: FC = () => {
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
          <Link href="/">
            <p className="back">Back</p>
          </Link>
        </div>
      </main>
      <style jsx>{styles}</style>
    </>
  );
};

const styles = css`
  .attribution {
    font-size: 1em;
    background-color: #a29bfe;
    min-height: 100vh;
    width: 100%;
    color: #fff;
    padding-top: 50px;
  }

  .attribution a {
    color: #fff;
  }

  .attribution blockquote {
    font-size: 1em;
    border-left: 0.3em solid #fff;
    margin-left: 0;
    padding: 1em;
    width: 100%;
  }

  .attribution-container {
    max-width: 80%;
    margin: 0 auto;
  }

  .back {
    text-align: center;
    display: block;
    margin: 0 auto;
    margin-top: 2em;
    color: #fff;
    text-decoration-color: #fff;
    text-decoration-line: inherit;
  }

  @media only screen and (min-width: 1000px) {
    .attribution {
      font-size: 3em;
    }
    .attribution blockquote {
      font-size: 0.6em;
    }
  }
`;

export default Attribution;
