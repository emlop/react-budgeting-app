import React from 'react';
import { shallow } from 'enzyme';
import Header from '../../components/Header';

// Header Component Test Case
test('should render Header Component', () => {
  const wrapper = shallow(<Header />);
  expect(wrapper).toMatchSnapshot();
});