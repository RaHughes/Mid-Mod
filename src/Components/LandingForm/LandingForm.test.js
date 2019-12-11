import React from 'react';
import { shallow } from 'enzyme';
import LandingForm from './LandingForm';

describe('LandingForm', () => {
  it('Should match snapshot', () => {
    const wrapper = shallow(<LandingForm />);
    expect(wrapper).toMatchSnapshot();
  })
})