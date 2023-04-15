import { clickEvent } from "@/utils/tracking";
import React, { FC } from "react";
import styles from "./ProjectNav.styled";

type Props = {
  categories: string[];
  currentCategory: string;
  update: Function;
};

const ProjectNav: FC<Props> = ({ categories, currentCategory, update }) => {
  return (
    <>
      <nav className="project-nav">
        <ul>
          {categories.map((category, i) => (
            <li key={i}>
              <button
                type="button"
                onClick={() => {
                  update(category);
                  clickEvent(category, "Project Nav Bar");
                }}
              >
                {currentCategory === category ? (
                  <span className="b-text nav-underline">{category}</span>
                ) : (
                  <span className="b-text">{category}</span>
                )}
              </button>
            </li>
          ))}
        </ul>
      </nav>
      <style jsx>{styles}</style>
    </>
  );
};

export default ProjectNav;
