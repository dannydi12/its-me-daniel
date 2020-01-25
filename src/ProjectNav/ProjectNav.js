import React from 'react';
import './ProjectNav.css';

function ProjectNav(props) {
  const categories = props.categories.map((category, i) => (
    <li key={i} onClick={() => props.update(category)}>
      {props.currentCategory === category ? <span className='nav-underline'>{category}</span> : category}
    </li>
  ));
  return (
    <nav className='project-nav'>
      <ul>
        {categories}
      </ul>
    </nav>
  );
}

export default ProjectNav;