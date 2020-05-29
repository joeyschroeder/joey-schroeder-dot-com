import React from 'react';
import { create } from 'react-test-renderer';
import { Stripes } from './stripes.component';

describe('<Stripes />', () => {
  it('should render correctly', () => {
    const component = create(<Stripes />).toJSON();
    expect(component).toMatchSnapshot();
  });
});
