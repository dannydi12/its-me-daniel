import React from "react";
import styles from "./NotFound.styled.jsx";
import { Link } from "react-router-dom";

function NotFound() {
  return (
    <>
      <main className="not-found">
        <div className="not-found-container">
          <h1>404 - Not Found</h1>
          <p>Oops. This could be a sign of a robot uprising...</p>
          <Link to="/">Click me to go home</Link>
        </div>
      </main>
      <style jsx>{styles}</style>
    </>
  );
}

export default NotFound;
