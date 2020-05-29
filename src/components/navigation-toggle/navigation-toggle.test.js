import React from 'react';
import { create } from 'react-test-renderer';
import { NavigationToggle } from './navigation-toggle.component';

describe('<NavigationToggle />', () => {
  it('should render correctly', () => {
    const component = create(<NavigationToggle />).toJSON();
    expect(component).toMatchSnapshot();
  });
});
