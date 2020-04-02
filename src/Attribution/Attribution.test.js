import React from 'react';
import routeData from 'react-router';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router } from 'react-router-dom';
import Attribution from './Attribution';

it('renders without crashing', () => {
  const mockLocation = {
    pathname: '/attribution',
    hash: '',
    search: '',
    state: ''
  }

  jest.spyOn(routeData, 'useRouteMatch').mockReturnValue(mockLocation)

  const div = document.createElement('div');
  ReactDOM.render(
    <Router>
      <Attribution />
    </Router>, div);
  ReactDOM.unmountComponentAtNode(div);
});