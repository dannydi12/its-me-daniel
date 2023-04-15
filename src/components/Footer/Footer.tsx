import React, { FC } from "react";
import styles from "./Footer.styled";
import Link from "next/link";

const Footer: FC = () => {
  return (
    <>
      <footer className="footer">
        <Link href="/attribution">
          <p className="link">Attribution</p>
        </Link>
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
};

export default Footer;
