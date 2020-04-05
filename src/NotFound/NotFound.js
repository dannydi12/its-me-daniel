import React from 'react';
import './NotFound.css';
import { Link } from 'react-router-dom';

function NotFound() {
  return (
    <main className="not-found">
      <div className="not-found-container">
        <h1>404 - Not Found</h1>
        <p>Oops. This could be a sign of a robot uprising...</p>
        <Link to="/">Click me to go home</Link>
      </div>
    </main>
  );
}

export default NotFound;
