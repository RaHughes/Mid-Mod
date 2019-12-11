import React from 'react';
import { shallow } from 'enzyme';
import { getData, postData } from '../apiCalls';
import App from './App';

jest.mock('../apiCalls.js')

describe('App', () => {
  it('Should match snapshot', () => {
    const wrapper = shallow(<App />);
    expect(wrapper).toMatchSnapshot();
  })

  it('Should call getData', () => {
    getData.mockImplementation(() => {  return Promise.resolve([{id: 1, name: 'Becky', date: '7/30', time: '8:00', number: 2}])})
    shallow(<App />)
    expect(getData).toHaveBeenCalled()
  })

  it('Should add a new Reservation', () => {
    // const mockObj = { id: 2, name: 'Henry Lee Lucas', date: '7/29', time: '7:30', number: 1 }
    postData.mockImplementation(() => { return Promise.resolve({id: 2, name: 'Henry Lee Lucas', date: '7/29', time: '7:30', number: 1})})
    shallow(<App />)
    // addReserve(mockObj)
    expect(postData).toHaveBeenCalled
  })
})

