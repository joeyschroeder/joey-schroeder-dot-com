import React from 'react';
import { create } from 'react-test-renderer';
import { NavigationItem } from './navigation-item.component';

describe('<NavigationItem />', () => {
  it('should render correctly', () => {
    const component = create(<NavigationItem />).toJSON();
    expect(component).toMatchSnapshot();
  });
});
