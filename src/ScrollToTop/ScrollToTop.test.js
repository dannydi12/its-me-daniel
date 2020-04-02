import React from 'react';
import { shallow, configure } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import { BrowserRouter as Router } from 'react-router-dom';
import routeData from 'react-router';
import ScrollToTop from './ScrollToTop';

configure({ adapter: new Adapter() });

beforeAll(() => {
  const div = document.createElement('div');
  window.domNode = div;
  document.body.appendChild(div);
})

it('renders without crashing', () => {
  const mockLocation = {
    pathname: '/attribution',
    hash: '',
    search: '',
    state: ''
  }

  jest.spyOn(routeData, 'useRouteMatch').mockReturnValue(mockLocation)

  const wrapper = shallow(
    <Router>
      <ScrollToTop />
    </Router>, { attachTo: window.domNode });
});