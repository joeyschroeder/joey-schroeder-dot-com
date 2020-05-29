import React from 'react';
import { create } from 'react-test-renderer';
import { Stripe } from './stripe.component';

describe('<Stripe />', () => {
  it('should render correctly', () => {
    const component = create(<Stripe />).toJSON();
    expect(component).toMatchSnapshot();
  });
});
