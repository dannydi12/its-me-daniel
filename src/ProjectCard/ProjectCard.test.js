import React from 'react';
import ReactDOM from 'react-dom';
import ProjectCard from './ProjectCard';

const project = {
  title: 'Tunezilla',
  category: ['Featured'],
  description: 'A simplistic lyric-fetching web app that optionally provides background and historical information about your favorite songs.',
  image: '/images/tunezilla.png',
  languages: ['HTML', 'CSS', 'Javascript', 'jQuery', 'AJAX'],
  repo: 'https://github.com/dannydi12/tunezilla/',
  live: 'https://dannydi12.github.io/tunezilla/',
};

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<ProjectCard project={project} />, div);
  ReactDOM.unmountComponentAtNode(div);
});
