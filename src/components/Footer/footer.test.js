import React from 'react';
import { shallow } from 'enzyme';
import toJson from 'enzyme-to-json';
import Footer from './index';
import enzymeconf from '../../utils/enzyme';

it('renders correctly', () => {
  const tree = shallow(<Footer />);
  expect(toJson(tree)).toMatchSnapshot();
});
