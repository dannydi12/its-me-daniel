import React from 'react';
import ReactDOM from 'react-dom';
import ProjectNav from './ProjectNav';

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<ProjectNav categories={['Featured', 'Freelance']} update={() => {}} currentCategory="Featured" />, div);
  ReactDOM.unmountComponentAtNode(div);
});
