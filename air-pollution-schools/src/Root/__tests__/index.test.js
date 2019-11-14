import React from 'react';
import { shallow } from 'enzyme';
import Root from '../index';

const defaultProps = {
  link: 'https://www.example.com',
  label: 'Label here',
  headline: 'Headline here',
  copy: 'Copy here',
};

describe('<Root />', () => {
  it('should render with the default properties', () => {
    const tree = shallow(<Root {...defaultProps} />);
    expect(tree).toMatchSnapshot();
  });
});
