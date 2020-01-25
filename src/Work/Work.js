import React from 'react';
import './Work.css';
import ProjectCard from '../ProjectCard/ProjectCard';
import STORE from './ProjectsStore';

function Work() {
  let displayProjects = STORE.map((project, i) =>
    (<ProjectCard key={i} project={project} />)
  );
  return (
    <section className='work-section'>
      <div className='section-wrapper'>
        {displayProjects}
      </div>
    </section>
  );
}

export default Work;