import React from 'react';
import { shallow } from 'enzyme';
import Card from './Card'

describe('Card', () => {
  it('Should match snapshot', () => {
    const wrapper = shallow(<Card />);
    expect(wrapper).toMatchSnapshot();
  })
})