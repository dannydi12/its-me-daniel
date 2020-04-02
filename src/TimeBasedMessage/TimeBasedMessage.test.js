import React from 'react';
import ReactDOM from 'react-dom';
import TimeBasedMessage from './TimeBasedMessage';

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<TimeBasedMessage />, div);
  ReactDOM.unmountComponentAtNode(div);
});