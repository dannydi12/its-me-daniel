import React from 'react';
import './ProjectNav.css';
import ReactGA from 'react-ga';

function ProjectNav(props) {
  const clickEvent = (title, type) => {
    ReactGA.event({
      category: 'User',
      action: `Clicked ${type} link in ${title}`
    });
  }
  const categories = props.categories.map((category, i) => (
    <li key={i}>
      <button onClick={() => {
        props.update(category);
        clickEvent('Project Nav Bar', category);
      }}>
        {props.currentCategory === category ?
          <span className='b-text nav-underline'>{category}</span> : <span className='b-text'>{category}</span>}
      </button>
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