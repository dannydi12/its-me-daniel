import css from "styled-jsx/css";

export default css`
  .about-section {
    padding: 15px;
    background-color: #fff;
  }

  .underline {
    text-decoration: underline;
    color: black;
  }

  .blinking-cursor {
    animation: 2s blink ease-in infinite;
  }

  .my-code.blinking-cursor {
    background-color: blue;
  }

  .blinking-cursor > span {
    color: #fff !important;
  }

  @keyframes blink {
    0% {
      opacity: 1;
    }
    50% {
      opacity: 0;
    }
    100% {
      opacity: 1;
    }
  }

  .title {
    font-size: 1.6rem;
    line-height: 1.3;
  }

  @media only screen and (min-width: 1000px) {
    .title {
      margin: 40px;
    }
  }
`;
