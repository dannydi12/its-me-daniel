import css from "styled-jsx/css";

export default css`
  .landing {
    min-height: 50vh; /* Either 40, 50, or 60vh */
    text-align: center;
    display: flex;
    flex-direction: column;
    align-items: center;
    background-color: #a29bfe;
    color: white;
    justify-content: space-between;
  }

  .landing-container {
    height: 50%;
    justify-content: center;
    display: flex;
    flex-direction: column;
    margin-top: 20px;
  }

  .landing-container h1 {
    margin: 0;
  }

  .landing svg {
    margin: 0 auto;
    margin-top: auto;
    height: 14.5em;
  }

  @media only screen and (min-width: 1000px) {
    .landing h1 {
      font-size: 5em;
    }

    .landing-container {
      height: auto;
      margin-bottom: auto;
      margin-top: auto;
    }
  }
`;
