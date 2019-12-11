import React from 'react';
import { shallow } from 'enzyme';
import { getData } from '../apiCalls';
import App from './App';

jest.mock('../apiCalls.js')

describe('App', () => {
  it('Should match snapshot', () => {
    const wrapper = shallow(<App />);
    expect(wrapper).toMatchSnapshot();
  })

  it('Should call getData', () => {
    getData.mockImplementation(() => {  return Promise.resolve([{ id: 1, name: 'Becky', date: '7/30', time: '8:00', number: 2}])})
    shallow(<App />)
    expect(getData).toHaveBeenCalled()
  })
})

