import css from "styled-jsx/css";

export default css`
  .project-card {
    margin-top: 30px;
    margin-bottom: 50px;
    max-width: 355px;
    margin-left: auto;
    margin-right: auto;
    box-shadow: #00000026 1px 1px 17px;
    height: fit-content;
  }

  .project-wrapper {
    padding: 1em;
  }

  .project-image {
    width: 100%;
    height: 185px;
  }

  .project-title {
    font-size: 1.5em;
    margin-top: 0em;
    margin-bottom: 0.5em;
  }

  .project-card li {
    background-color: #fff;
    border: 3px solid #a29bfe;
    color: #a29bfe;
    padding: 10px;
    margin: 10px;
  }

  .projects-section ul {
    margin-left: -10px;
    justify-content: center;
  }

  .project-links {
    display: flex;
    justify-content: space-evenly;
  }

  .project-links a {
    color: #a29bfe;
    text-decoration: none;
    border: 3px solid #a29bfe;
    padding: 10px;
    min-width: fit-content;
    width: 30%;
    text-align: center;
  }

  .project-links a:hover {
    color: #fff;
    background-color: #a29bfe;
  }

  .language {
    color: rgb(112, 112, 112);
  }
`;
