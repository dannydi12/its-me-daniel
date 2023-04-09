import React from "react";
import styles from "./NotFound.styled.jsx";
import Link from "next/link";

function NotFound() {
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
}

export default NotFound;
