jest.mock('@times-visuals/web-component-harness');

import React from 'react';
import { render } from '@testing-library/react';

import { Root } from '../index';

describe('Root', () => {
  it('should render correctly', () => {
    const { asFragment } = render(<Root />);

    expect(asFragment()).toMatchSnapshot();
  });

  it('should render correctly when a name is passed', () => {
    const { getByText } = render(<Root name="The Times" />);

    expect(getByText('The Times is here')).toBeTruthy();
  });
});
