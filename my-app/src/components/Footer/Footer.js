import React from "react";
import styles from "./Footer.styled";
// import { Link } from 'react-router-dom';

function Footer() {
  return (
    <>
      <footer className="footer">
        {/* <p><Link to="/attribution">Attribution</Link></p> */}
        <p>
          Powered by
          <span role="img" aria-label="ice cream">
            &#x1f366;
          </span>
        </p>
      </footer>
      <style jsx>{styles}</style>
    </>
  );
}

export default Footer;
