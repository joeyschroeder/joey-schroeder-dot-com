import React from 'react';
import { create } from 'react-test-renderer';
import { Author } from './author.component';

describe('<Author />', () => {
  it('should render correctly', () => {
    const component = create(<Author />).toJSON();
    expect(component).toMatchSnapshot();
  });
});
