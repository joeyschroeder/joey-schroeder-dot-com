import React from 'react';
import { create } from 'react-test-renderer';
import { Title } from './title.component';

describe('<Title />', () => {
  it('should render correctly', () => {
    const component = create(<Title />).toJSON();
    expect(component).toMatchSnapshot();
  });
});
