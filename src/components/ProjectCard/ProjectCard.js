import React from "react";
import ReactGA from "react-ga";
import PropTypes from "prop-types";
import styles from "./ProjectCard.styled";
import Image from "next/image";

function ProjectCard(props) {
  const clickEvent = (title, type) => {
    ReactGA.event({
      category: "User",
      action: `Clicked ${type} link for ${title}`,
    });
  };

  return (
    <>
      <div className="project-card">
        <div className="project-image">
          <Image
            src={props.project.image}
            quality={100}
            fill
            alt={`${props.project.title} landing page.`}
          />
        </div>

        <div className="project-wrapper">
          <h5 className="project-title">{props.project.title}</h5>
          <p>{props.project.description}</p>
          <p>
            {props.project.languages.map((language, i) => (
              <span key={i} className="language">
                {language}
                {i + 1 === props.project.languages.length ? "" : ", "}
              </span>
            ))}
          </p>
          <div className="project-links">
            <a
              onClick={() => clickEvent(props.project.title, "Live")}
              target="_blank"
              rel="noopener noreferrer"
              href={props.project.live}
            >
              Live
            </a>
            {props.project.repo && (
              <a
                onClick={() => clickEvent(props.project.title, "Repo")}
                target="_blank"
                rel="noopener noreferrer"
                href={props.project.repo}
              >
                Repo
              </a>
            )}
          </div>
        </div>
      </div>
      <style jsx>{styles}</style>
    </>
  );
}

ProjectCard.propTypes = {
  project: PropTypes.shape({
    title: PropTypes.string.isRequired,
    category: PropTypes.array,
    description: PropTypes.string.isRequired,
    image: PropTypes.string.isRequired,
    languages: PropTypes.arrayOf(PropTypes.string).isRequired,
    // eslint-disable-next-line react/forbid-prop-types
    repo: PropTypes.string,
    live: PropTypes.string.isRequired,
  }).isRequired,
};

export default ProjectCard;
