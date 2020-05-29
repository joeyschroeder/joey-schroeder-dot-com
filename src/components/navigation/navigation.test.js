import React from 'react';
import { create } from 'react-test-renderer';
import { Navigation } from './navigation.component';

describe('<Navigation />', () => {
  it('should render correctly', () => {
    const component = create(<Navigation />).toJSON();
    expect(component).toMatchSnapshot();

    const componentActive = create(<Navigation active />).toJSON();
    expect(componentActive).toMatchSnapshot();
  });
});
