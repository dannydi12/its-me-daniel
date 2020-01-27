import React from 'react';
import './ProjectNav.css';

function ProjectNav(props) {
  const categories = props.categories.map((category, i) => (
    <li key={i}>
      <button onClick={() => props.update(category)}>{props.currentCategory === category ? <span className='b-text nav-underline'>{category}</span> : <span className='b-text'>{category}</span>}</button>
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