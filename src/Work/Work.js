import React, { useState } from 'react';
import './Work.css';
import Fade from 'react-reveal/Fade';
import ProjectCard from '../ProjectCard/ProjectCard';
import ProjectNav from '../ProjectNav/ProjectNav';
import STORE from './ProjectsStore';

function Work() {
  const [categoryState, setCategoryState] = useState('Featured');

  const allProjects = STORE
    .filter((project) => project.category.find((category) => category === categoryState));
  const filteredProjects = allProjects
    .map((project, i) => <ProjectCard key={i} project={project} />);

  return (
    <section className="work-section">
      <div className="section-wrapper">
        <header>
          <h2>Work</h2>
          <ProjectNav categories={['Featured', 'Other']} update={setCategoryState} currentCategory={categoryState} />
        </header>
        <div className="projects">
          <Fade duration={2000} spy={filteredProjects}>
            {filteredProjects}
          </Fade>
        </div>
      </div>
    </section>
  );
}

export default Work;
