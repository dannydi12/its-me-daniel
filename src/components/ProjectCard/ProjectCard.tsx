import React, { FC } from "react";
import styles from "./ProjectCard.styled";
import Image from "next/image";
import { clickEvent } from "@/utils/tracking";

type Props = {
  title: string;
  description: string;
  image: string;
  languages: string[];
  repo?: string;
  live: string;
};

const ProjectCard: FC<Props> = ({
  title,
  description,
  image,
  languages,
  repo,
  live,
}) => {
  return (
    <>
      <div className="project-card">
        <div className="project-image">
          <Image
            src={image}
            quality={100}
            fill
            alt={`${title} landing page.`}
          />
        </div>

        <div className="project-wrapper">
          <h5 className="project-title">{title}</h5>
          <p>{description}</p>
          <p>
            {languages.map((language, i) => (
              <span key={i} className="language">
                {language}
                {i + 1 === languages.length ? "" : ", "}
              </span>
            ))}
          </p>
          <div className="project-links">
            <a
              onClick={() => clickEvent("Live", title)}
              target="_blank"
              rel="noopener noreferrer"
              href={live}
            >
              Live
            </a>
            {repo && (
              <a
                onClick={() => clickEvent("Repo", title)}
                target="_blank"
                rel="noopener noreferrer"
                href={repo}
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
};

export default ProjectCard;
