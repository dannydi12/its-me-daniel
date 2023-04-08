import React from "react";
import "./Footer.module.scss";
// import { Link } from 'react-router-dom';

function Footer() {
  return (
    <footer className="footer">
      {/* <p><Link to="/attribution">Attribution</Link></p> */}
      <p>
        Powered by
        <span role="img" aria-label="ice cream">
          &#x1f366;
        </span>
      </p>
    </footer>
  );
}

export default Footer;
