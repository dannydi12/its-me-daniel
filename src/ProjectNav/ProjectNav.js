import React from 'react';
import './ProjectNav';

function ProjectNav(props) {
  const categories = props.categories.map((category, i) => (
    <li key={i} onClick={() => props.update(category)} className={'nav-title' + props.currentCategory === category ? 'nav-underline' : ''}>
      {category}
    </li>
  ));
  return (
    <nav>
      <ul>
        {categories}
      </ul>
    </nav>
  );
}

export default ProjectNav;