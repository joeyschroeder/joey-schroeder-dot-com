import React from 'react';
import { create } from 'react-test-renderer';
import { Icon } from './icon.component';

describe('<Icon />', () => {
  it('should render correctly', () => {
    const component = create(<Icon />).toJSON();
    expect(component).toMatchSnapshot();
  });
});
