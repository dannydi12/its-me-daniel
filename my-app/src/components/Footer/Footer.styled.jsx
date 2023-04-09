import css from "styled-jsx/css";

export default css`
  .footer {
    background-color: #a29bfe;
    display: flex;
    flex-direction: column;
    align-items: center;
    color: #fff;
    font-size: 0.8em;
  }

  .footer a {
    color: #fff;
  }

  .footer p {
    margin: 7px;
  }

  .footer p:first-child {
    margin-top: 14px;
  }

  .footer p:last-child {
    margin-bottom: 14px;
  }
`;
