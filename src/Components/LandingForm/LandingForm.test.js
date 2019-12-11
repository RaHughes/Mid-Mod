import React from 'react';
import { shallow } from 'enzyme';
import LandingForm from './LandingForm';

describe('LandingForm', () => {
  it('Should match snapshot', () => {
    const wrapper = shallow(<LandingForm />);
    expect(wrapper).toMatchSnapshot();
  })

  it('should update shate when handleChange is called', () => {
    const wrapper = shallow(<LandingForm />)
    const event = { target: { name: 'name', value: 'Leonardo Dicaprio' } };
    const outcome = 'Leonardo Dicaprio';
    wrapper.instance().handleChange(event);
    expect(wrapper.state('name')).toEqual(outcome);
  })
})