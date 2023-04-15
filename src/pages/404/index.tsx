import React, { FC } from "react";
import Link from "next/link";
import css from "styled-jsx/css";

const NotFound: FC = () => {
  return (
    <>
      <main className="not-found">
        <div className="not-found-container">
          <h1>404 - Not Found</h1>
          <p>Oops. This could be a sign of a robot uprising...</p>
          <Link href="/">
            <p className="link">Click me to go home</p>
          </Link>
        </div>
      </main>
      <style jsx>{styles}</style>
    </>
  );
};

const styles = css`
  .not-found {
    font-size: 1em;
    background-color: #a29bfe;
    min-height: 100vh;
    width: 100vw;
    padding: 15px;
    display: flex;
    justify-content: center;
    align-items: center;
    text-align: center;
  }

  .not-found-container {
    color: #fff;
    max-width: 100%;
    padding: 15px;
  }

  .link {
    color: #fff;
    text-decoration-color: #fff;
    text-decoration-line: inherit;
  }

  .not-found a:hover {
    color: #fff;
  }

  @media only screen and (min-width: 1000px) {
    .not-found {
      font-size: 3em;
    }
    .not-found-container {
      color: #fff;
      max-width: 80%;
      padding: 30px;
    }
  }
`;

export default NotFound;
