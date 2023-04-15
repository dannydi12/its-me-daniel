import React, { FC, useState } from "react";
import styles from "./Work.styled";
import ProjectCard from "../ProjectCard/ProjectCard";
import ProjectNav from "../ProjectNav/ProjectNav";
import STORE from "./ProjectsStore";

const Work: FC = () => {
  const [categoryState, setCategoryState] = useState("Featured");

  const allProjects = STORE.filter((project) =>
    project.category.find((category) => category === categoryState)
  );

  const filteredProjects = allProjects.map((project) => (
    <ProjectCard
      key={project.title}
      title={project.title}
      description={project.description}
      image={project.image}
      languages={project.languages}
      live={project.live}
      repo={project.repo}
    />
  ));

  return (
    <>
      <section className="work-section">
        <div className="section-wrapper">
          <header>
            <h2>Work</h2>
            <ProjectNav
              categories={["Featured", "Other"]}
              update={setCategoryState}
              currentCategory={categoryState}
            />
          </header>
          <div className="projects">{filteredProjects}</div>
        </div>
      </section>
      <style jsx>{styles}</style>
    </>
  );
};

export default Work;
